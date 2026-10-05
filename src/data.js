// ============================================================
// HORIZON PROPERTIES — Data Layer
// Structured for future database connection
// ============================================================

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const company = {
  name: 'Horizon Properties',
  phone: '(555) 246-7890',
  email: 'contact@horizonproperties.com',
  address: '1200 Architectural Blvd, Suite 500, Beverly Hills, CA 90210',
  tagline: 'Premium properties in prime locations.',
  description:
    'Horizon Properties is a boutique real estate firm specializing in luxury homes and investment properties. We connect discerning clients with extraordinary residences and high-yield investments, guided by integrity, transparency, and an unwavering commitment to excellence.',
};

export const navLinks = [
  { label: 'Home', href: '#/' },
  { label: 'Properties', href: '#/properties' },
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Team', href: '#/team' },
  { label: 'Contact', href: '#/contact' },
];

// ============================================================
// PROPERTIES
// ============================================================

export const properties = [
  {
    id: 'lakeside-modern-villa',
    name: 'Lakeside Modern Villa',
    location: 'Austin, Texas, USA',
    price: 2350000,
    priceLabel: '$2.35 Million',
    type: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 6200,
    featured: true,
    image: img('1613977257363-707ba9348227'),
    gallery: [
      img('1613977257363-707ba9348227', 1600),
      img('1613977257592-4871e5fcd7c4', 1600),
      img('1613977257365-aaae5a9817ff', 1600),
      img('1670589953882-b94c9cb380f5', 1600),
      img('1706808849780-7a04fbac83ef', 1600),
    ],
    description:
      'A stunning architectural masterpiece set on the shores of Lake Austin. This villa features floor-to-ceiling glass walls that dissolve the boundary between interior and landscape, an infinity-edge pool that merges with the lake, and meticulously curated finishes throughout. The open-plan living space flows seamlessly onto expansive terraces, creating an environment of effortless luxury.',
    features: [
      'Infinity-edge pool overlooking the lake',
      'Floor-to-ceiling glass walls',
      'Smart home automation system',
      'Chef-designed gourmet kitchen',
      'Private dock with boat slip',
      'Wine cellar with climate control',
    ],
    amenities: [
      'Swimming Pool', 'Smart Home', 'Wine Cellar', 'Home Theater',
      'Gym', 'Sauna', 'Garage (3 cars)', 'Landscaped Gardens',
    ],
    agent: 'daniel-morgan',
  },
  {
    id: 'pacific-glass-house',
    name: 'Pacific Glass House',
    location: 'Malibu, California, USA',
    price: 4800000,
    priceLabel: '$4.8 Million',
    type: 'Modern House',
    beds: 6,
    baths: 5,
    sqft: 8400,
    featured: true,
    image: img('1582268611958-ebfd161ef9cf'),
    gallery: [
      img('1582268611958-ebfd161ef9cf', 1600),
      img('1505843513577-22bb7d21e455', 1600),
      img('1613977257363-707ba9348227', 1600),
      img('1717167398817-121e3c283dbb', 1600),
      img('1706808849780-7a04fbac83ef', 1600),
    ],
    description:
      'Perched on the Malibu coastline, the Pacific Glass House is a study in architectural transparency. Walls of glass frame panoramic ocean views from every room, while the cantilevered design creates a sense of suspension over the Pacific. The residence includes a private path to the beach, a spa-grade infinity pool, and interiors by a renowned design firm.',
    features: [
      'Panoramic Pacific Ocean views',
      'Cantilevered architectural design',
      'Private beach access',
      'Spa-grade infinity pool',
      'Solar power integration',
      'Outdoor kitchen and fire pit',
    ],
    amenities: [
      'Ocean View', 'Swimming Pool', 'Smart Home', 'Solar Power',
      'Outdoor Kitchen', 'Fire Pit', 'Garage (4 cars)', 'Spa',
    ],
    agent: 'olivia-carter',
  },
  {
    id: 'desert-horizon-estate',
    name: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona, USA',
    price: 3150000,
    priceLabel: '$3.15 Million',
    type: 'Estate',
    beds: 4,
    baths: 4,
    sqft: 5600,
    featured: true,
    image: img('1613490493576-7fde63acd811'),
    gallery: [
      img('1613490493576-7fde63acd811', 1600),
      img('1591474200742-8e512e6f98f8', 1600),
      img('1580587771525-78b9dba3b914', 1600),
      img('1613977257365-aaae5a9817ff', 1600),
      img('1670589953882-b94c9cb380f5', 1600),
    ],
    description:
      'Set against the dramatic backdrop of the Sonoran Desert, this estate embodies desert modernism at its finest. Rammed-earth walls, native landscaping, and a negative-edge pool create a seamless dialogue between architecture and landscape. The home is designed for both grand entertaining and intimate desert living.',
    features: [
      'Rammed-earth architectural walls',
      'Negative-edge desert pool',
      'Native desert landscaping',
      'Indoor-outdoor living spaces',
      'Observation deck for stargazing',
      'Energy-efficient climate design',
    ],
    amenities: [
      'Swimming Pool', 'Smart Home', 'Garage (3 cars)', 'Landscaped Gardens',
      'Solar Power', 'Home Office', 'Wine Cellar', 'Gym',
    ],
    agent: 'james-wilson',
  },
  {
    id: 'oceanfront-residence',
    name: 'Oceanfront Residence',
    location: 'Miami, Florida, USA',
    price: 5200000,
    priceLabel: '$5.2 Million',
    type: 'Waterfront',
    beds: 6,
    baths: 6,
    sqft: 9100,
    featured: true,
    image: img('1706808849780-7a04fbac83ef'),
    gallery: [
      img('1706808849780-7a04fbac83ef', 1600),
      img('1613977257592-4871e5fcd7c4', 1600),
      img('1717167398817-121e3c283dbb', 1600),
      img('1582268611958-ebfd161ef9cf', 1600),
      img('1613977257363-707ba9348227', 1600),
    ],
    description:
      'A bold statement of waterfront luxury on Miami Beach. This residence features 200 feet of private oceanfront, a resort-style pool deck, and interiors that blend tropical modernism with refined elegance. The lower level opens entirely to the ocean, creating an indoor-outdoor living experience unlike any other in South Florida.',
    features: [
      '200 feet of private oceanfront',
      'Resort-style pool deck',
      'Tropical modernism interiors',
      'Private boat dock',
      'Rooftop terrace with ocean views',
      'Hurricane-rated impact glass',
    ],
    amenities: [
      'Ocean View', 'Swimming Pool', 'Private Dock', 'Smart Home',
      'Rooftop Terrace', 'Outdoor Kitchen', 'Garage (4 cars)', 'Elevator',
    ],
    agent: 'sophia-bennett',
  },
  {
    id: 'modern-hillside-retreat',
    name: 'Modern Hillside Retreat',
    location: 'Los Angeles, California, USA',
    price: 3750000,
    priceLabel: '$3.75 Million',
    type: 'Modern House',
    beds: 4,
    baths: 3,
    sqft: 4800,
    featured: false,
    image: img('1580587771525-78b9dba3b914'),
    gallery: [
      img('1580587771525-78b9dba3b914', 1600),
      img('1613490493576-7fde63acd811', 1600),
      img('1591474200742-8e512e6f98f8', 1600),
      img('1505843513577-22bb7d21e455', 1600),
      img('1613977257365-aaae5a9817ff', 1600),
    ],
    description:
      'Nestled in the Hollywood Hills, this architectural retreat offers privacy and panoramic city views. The multi-level design follows the natural topography, with each level revealing a new perspective of the Los Angeles basin. A glass elevator connects all floors, culminating in a rooftop deck with 360-degree views.',
    features: [
      'Panoramic Los Angeles city views',
      'Multi-level architectural design',
      'Glass elevator connecting all floors',
      'Rooftop deck with 360-degree views',
      'Infinity-edge plunge pool',
      'Integrated home automation',
    ],
    amenities: [
      'City View', 'Swimming Pool', 'Smart Home', 'Elevator',
      'Garage (2 cars)', 'Home Office', 'Gym', 'Wine Cellar',
    ],
    agent: 'olivia-carter',
  },
  {
    id: 'palm-garden-residence',
    name: 'Palm Garden Residence',
    location: 'Beverly Hills, California, USA',
    price: 6400000,
    priceLabel: '$6.4 Million',
    type: 'Mansion',
    beds: 7,
    baths: 8,
    sqft: 12000,
    featured: true,
    image: img('1613977257592-4871e5fcd7c4'),
    gallery: [
      img('1613977257592-4871e5fcd7c4', 1600),
      img('1613977257363-707ba9348227', 1600),
      img('1717167398817-121e3c283dbb', 1600),
      img('1706808849780-7a04fbac83ef', 1600),
      img('1613977257365-aaae5a9817ff', 1600),
    ],
    description:
      'An estate of uncompromising luxury in the heart of Beverly Hills. Set on over an acre of manicured grounds, this residence features a grand motor court, a championship tennis court, and formal gardens designed by a landscape architect. The interiors showcase the finest materials and craftsmanship, with bespoke millwork and imported stone throughout.',
    features: [
      'Over 1 acre of manicured grounds',
      'Championship tennis court',
      'Grand motor court with fountain',
      'Formal gardens by landscape architect',
      'Resort-style pool and spa',
      'Bespoke millwork and imported stone',
    ],
    amenities: [
      'Swimming Pool', 'Tennis Court', 'Smart Home', 'Wine Cellar',
      'Home Theater', 'Gym', 'Sauna', 'Garage (6 cars)',
    ],
    agent: 'daniel-morgan',
  },
  {
    id: 'contemporary-lake-house',
    name: 'Contemporary Lake House',
    location: 'Lake Tahoe, Nevada, USA',
    price: 2950000,
    priceLabel: '$2.95 Million',
    type: 'Lake House',
    beds: 4,
    baths: 3,
    sqft: 4200,
    featured: false,
    image: img('1670589953882-b94c9cb380f5'),
    gallery: [
      img('1670589953882-b94c9cb380f5', 1600),
      img('1613977257365-aaae5a9817ff', 1600),
      img('1580587771525-78b9dba3b914', 1600),
      img('1613490493576-7fde63acd811', 1600),
      img('1591474200742-8e512e6f98f8', 1600),
    ],
    description:
      'A modern interpretation of the classic lake house, this residence blends warm wood tones with contemporary glass and steel. The great room features a two-story stone fireplace and walls of glass overlooking the lake. A private dock, hot tub, and lakeside fire pit make this a year-round retreat.',
    features: [
      'Two-story stone fireplace in great room',
      'Walls of glass overlooking Lake Tahoe',
      'Private dock with boat lift',
      'Lakeside hot tub and fire pit',
      'Heated driveway and walkways',
      'Dual-zone radiant floor heating',
    ],
    amenities: [
      'Lake View', 'Private Dock', 'Hot Tub', 'Fire Pit',
      'Smart Home', 'Garage (2 cars)', 'Wine Cellar', 'Home Office',
    ],
    agent: 'james-wilson',
  },
  {
    id: 'architectural-downtown-penthouse',
    name: 'Architectural Downtown Penthouse',
    location: 'Austin, Texas, USA',
    price: 1850000,
    priceLabel: '$1.85 Million',
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    sqft: 3400,
    featured: false,
    image: img('1505843513577-22bb7d21e455'),
    gallery: [
      img('1505843513577-22bb7d21e455', 1600),
      img('1582268611958-ebfd161ef9cf', 1600),
      img('1706808849780-7a04fbac83ef', 1600),
      img('1613977257592-4871e5fcd7c4', 1600),
      img('1717167398817-121e3c283dbb', 1600),
    ],
    description:
      'A full-floor penthouse in downtown Austin with 360-degree views of the city skyline and Hill Country beyond. The residence features 12-foot ceilings, imported European finishes, and a wraparound terrace with an outdoor kitchen. Building amenities include a pool, fitness center, and 24-hour concierge.',
    features: [
      'Full-floor penthouse with 360-degree views',
      '12-foot ceilings throughout',
      'Wraparound terrace with outdoor kitchen',
      'Imported European finishes',
      'Building pool and fitness center',
      '24-hour concierge service',
    ],
    amenities: [
      'City View', 'Terrace', 'Outdoor Kitchen', 'Smart Home',
      'Concierge', 'Gym', 'Pool Access', 'Garage (2 cars)',
    ],
    agent: 'sophia-bennett',
  },
];

// ============================================================
// SERVICES
// ============================================================

export const services = [
  {
    id: 'luxury-home-sales',
    title: 'Luxury Home Sales',
    description: 'Representing the finest properties in the market with bespoke marketing strategies and a global network of qualified buyers.',
    image: img('1613977257363-707ba9348227', 800),
  },
  {
    id: 'property-investment',
    title: 'Property Investment',
    description: 'Strategic investment advisory backed by deep market analysis, helping clients build and diversify premium property portfolios.',
    image: img('1582268611958-ebfd161ef9cf', 800),
  },
  {
    id: 'property-marketing',
    title: 'Property Marketing',
    description: 'Cinematic photography, drone videography, and targeted digital campaigns that position each property as a singular opportunity.',
    image: img('1706808849780-7a04fbac83ef', 800),
  },
  {
    id: 'real-estate-advisory',
    title: 'Real Estate Advisory',
    description: 'Comprehensive guidance through every stage of the transaction, from initial search to closing, with complete transparency.',
    image: img('1613490493576-7fde63acd811', 800),
  },
  {
    id: 'property-valuation',
    title: 'Property Valuation',
    description: 'Precise, data-driven valuations combining comparable analysis, architectural assessment, and market intelligence.',
    image: img('1613977257592-4871e5fcd7c4', 800),
  },
  {
    id: 'relocation-services',
    title: 'Relocation Services',
    description: 'End-to-end relocation support including neighborhood orientation, school research, and seamless move coordination.',
    image: img('1580587771525-78b9dba3b914', 800),
  },
];

// ============================================================
// TEAM
// ============================================================

export const team = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Director',
    phone: '(555) 246-7891',
    email: 'd.morgan@horizonproperties.com',
    image: img('1507003211169-0a1dd7228f2d', 600),
  },
  {
    id: 'olivia-carter',
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    phone: '(555) 246-7892',
    email: 'o.carter@horizonproperties.com',
    image: img('1494790108377-be9c29b29330', 600),
  },
  {
    id: 'james-wilson',
    name: 'James Wilson',
    role: 'Investment Consultant',
    phone: '(555) 246-7893',
    email: 'j.wilson@horizonproperties.com',
    image: img('1500648767791-00dcc994a43e', 600),
  },
  {
    id: 'sophia-bennett',
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    phone: '(555) 246-7894',
    email: 's.bennett@horizonproperties.com',
    image: img('1438761681033-6461ffad8d80', 600),
  },
];

// ============================================================
// WHY CHOOSE HORIZON
// ============================================================

export const whyChoose = [
  {
    title: 'Curated Portfolio',
    description: 'Every property in our portfolio is hand-selected for architectural distinction, location quality, and investment potential.',
  },
  {
    title: 'Global Network',
    description: 'Our relationships span international buyers, investors, and industry professionals, giving your property unmatched exposure.',
  },
  {
    title: 'Data-Driven Insight',
    description: 'We combine deep market intelligence with architectural expertise to deliver precise valuations and strategic advice.',
  },
  {
    title: 'White-Glove Service',
    description: 'From the first viewing to the final signature, every interaction is handled with discretion, professionalism, and care.',
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getProperty = (id) => properties.find((p) => p.id === id);
export const getAgent = (id) => team.find((t) => t.id === id);
export const getFeatured = () => properties.filter((p) => p.featured);
export const getSimilar = (property, limit = 3) =>
  properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .concat(properties.filter((p) => p.id !== property.id && p.type !== property.type))
    .slice(0, limit);

export const propertyTypes = [...new Set(properties.map((p) => p.type))];
export const locations = [...new Set(properties.map((p) => p.location))];
