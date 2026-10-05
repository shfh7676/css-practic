// ============================================================
// HORIZON PROPERTIES — Scroll-Driven Hero Video Controller
// ============================================================
//
// Premium scroll-driven 3D video experience.
// The user's scroll position directly controls the video's currentTime.
// The video NEVER autoplays — we SCRUB the timeline, not play it.
//
// ARCHITECTURE:
//   scroll event → calculate targetTime (passive, cheap)
//   requestAnimationFrame → interpolate currentTime toward target
//   video.currentTime = interpolated value (only when delta > threshold)
//
// PERFORMANCE:
// - Single passive scroll listener; only updates a number
// - Single rAF loop; runs only while hero is in viewport
// - Smoothing interpolation prevents jerky seeking
// - No React state, no layout thrashing — direct video.currentTime only
// - IntersectionObserver gates the rAF loop (stops when hero is off-screen)
//
// VIDEO ENCODING (for best scroll-scrubbing):
// - H.264 MP4 with web-optimized moov atom (faststart/progressive)
// - Frequent keyframes (every 1–2s) for fast random seeking
// - Bitrate moderate enough to avoid decode stalls on mobile
// - Resolution ≤ 1920×1080
// - A VP9/AV1 WebM <source> can be added before the MP4 <source>
//   for better seeking performance on Chrome/Edge.
// ============================================================

let currentCleanup = null;

export function initHeroVideo() {
  // Clean up any previous instance (SPA navigation)
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }

  const section = document.getElementById('heroScrollSection');
  const video   = document.getElementById('heroVideo');
  const fallback = document.getElementById('heroFallback');
  const content = document.getElementById('heroContent');
  const loader  = document.getElementById('heroLoader');

  if (!section || !video) return;

  // ---- prefers-reduced-motion: static fallback ----
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.style.display = 'none';
    if (fallback) fallback.style.opacity = '1';
    if (loader)  loader.style.display = 'none';
    if (content) content.style.opacity = '1';
    return;
  }

  // ---- State ----
  let videoReady    = false;
  let videoDuration = 0;
  let targetTime    = 0;     // where scroll says we should be
  let currentTime   = 0;     // smoothed value actually applied to video
  let rafId         = null;
  let inView        = false;

  const SMOOTHING  = 0.20;   // interpolation factor — smooth yet responsive
  const MIN_DELTA  = 0.002;  // skip seeks smaller than this (prevents flood)

  // ---- Video readiness & loading state ----
  function revealVideo() {
    if (videoReady) return;
    videoDuration = video.duration;
    if (!videoDuration || !isFinite(videoDuration)) return;

    videoReady = true;
    video.classList.add('ready');
    if (fallback) fallback.style.opacity = '0';
    if (loader)  { loader.style.opacity = '0'; setTimeout(() => { loader.style.display = 'none'; }, 600); }
    video.currentTime = 0;          // park on first frame
    currentTime = 0;
    // Ensure the rAF loop is running (it may have idled while waiting)
    if (inView && !rafId) rafId = requestAnimationFrame(tick);
  }

  function showFallback() {
    video.style.display = 'none';
    if (fallback) fallback.style.opacity = '1';
    if (loader)  loader.style.display = 'none';
    if (content) content.style.opacity = '1';
  }

  video.addEventListener('loadedmetadata', revealVideo);
  video.addEventListener('canplaythrough', revealVideo, { once: true });
  video.addEventListener('error', showFallback);

  // ---- Scroll → target time ----
  function updateTarget() {
    if (!section.isConnected) { cleanup(); return; }
    const rect = section.getBoundingClientRect();
    const scrollable = section.offsetHeight - window.innerHeight;
    if (scrollable <= 0) { targetTime = 0; return; }
    // 0 when section top hits viewport top, 1 when bottom hits viewport bottom
    const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
    targetTime = progress * videoDuration;
  }

  // ---- Text fade (fades out during first 35% of the video) ----
  function updateContent() {
    const el = content || document.getElementById('heroContent');
    if (!el) return;
    // Use currentTime (smoothed) so the fade tracks the actual video frame
    const p = videoDuration > 0 ? Math.min(1, currentTime / (videoDuration * 0.35)) : 0;
    el.style.opacity   = String(1 - p);
    el.style.transform = `translateY(${-p * 30}px)`;
  }

  // ---- rAF loop: smooth interpolation + seek ----
  function tick() {
    rafId = null;

    // Only seek when the video is ready; but always keep the loop alive
    // so it picks up the moment the video finishes loading.
    if (videoReady && videoDuration > 0) {
      const diff = targetTime - currentTime;
      if (Math.abs(diff) > MIN_DELTA) {
        currentTime += diff * SMOOTHING;
        if (currentTime < 0) currentTime = 0;
        if (currentTime > videoDuration) currentTime = videoDuration;
        // Only write to the video when the change is meaningful
        if (Math.abs(currentTime - video.currentTime) > MIN_DELTA) {
          try { video.currentTime = currentTime; } catch (_) { /* seeking during transition */ }
        }
      }
    }

    updateContent();
    if (inView) rafId = requestAnimationFrame(tick);
  }

  // ---- Start / stop rAF via IntersectionObserver ----
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      inView = e.isIntersecting;
      if (inView && !rafId) { updateTarget(); rafId = requestAnimationFrame(tick); }
    });
  }, { threshold: 0 });
  io.observe(section);

  // ---- Passive scroll listener (only updates a number) ----
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateTarget(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Initial state ----
  updateTarget();
  updateContent();
  const r = section.getBoundingClientRect();
  if (r.bottom > 0 && r.top < window.innerHeight) {
    inView = true;
    rafId = requestAnimationFrame(tick);
  }

  // ---- Cleanup (SPA navigation or detached DOM) ----
  function cleanup() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    window.removeEventListener('scroll', onScroll);
    io.disconnect();
    video.removeEventListener('loadedmetadata', revealVideo);
    video.removeEventListener('error', showFallback);
  }
  currentCleanup = cleanup;
  return cleanup;
}
