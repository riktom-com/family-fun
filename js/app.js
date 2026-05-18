'use strict';
/* Family Fun Finder — js/app.js ?v=1
   Pure static, no build step. Data + logic all here.
*/

/* ═══════════════════════════════════════════════════
   CITIES
═══════════════════════════════════════════════════ */
const CITIES = [
  { name: 'Atlanta Metro',            key: 'Atlanta',    lat: 33.749,  lon: -84.388 },
  { name: 'Savannah',                 key: 'Savannah',   lat: 32.0835, lon: -81.0998 },
  { name: 'Augusta',                  key: 'Augusta',    lat: 33.4735, lon: -82.0105 },
  { name: 'Macon',                    key: 'Macon',      lat: 32.8407, lon: -83.6324 },
  { name: 'Columbus',                 key: 'Columbus',   lat: 32.4610, lon: -84.9877 },
  { name: 'Albany',                   key: 'Albany',     lat: 31.5785, lon: -84.1557 },
  { name: 'Brunswick / Golden Isles', key: 'Brunswick',  lat: 31.1499, lon: -81.4915 },
  { name: 'Athens',                   key: 'Athens',     lat: 33.9519, lon: -83.3576 },
  { name: 'North Georgia / Gainesville', key: 'NorthGA', lat: 34.2979, lon: -83.8241 },
  { name: 'Valdosta / South Georgia', key: 'Valdosta',   lat: 30.8327, lon: -83.2785 },
];

/* ═══════════════════════════════════════════════════
   ACTIVITIES — 60+ real Georgia family spots
═══════════════════════════════════════════════════ */
const ACTIVITIES = [
  /* ── Atlanta ─────────────────────────────────── */
  {
    id: 'childrens-museum-atl',
    name: "Children's Museum of Atlanta",
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7590, lon: -84.3920,
    category: 'museum', setting: 'indoor',
    ageMin: 0, ageMax: 8,
    costType: 'paid', costMax: 17,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'Interactive exhibits designed for kids 8 and under — great for toddlers exploring science, art, and dramatic play.',
    address: '275 Centennial Olympic Park Dr NW, Atlanta, GA 30313',
    website: 'https://childrensmuseumatlanta.org',
    tags: ['hands-on', 'toddler-friendly', 'educational'],
  },
  {
    id: 'georgia-aquarium',
    name: 'Georgia Aquarium',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7634, lon: -84.3951,
    category: 'museum', setting: 'indoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 45,
    rainFriendly: true, strollerFriendly: true,
    duration: 180,
    desc: "One of the world's largest aquariums — whale sharks, beluga whales, and thousands of sea creatures. Can't-miss Atlanta attraction.",
    address: '225 Baker St NW, Atlanta, GA 30313',
    website: 'https://georgiaaquarium.org',
    tags: ['marine-life', 'wow-factor', 'all-ages'],
  },
  {
    id: 'zoo-atlanta',
    name: 'Zoo Atlanta',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7341, lon: -84.3720,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 28,
    rainFriendly: false, strollerFriendly: true,
    duration: 180,
    desc: 'Home to giant pandas, gorillas, and more than 1,500 animals. Offers seasonal behind-the-scenes experiences.',
    address: '800 Cherokee Ave SE, Atlanta, GA 30315',
    website: 'https://zooatlanta.org',
    tags: ['animals', 'outdoor', 'educational'],
  },
  {
    id: 'stone-mountain',
    name: 'Stone Mountain Park',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.8081, lon: -84.1450,
    category: 'park', setting: 'both',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 25,
    rainFriendly: false, strollerFriendly: true,
    duration: 240,
    desc: 'Massive granite monolith with a cable car, hiking trails, laser show (seasonal), and family rides.',
    address: '1000 Robert E Lee Blvd, Stone Mountain, GA 30083',
    website: 'https://stonemountainpark.com',
    tags: ['hiking', 'outdoors', 'rides', 'seasonal'],
  },
  {
    id: 'fernbank-museum',
    name: 'Fernbank Museum of Natural History',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7734, lon: -84.3284,
    category: 'museum', setting: 'indoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 22,
    rainFriendly: true, strollerFriendly: true,
    duration: 150,
    desc: 'Giant dinosaur skeletons, a stunning IMAX dome, and rotating science exhibits for all ages.',
    address: '767 Clifton Rd NE, Atlanta, GA 30307',
    website: 'https://fernbankmuseum.org',
    tags: ['dinosaurs', 'IMAX', 'science'],
  },
  {
    id: 'center-for-puppetry-arts',
    name: 'Center for Puppetry Arts',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7866, lon: -84.3853,
    category: 'museum', setting: 'indoor',
    ageMin: 2, ageMax: 12,
    costType: 'paid', costMax: 16,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: "Live puppet shows and the world's largest Henson collection — magical for younger kids.",
    address: '1404 Spring St NW, Atlanta, GA 30309',
    website: 'https://puppet.org',
    tags: ['puppets', 'performance', 'creative'],
  },
  {
    id: 'legoland-atlanta',
    name: 'LEGOLAND Discovery Center Atlanta',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.8876, lon: -84.4589,
    category: 'indoor-play', setting: 'indoor',
    ageMin: 2, ageMax: 10,
    costType: 'paid', costMax: 30,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'LEGO rides, builds, and a 4D cinema inside Phipps Plaza — perfect rainy-day destination for LEGO fans.',
    address: '3500 Peachtree Rd NE, Atlanta, GA 30326',
    website: 'https://atlanta.legolanddiscoverycenter.com',
    tags: ['LEGO', 'creative', 'rainy-day'],
  },
  {
    id: 'world-of-coca-cola',
    name: 'World of Coca-Cola',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7621, lon: -84.3928,
    category: 'museum', setting: 'indoor',
    ageMin: 5, ageMax: 18,
    costType: 'paid', costMax: 22,
    rainFriendly: true, strollerFriendly: true,
    duration: 90,
    desc: 'Taste 100+ Coke flavors from around the world, see the vault, and explore the history of an iconic brand.',
    address: '121 Baker St NW, Atlanta, GA 30313',
    website: 'https://worldofcocacola.com',
    tags: ['history', 'tasting', 'interactive'],
  },
  {
    id: 'civil-human-rights',
    name: 'National Center for Civil and Human Rights',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7629, lon: -84.3934,
    category: 'museum', setting: 'indoor',
    ageMin: 8, ageMax: 18,
    costType: 'paid', costMax: 20,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'Powerful and moving museum connecting the American Civil Rights Movement to today\'s global human rights struggles.',
    address: '100 Ivan Allen Jr Blvd NW, Atlanta, GA 30313',
    website: 'https://civilandhumanrights.org',
    tags: ['history', 'education', 'older-kids'],
  },
  {
    id: 'chattahoochee-nra',
    name: 'Chattahoochee River NRA — Cochran Shoals',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.9218, lon: -84.4357,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Paved riverside trail and boardwalk along the Chattahoochee — great for strollers, joggers, and spotting wildlife.',
    address: 'Interstate N Pkwy NW, Atlanta, GA 30339',
    website: 'https://nps.gov/chat',
    tags: ['hiking', 'river', 'free', 'stroller'],
  },
  {
    id: 'sweetwater-creek',
    name: 'Sweetwater Creek State Park',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7654, lon: -84.6254,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'paid', costMax: 5,
    rainFriendly: false, strollerFriendly: false,
    duration: 120,
    desc: 'Beautiful creek-side trails and Civil War mill ruins west of Atlanta — excellent for older kids who like exploring.',
    address: '1750 Mt Vernon Rd, Lithia Springs, GA 30122',
    website: 'https://gastateparks.org/SweetwaterCreek',
    tags: ['hiking', 'history', 'nature'],
  },
  {
    id: 'tellus-science-museum',
    name: 'Tellus Science Museum',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 34.1634, lon: -84.8060,
    category: 'museum', setting: 'indoor',
    ageMin: 3, ageMax: 18,
    costType: 'paid', costMax: 18,
    rainFriendly: true, strollerFriendly: true,
    duration: 150,
    desc: 'Gems, minerals, dinosaur fossils, a planetarium, and hands-on science — one of Georgia\'s best science museums (Cartersville).',
    address: '100 Tellus Dr, Cartersville, GA 30120',
    website: 'https://tellusmuseum.org',
    tags: ['science', 'fossils', 'planetarium'],
  },
  {
    id: 'kennesaw-mountain',
    name: 'Kennesaw Mountain National Battlefield Park',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.9892, lon: -84.5784,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 120,
    desc: 'Civil War battlefield with miles of hiking trails and sweeping views of the Atlanta skyline. Visitor center has exhibits for kids.',
    address: '900 Kennesaw Mountain Dr, Kennesaw, GA 30144',
    website: 'https://nps.gov/kemo',
    tags: ['hiking', 'history', 'free'],
  },
  {
    id: 'skyview-atlanta',
    name: 'SkyView Atlanta Ferris Wheel',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7590, lon: -84.3921,
    category: 'festival', setting: 'outdoor',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 15,
    rainFriendly: false, strollerFriendly: true,
    duration: 30,
    desc: 'Giant Ferris wheel in downtown Atlanta offering 20-minute gondola rides with stunning city views.',
    address: '168 Luckie St NW, Atlanta, GA 30303',
    website: 'https://skyviewatlanta.com',
    tags: ['views', 'downtown', 'thrill'],
  },
  {
    id: 'ponce-city-market',
    name: 'Ponce City Market',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7726, lon: -84.3662,
    category: 'dining', setting: 'both',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 20,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'Historic market with diverse family-friendly dining, a rooftop mini golf/carnival, and the BeltLine trail out front.',
    address: '675 Ponce De Leon Ave NE, Atlanta, GA 30308',
    website: 'https://poncecitymarket.com',
    tags: ['food', 'beltline', 'rooftop', 'family'],
  },

  /* ── Savannah ─────────────────────────────────── */
  {
    id: 'savannah-childrens-museum',
    name: "Savannah Children's Museum",
    city: 'Savannah', region: 'Savannah',
    lat: 32.0720, lon: -81.0952,
    category: 'museum', setting: 'outdoor',
    ageMin: 0, ageMax: 10,
    costType: 'paid', costMax: 9,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Outdoor discovery museum inside the historic railroad roundhouse — nature-themed play for young children.',
    address: '655 Louisville Rd, Savannah, GA 31401',
    website: 'https://savannahchildrensmuseum.org',
    tags: ['outdoor', 'play', 'toddler-friendly'],
  },
  {
    id: 'forsyth-park',
    name: 'Forsyth Park',
    city: 'Savannah', region: 'Savannah',
    lat: 32.0680, lon: -81.0978,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 60,
    desc: 'Iconic 30-acre park with a famous fountain, playground, and weekend farmers market in the heart of Savannah.',
    address: 'Forsyth Park, Savannah, GA 31401',
    website: 'https://visitsavannah.com',
    tags: ['free', 'picnic', 'playground', 'stroller'],
  },
  {
    id: 'tybee-island-beach',
    name: 'Tybee Island Beach',
    city: 'Savannah', region: 'Savannah',
    lat: 31.9987, lon: -80.8453,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 240,
    desc: "Georgia's most popular beach — 3 miles of Atlantic shoreline with a lighthouse, pier, and calm waters for families.",
    address: 'Tybee Island, GA 31328',
    website: 'https://tybeeisland.com',
    tags: ['beach', 'free', 'swimming', 'lighthouse'],
  },
  {
    id: 'old-fort-jackson',
    name: 'Old Fort Jackson',
    city: 'Savannah', region: 'Savannah',
    lat: 32.0812, lon: -81.0338,
    category: 'museum', setting: 'both',
    ageMin: 5, ageMax: 18,
    costType: 'paid', costMax: 12,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: "Georgia's oldest standing brick fortification — live cannon firings and hands-on demonstrations thrill older kids.",
    address: '1 Fort Jackson Rd, Savannah, GA 31404',
    website: 'https://chsgeorgia.org/fort-jackson',
    tags: ['history', 'cannon', 'military'],
  },
  {
    id: 'wormsloe-historic-site',
    name: 'Wormsloe Historic Site',
    city: 'Savannah', region: 'Savannah',
    lat: 31.9769, lon: -81.0721,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'paid', costMax: 12,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: "A breathtaking 1.5-mile live oak avenue leads to colonial-era tabby ruins and a nature trail — one of Georgia's most photogenic spots.",
    address: '7601 Skidaway Rd, Savannah, GA 31406',
    website: 'https://gastateparks.org/Wormsloe',
    tags: ['history', 'scenic', 'nature'],
  },
  {
    id: 'ga-state-railroad-museum',
    name: 'Georgia State Railroad Museum',
    city: 'Savannah', region: 'Savannah',
    lat: 32.0723, lon: -81.0962,
    category: 'museum', setting: 'both',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 14,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Working roundhouse museum with train rides, steam demonstrations, and antique locomotives that kids love.',
    address: '655 Louisville Rd, Savannah, GA 31401',
    website: 'https://chsgeorgia.org/railroad-museum',
    tags: ['trains', 'history', 'rides'],
  },

  /* ── Augusta ──────────────────────────────────── */
  {
    id: 'augusta-museum-history',
    name: 'Augusta Museum of History',
    city: 'Augusta', region: 'Augusta',
    lat: 33.4731, lon: -81.9691,
    category: 'museum', setting: 'indoor',
    ageMin: 4, ageMax: 18,
    costType: 'paid', costMax: 8,
    rainFriendly: true, strollerFriendly: true,
    duration: 90,
    desc: "12,000 years of Augusta's story, from Native Americans to James Brown. Engaging displays for all ages.",
    address: '560 Reynolds St, Augusta, GA 30901',
    website: 'https://augustamuseum.org',
    tags: ['history', 'local', 'educational'],
  },
  {
    id: 'phinizy-swamp',
    name: 'Phinizy Swamp Nature Park',
    city: 'Augusta', region: 'Augusta',
    lat: 33.3952, lon: -81.9398,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: 'Tranquil boardwalk trails through wetlands teeming with birds, turtles, and seasonal wildflowers — free to explore.',
    address: '1858 Lock and Dam Rd, Augusta, GA 30906',
    website: 'https://phinizycenter.org',
    tags: ['birding', 'wetlands', 'free', 'nature'],
  },
  {
    id: 'augusta-canal',
    name: 'Augusta Canal Discovery Center',
    city: 'Augusta', region: 'Augusta',
    lat: 33.4854, lon: -82.0178,
    category: 'museum', setting: 'both',
    ageMin: 4, ageMax: 18,
    costType: 'paid', costMax: 15,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Historic canal with guided boat tours and a mill museum — kids love the water ride through Civil War-era mills.',
    address: '1450 Greene St, Augusta, GA 30901',
    website: 'https://augustacanal.com',
    tags: ['history', 'boat', 'canal'],
  },
  {
    id: 'riverwalk-augusta',
    name: 'Riverwalk Augusta',
    city: 'Augusta', region: 'Augusta',
    lat: 33.4736, lon: -81.9728,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 60,
    desc: 'Lovely paved walkway along the Savannah River with playgrounds, splash pads (seasonal), and scenic views.',
    address: 'Riverwalk Augusta, Augusta, GA 30901',
    website: 'https://augustaga.gov',
    tags: ['free', 'riverside', 'stroller', 'splash-pad'],
  },
  {
    id: 'augusta-childrens-museum',
    name: "Augusta Children's Museum",
    city: 'Augusta', region: 'Augusta',
    lat: 33.4820, lon: -82.0066,
    category: 'indoor-play', setting: 'indoor',
    ageMin: 0, ageMax: 10,
    costType: 'paid', costMax: 9,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'Hands-on exhibits covering health, food, and community for young children — Lil Grocery Store is a hit.',
    address: '1 7th St, Augusta, GA 30901',
    website: 'https://augustachildrensmuseum.org',
    tags: ['hands-on', 'toddler-friendly', 'community'],
  },

  /* ── Macon ────────────────────────────────────── */
  {
    id: 'ocmulgee-mounds',
    name: 'Ocmulgee Mounds National Historical Park',
    city: 'Macon', region: 'Macon',
    lat: 32.8372, lon: -83.5984,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 120,
    desc: '17,000-year-old Native American mounds you can climb — excellent trails and a fascinating earthlodge you can enter.',
    address: '1207 Emery Hwy, Macon, GA 31217',
    website: 'https://nps.gov/ocmu',
    tags: ['history', 'Native American', 'hiking', 'free'],
  },
  {
    id: 'museum-arts-sciences-macon',
    name: 'Museum of Arts and Sciences — Macon',
    city: 'Macon', region: 'Macon',
    lat: 32.8590, lon: -83.6456,
    category: 'museum', setting: 'indoor',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 10,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'Planetarium, live animal exhibits, dinosaur casts, and rotating art — one of Central Georgia\'s best family destinations.',
    address: '4182 Forsyth Rd, Macon, GA 31210',
    website: 'https://masmacon.org',
    tags: ['planetarium', 'animals', 'science', 'art'],
  },
  {
    id: 'amerson-river-park',
    name: 'Amerson River Park',
    city: 'Macon', region: 'Macon',
    lat: 32.8658, lon: -83.6021,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Beautiful river park with trails, kayak launch, disc golf, and playgrounds along the Ocmulgee River.',
    address: '3851 Riverside Dr, Macon, GA 31210',
    website: 'https://maconbibb.us',
    tags: ['free', 'river', 'playground', 'trails'],
  },

  /* ── Columbus ─────────────────────────────────── */
  {
    id: 'national-infantry-museum',
    name: 'National Infantry Museum',
    city: 'Columbus', region: 'Columbus',
    lat: 32.3561, lon: -84.9877,
    category: 'museum', setting: 'indoor',
    ageMin: 5, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'World-class military museum honoring the U.S. Infantry — tanks, aircraft, interactive simulators, and a full-size WWI trench.',
    address: '1775 Legacy Way, Columbus, GA 31903',
    website: 'https://nationalinfantrymuseum.org',
    tags: ['military', 'history', 'free', 'simulators'],
  },
  {
    id: 'columbus-riverwalk',
    name: 'Columbus Riverwalk / Whitewater',
    city: 'Columbus', region: 'Columbus',
    lat: 32.4658, lon: -84.9892,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Scenic paved trail along the Chattahoochee featuring the world\'s longest urban whitewater course — great for walking and watching rafters.',
    address: 'Columbus Riverwalk, Columbus, GA 31901',
    website: 'https://visitcolumbusga.com',
    tags: ['free', 'river', 'whitewater', 'stroller'],
  },
  {
    id: 'oxbow-meadows',
    name: 'Oxbow Meadows Environmental Learning Center',
    city: 'Columbus', region: 'Columbus',
    lat: 32.4291, lon: -84.9603,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: 'Free nature center with trails, live reptiles and birds, and hands-on environmental education programs.',
    address: '3535 S Lumpkin Rd, Columbus, GA 31903',
    website: 'https://columbusstate.edu/oxbow',
    tags: ['nature', 'reptiles', 'free', 'educational'],
  },

  /* ── Albany ───────────────────────────────────── */
  {
    id: 'thronateeska-heritage',
    name: 'Thronateeska Heritage Center',
    city: 'Albany', region: 'Albany',
    lat: 31.5793, lon: -84.1561,
    category: 'museum', setting: 'indoor',
    ageMin: 3, ageMax: 18,
    costType: 'paid', costMax: 7,
    rainFriendly: true, strollerFriendly: true,
    duration: 90,
    desc: 'Regional history museum with a science center, planetarium, and historic train depot — Albany\'s premier family attraction.',
    address: '100 Roosevelt Ave, Albany, GA 31701',
    website: 'https://thronateeska.org',
    tags: ['history', 'planetarium', 'science'],
  },
  {
    id: 'chehaw-park',
    name: 'Chehaw Park & Zoo',
    city: 'Albany', region: 'Albany',
    lat: 31.6068, lon: -84.1836,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 12,
    rainFriendly: false, strollerFriendly: true,
    duration: 180,
    desc: 'Zoo with African animals, a BMX park, camping, and a mini train ride through 800 acres of park land.',
    address: '105 Chehaw Park Rd, Albany, GA 31701',
    website: 'https://chehaw.org',
    tags: ['zoo', 'animals', 'train', 'camping'],
  },
  {
    id: 'radium-springs',
    name: 'Radium Springs Nature Trail',
    city: 'Albany', region: 'Albany',
    lat: 31.5434, lon: -84.1645,
    category: 'nature', setting: 'outdoor',
    ageMin: 3, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 60,
    desc: 'Restored riverfront park with a boardwalk trail along the Flint River — a peaceful free outing near downtown Albany.',
    address: 'Radium Springs Rd, Albany, GA 31705',
    website: 'https://albanyga.gov',
    tags: ['nature', 'river', 'free', 'boardwalk'],
  },

  /* ── Brunswick / Golden Isles ─────────────────── */
  {
    id: 'jekyll-island',
    name: 'Jekyll Island Beaches & Bike Trails',
    city: 'Brunswick', region: 'Brunswick / Golden Isles',
    lat: 31.0534, lon: -81.4231,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 8,
    rainFriendly: false, strollerFriendly: true,
    duration: 300,
    desc: '20 miles of bike paths, gorgeous beaches, historic district, and the Georgia Sea Turtle Center — a full family day.',
    address: 'Jekyll Island, GA 31527',
    website: 'https://jekyllisland.com',
    tags: ['beach', 'biking', 'turtles', 'historic'],
  },
  {
    id: 'sea-turtle-center',
    name: 'Georgia Sea Turtle Center',
    city: 'Brunswick', region: 'Brunswick / Golden Isles',
    lat: 31.0540, lon: -81.4204,
    category: 'museum', setting: 'indoor',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 12,
    rainFriendly: true, strollerFriendly: true,
    duration: 60,
    desc: 'Working sea turtle hospital where kids can watch veterinarians treating injured sea turtles. Incredibly educational and inspiring.',
    address: '214 Stable Rd, Jekyll Island, GA 31527',
    website: 'https://georgiaseaturtlecenter.org',
    tags: ['turtles', 'wildlife', 'conservation', 'wow-factor'],
  },
  {
    id: 'st-simons-lighthouse',
    name: 'St. Simons Island Lighthouse Museum',
    city: 'Brunswick', region: 'Brunswick / Golden Isles',
    lat: 31.1314, lon: -81.3921,
    category: 'museum', setting: 'both',
    ageMin: 5, ageMax: 18,
    costType: 'paid', costMax: 12,
    rainFriendly: false, strollerFriendly: false,
    duration: 60,
    desc: "Climb the 1872 lighthouse for panoramic Golden Isles views — the museum tells the island's maritime history.",
    address: '101 12th St, St. Simons Island, GA 31522',
    website: 'https://coastalgeorgiahistory.org',
    tags: ['lighthouse', 'history', 'views', 'climbing'],
  },
  {
    id: 'earth-day-nature-trail',
    name: 'Earth Day Nature Trail — Jekyll Island',
    city: 'Brunswick', region: 'Brunswick / Golden Isles',
    lat: 31.0712, lon: -81.4185,
    category: 'nature', setting: 'outdoor',
    ageMin: 2, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 45,
    desc: 'Short, easy nature trail through maritime forest with informational signs — perfect for young hikers.',
    address: 'Beachview Dr, Jekyll Island, GA 31527',
    website: 'https://jekyllisland.com',
    tags: ['nature', 'hiking', 'free', 'easy'],
  },

  /* ── Athens ───────────────────────────────────── */
  {
    id: 'state-botanical-garden',
    name: 'State Botanical Garden of Georgia',
    city: 'Athens', region: 'Athens',
    lat: 33.9091, lon: -83.3685,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: '313 acres of themed gardens, nature trails, and a conservatory at UGA — free and stroller-friendly.',
    address: '2450 S Milledge Ave, Athens, GA 30605',
    website: 'https://botgarden.uga.edu',
    tags: ['gardens', 'nature', 'free', 'stroller'],
  },
  {
    id: 'sandy-creek-nature-center',
    name: 'Sandy Creek Nature Center',
    city: 'Athens', region: 'Athens',
    lat: 33.9964, lon: -83.3840,
    category: 'nature', setting: 'outdoor',
    ageMin: 2, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: '225-acre nature center with forest trails, a lake, and live animal exhibits — free programming for families.',
    address: '205 Old Commerce Rd, Athens, GA 30607',
    website: 'https://athensclarkecounty.com',
    tags: ['nature', 'animals', 'trails', 'free'],
  },
  {
    id: 'bear-hollow-wildlife',
    name: 'Bear Hollow Wildlife Trail',
    city: 'Athens', region: 'Athens',
    lat: 33.9860, lon: -83.3812,
    category: 'nature', setting: 'outdoor',
    ageMin: 2, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 60,
    desc: 'Free outdoor zoo featuring native Georgia wildlife — black bears, deer, foxes, and raptors in natural habitats.',
    address: '293 Gran Ellen Dr, Athens, GA 30606',
    website: 'https://athensclarkecounty.com',
    tags: ['wildlife', 'bears', 'free', 'zoo'],
  },

  /* ── North Georgia / Gainesville ──────────────── */
  {
    id: 'amicalola-falls',
    name: 'Amicalola Falls State Park',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.5596, lon: -84.2453,
    category: 'nature', setting: 'outdoor',
    ageMin: 4, ageMax: 18,
    costType: 'paid', costMax: 5,
    rainFriendly: false, strollerFriendly: false,
    duration: 150,
    desc: 'The tallest cascading waterfall east of the Mississippi — hike the staircase trail to the top for breathtaking views.',
    address: '418 Amicalola Falls State Park Rd, Dawsonville, GA 30534',
    website: 'https://gastateparks.org/AmicalolafallsSP',
    tags: ['waterfall', 'hiking', 'scenic', 'nature'],
  },
  {
    id: 'blue-ridge-railway',
    name: 'Blue Ridge Scenic Railway',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.8637, lon: -84.3227,
    category: 'festival', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 30,
    rainFriendly: false, strollerFriendly: true,
    duration: 240,
    desc: 'Scenic mountain train ride through the Blue Ridge — seasonal theme trips like the Polar Express make it extra special.',
    address: '241 Depot St, Blue Ridge, GA 30513',
    website: 'https://brscenic.com',
    tags: ['train', 'mountains', 'scenic', 'seasonal'],
  },
  {
    id: 'babyland-general',
    name: 'Babyland General Hospital',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.5812, lon: -83.7874,
    category: 'museum', setting: 'indoor',
    ageMin: 2, ageMax: 12,
    costType: 'free', costMax: null,
    rainFriendly: true, strollerFriendly: true,
    duration: 60,
    desc: "Birthplace of Cabbage Patch Kids — watch the cabbage patch 'deliveries,' adopt your own doll, and explore this quirky GA landmark.",
    address: '300 N O St, Cleveland, GA 30528',
    website: 'https://cabbagepatchkids.com/babyland',
    tags: ['free', 'quirky', 'shopping', 'history'],
  },
  {
    id: 'burts-farm',
    name: "Burt's Pumpkin Farm",
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.7236, lon: -84.1734,
    category: 'festival', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 120,
    desc: 'Seasonal fall pumpkin farm in Dawsonville with thousands of pumpkins, a corn maze, and family fun (open Sep–Nov).',
    address: '6919 Tails Creek Rd, Dawsonville, GA 30534',
    website: 'https://burtsfarm.com',
    tags: ['seasonal', 'fall', 'pumpkins', 'farm', 'free'],
  },
  {
    id: 'lake-lanier-islands',
    name: 'Lake Lanier Islands / Margaritaville',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.1884, lon: -83.9556,
    category: 'indoor-play', setting: 'both',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 50,
    rainFriendly: false, strollerFriendly: true,
    duration: 300,
    desc: 'Water park, beach, mini golf, camping, and boat rentals on Georgia\'s most popular lake — full summer destination.',
    address: '7000 Lanier Islands Pkwy, Buford, GA 30518',
    website: 'https://lakelanierislands.com',
    tags: ['waterpark', 'beach', 'lake', 'summer'],
  },

  /* ── Valdosta / South Georgia ─────────────────── */
  {
    id: 'wild-adventures',
    name: 'Wild Adventures Theme Park',
    city: 'Valdosta', region: 'Valdosta / South Georgia',
    lat: 30.8553, lon: -83.3166,
    category: 'festival', setting: 'both',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 50,
    rainFriendly: false, strollerFriendly: true,
    duration: 360,
    desc: "South Georgia's largest theme park with roller coasters, a water park, and live animal shows — a true all-day adventure.",
    address: '3766 Old Clyattville Rd, Valdosta, GA 31601',
    website: 'https://wildadventures.com',
    tags: ['theme-park', 'roller-coasters', 'waterpark', 'animals'],
  },
  {
    id: 'reed-bingham',
    name: 'Reed Bingham State Park',
    city: 'Valdosta', region: 'Valdosta / South Georgia',
    lat: 31.1573, lon: -83.4773,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 5,
    rainFriendly: false, strollerFriendly: true,
    duration: 180,
    desc: 'Swimming, fishing, and lakeside camping with trails and one of the best winter vulture roosts in the Southeast.',
    address: '542 Reed Bingham Rd, Adel, GA 31620',
    website: 'https://gastateparks.org/ReedBingham',
    tags: ['swimming', 'fishing', 'camping', 'birding'],
  },
  {
    id: 'stephen-foster-state-park',
    name: "Stephen C. Foster State Park — Okefenokee",
    city: 'Valdosta', region: 'Valdosta / South Georgia',
    lat: 30.8276, lon: -82.3541,
    category: 'nature', setting: 'outdoor',
    ageMin: 4, ageMax: 18,
    costType: 'paid', costMax: 10,
    rainFriendly: false, strollerFriendly: false,
    duration: 240,
    desc: "Gateway to the Okefenokee Swamp — guided boat tours past alligators, pitcher plants, and ancient cypress trees.",
    address: '17515 SW Fargo Rd, Fargo, GA 31631',
    website: 'https://gastateparks.org/StephenCFoster',
    tags: ['swamp', 'alligators', 'boat', 'wildlife'],
  },
  {
    id: 'laura-walker-state-park',
    name: 'Laura S. Walker State Park',
    city: 'Valdosta', region: 'Valdosta / South Georgia',
    lat: 31.1466, lon: -82.2311,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 5,
    rainFriendly: false, strollerFriendly: true,
    duration: 150,
    desc: 'Swimming, mini golf, boat rentals, and family camping near Waycross — a relaxed South Georgia getaway.',
    address: '5653 Laura Walker Rd, Waycross, GA 31503',
    website: 'https://gastateparks.org/LauraSWalker',
    tags: ['swimming', 'mini-golf', 'camping', 'easy'],
  },

  /* ── Bonus activities to round out 60+ ───────── */
  {
    id: 'fox-theatre-tour',
    name: 'Fox Theatre Tours',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7726, lon: -84.3845,
    category: 'museum', setting: 'indoor',
    ageMin: 6, ageMax: 18,
    costType: 'paid', costMax: 12,
    rainFriendly: true, strollerFriendly: false,
    duration: 60,
    desc: 'Behind-the-scenes tour of Atlanta\'s legendary Moorish-themed theater — beautiful architecture and Hollywood history.',
    address: '660 Peachtree St NE, Atlanta, GA 30308',
    website: 'https://foxtheatre.org',
    tags: ['architecture', 'history', 'arts'],
  },
  {
    id: 'fernbank-forest',
    name: 'Fernbank Forest & Science Center',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7683, lon: -84.3282,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: 'Old-growth urban forest with two miles of trails — free to walk, stunning biodiversity in the middle of Atlanta.',
    address: '156 Heaton Park Dr NE, Atlanta, GA 30307',
    website: 'https://fernbankmuseum.org',
    tags: ['forest', 'nature', 'free', 'hiking'],
  },
  {
    id: 'incredible-pizza-atl',
    name: 'Andretti Indoor Karting & Games',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.8915, lon: -84.4558,
    category: 'indoor-play', setting: 'indoor',
    ageMin: 4, ageMax: 18,
    costType: 'paid', costMax: 40,
    rainFriendly: true, strollerFriendly: true,
    duration: 180,
    desc: 'Multi-level go-kart tracks, laser tag, bowling, arcade games, and a full restaurant — ultimate rainy day venue.',
    address: '1255 Northside Dr NW, Atlanta, GA 30318',
    website: 'https://andrettikarting.com/atlanta',
    tags: ['go-karts', 'arcade', 'bowling', 'rainy-day'],
  },
  {
    id: 'atlanta-beltline-eastside',
    name: 'Atlanta BeltLine — Eastside Trail',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7636, lon: -84.3641,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Two-mile paved trail connecting Piedmont Park to Krog Street Market — murals, food trucks, and endless people watching.',
    address: 'BeltLine Eastside Trail, Atlanta, GA 30307',
    website: 'https://beltline.org',
    tags: ['walking', 'murals', 'free', 'stroller', 'food'],
  },
  {
    id: 'piedmont-park',
    name: 'Piedmont Park',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7872, lon: -84.3726,
    category: 'park', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 120,
    desc: "Atlanta's green heart — massive playground, splash zone, dog park, lake, and weekend festivals all in one park.",
    address: '400 Park Dr NE, Atlanta, GA 30306',
    website: 'https://piedmontpark.org',
    tags: ['free', 'playground', 'splash', 'lake', 'stroller'],
  },
  {
    id: 'martin-luther-king-nhs',
    name: 'Martin Luther King Jr. National Historic Site',
    city: 'Atlanta', region: 'Metro Atlanta',
    lat: 33.7554, lon: -84.3726,
    category: 'museum', setting: 'both',
    ageMin: 6, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Tour MLK\'s birth home and Ebenezer Baptist Church — a moving free experience in the heart of Sweet Auburn.',
    address: '450 Auburn Ave NE, Atlanta, GA 30312',
    website: 'https://nps.gov/malu',
    tags: ['history', 'civil-rights', 'free', 'educational'],
  },
  {
    id: 'callaway-gardens',
    name: 'Callaway Gardens',
    city: 'Columbus', region: 'Columbus',
    lat: 32.8584, lon: -84.9864,
    category: 'nature', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'paid', costMax: 28,
    rainFriendly: false, strollerFriendly: true,
    duration: 240,
    desc: 'Gorgeous 13,000-acre resort with butterfly center, beach, gardens, bike rentals, and family activities — seasonal highlights year-round.',
    address: '17800 US-27, Pine Mountain, GA 31822',
    website: 'https://callawaygardens.com',
    tags: ['gardens', 'butterflies', 'beach', 'biking'],
  },
  {
    id: 'cloudland-canyon',
    name: 'Cloudland Canyon State Park',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.8359, lon: -85.4841,
    category: 'nature', setting: 'outdoor',
    ageMin: 5, ageMax: 18,
    costType: 'paid', costMax: 5,
    rainFriendly: false, strollerFriendly: false,
    duration: 180,
    desc: "Georgia's 'Little Grand Canyon' — dramatic gorge views, two waterfalls, and one of the state's best hiking experiences.",
    address: '122 Cloudland Canyon Park Rd, Rising Fawn, GA 30738',
    website: 'https://gastateparks.org/CloudlandCanyon',
    tags: ['hiking', 'canyon', 'waterfall', 'scenic'],
  },
  {
    id: 'anna-ruby-falls',
    name: 'Anna Ruby Falls',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.7420, lon: -83.7312,
    category: 'nature', setting: 'outdoor',
    ageMin: 2, ageMax: 18,
    costType: 'paid', costMax: 5,
    rainFriendly: false, strollerFriendly: false,
    duration: 90,
    desc: 'Paved 0.4-mile trail to a stunning twin-waterfall in Chattahoochee National Forest — one of the easiest waterfall hikes in Georgia.',
    address: '3455 Anna Ruby Falls Rd, Helen, GA 30545',
    website: 'https://fs.usda.gov',
    tags: ['waterfall', 'easy-hike', 'nature', 'scenic'],
  },
  {
    id: 'helen-ga-tubing',
    name: 'Tubing on the Chattahoochee — Helen, GA',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.7015, lon: -83.7315,
    category: 'nature', setting: 'outdoor',
    ageMin: 5, ageMax: 18,
    costType: 'paid', costMax: 15,
    rainFriendly: false, strollerFriendly: false,
    duration: 120,
    desc: 'Float the clear mountain Chattahoochee River on tubes through the Bavarian village of Helen — a Georgia summer tradition.',
    address: 'Helen, GA 30545',
    website: 'https://helenga.org',
    tags: ['tubing', 'river', 'summer', 'outdoor'],
  },
  {
    id: 'talmadge-memorial-bridge',
    name: 'Savannah Waterfront & River Street',
    city: 'Savannah', region: 'Savannah',
    lat: 32.0808, lon: -81.0924,
    category: 'dining', setting: 'outdoor',
    ageMin: 0, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: false, strollerFriendly: true,
    duration: 90,
    desc: 'Nine-block cobblestone streetscape along the Savannah River with candy shops, dining, and riverboat tours.',
    address: 'River St, Savannah, GA 31401',
    website: 'https://visitsavannah.com',
    tags: ['free', 'waterfront', 'candy', 'dining', 'stroller'],
  },
  {
    id: 'oconee-brewing',
    name: 'Georgia Museum of Art — Athens',
    city: 'Athens', region: 'Athens',
    lat: 33.9455, lon: -83.3733,
    category: 'museum', setting: 'indoor',
    ageMin: 4, ageMax: 18,
    costType: 'free', costMax: null,
    rainFriendly: true, strollerFriendly: true,
    duration: 60,
    desc: "UGA's fine arts museum with rotating exhibits and free family programming — excellent rainy-day downtown destination.",
    address: '90 Carlton St, Athens, GA 30602',
    website: 'https://georgiamuseum.org',
    tags: ['art', 'free', 'educational', 'rainy-day'],
  },
  {
    id: 'north-ga-premium-outlets',
    name: 'Monkey Joe\'s — Gainesville',
    city: 'NorthGA', region: 'North Georgia',
    lat: 34.2929, lon: -83.8186,
    category: 'indoor-play', setting: 'indoor',
    ageMin: 0, ageMax: 12,
    costType: 'paid', costMax: 14,
    rainFriendly: true, strollerFriendly: true,
    duration: 120,
    desc: 'Indoor inflatable bounce park — slides, obstacle courses, and play zones for toddlers through tweens.',
    address: '680 Pearl Nix Pkwy, Gainesville, GA 30501',
    website: 'https://monkeyjoes.com',
    tags: ['bounce', 'inflatables', 'toddler-friendly', 'rainy-day'],
  },
  {
    id: 'fire-museum-columbus',
    name: "Columbus Fire Museum",
    city: 'Columbus', region: 'Columbus',
    lat: 32.4612, lon: -84.9880,
    category: 'museum', setting: 'indoor',
    ageMin: 2, ageMax: 12,
    costType: 'free', costMax: null,
    rainFriendly: true, strollerFriendly: true,
    duration: 45,
    desc: "Historic fire trucks and fire safety exhibits that young kids absolutely love — free and centrally located.",
    address: '2601 Warm Springs Rd, Columbus, GA 31904',
    website: 'https://columbusga.gov',
    tags: ['free', 'firetrucks', 'toddler-friendly', 'history'],
  },
];

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
const state = {
  cityKey: 'Atlanta',
  ageFilter: 'all',       // all | 0-3 | 4-7 | 8-12 | 13+
  settingFilter: 'any',   // any | indoor | outdoor
  costFilter: 'any',      // any | free | 15 | 30
  categories: new Set(),  // empty = all
  rainyOnly: false,
  strollerOnly: false,
  viewMode: 'list',       // list | map
  weatherCode: 'neutral', // neutral | rain | heat | nice
  expandedId: null,
};

/* ═══════════════════════════════════════════════════
   DOM REFS
═══════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
let leafletMap = null;
let leafletMarkers = [];

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildCitySelector();
  buildFilterChips();
  attachEventListeners();
  loadWeatherAndRender();
});

/* ═══════════════════════════════════════════════════
   BUILD UI
═══════════════════════════════════════════════════ */
function buildCitySelector() {
  const sel = $('city-select');
  CITIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.key;
    opt.textContent = c.name;
    if (c.key === state.cityKey) opt.selected = true;
    sel.appendChild(opt);
  });
}

function buildFilterChips() {
  /* Age chips */
  const ages = [
    { label: 'All Ages',              value: 'all' },
    { label: '👶 Babies & Toddlers',  value: '0-3' },
    { label: '🧒 Little Kids (4–7)',  value: '4-7' },
    { label: '🧒 Big Kids (8–12)',    value: '8-12' },
    { label: '🧑 Teens (13+)',        value: '13+' },
  ];
  const ageRow = $('age-chips');
  ages.forEach(a => {
    const btn = chipBtn(a.label, a.value === state.ageFilter);
    btn.addEventListener('click', () => {
      state.ageFilter = a.value;
      ageRow.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      renderResults();
    });
    ageRow.appendChild(btn);
  });

  /* Setting chips */
  const settings = [
    { label: '🌤️ Any',     value: 'any' },
    { label: '🏠 Indoor',  value: 'indoor' },
    { label: '🌳 Outdoor', value: 'outdoor' },
  ];
  const settingRow = $('setting-chips');
  settings.forEach(s => {
    const btn = chipBtn(s.label, s.value === state.settingFilter);
    btn.addEventListener('click', () => {
      state.settingFilter = s.value;
      settingRow.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      renderResults();
    });
    settingRow.appendChild(btn);
  });

  /* Cost chips */
  const costs = [
    { label: '💰 Any Cost', value: 'any' },
    { label: '✅ Free',     value: 'free' },
    { label: '💵 Under $15', value: '15' },
    { label: '💳 Under $30', value: '30' },
  ];
  const costRow = $('cost-chips');
  costs.forEach(c => {
    const btn = chipBtn(c.label, c.value === state.costFilter);
    btn.addEventListener('click', () => {
      state.costFilter = c.value;
      costRow.querySelectorAll('.chip').forEach(ch => ch.classList.remove('active'));
      btn.classList.add('active');
      renderResults();
    });
    costRow.appendChild(btn);
  });

  /* Category chips (multi-select) */
  const cats = [
    { label: '🌳 Parks',         value: 'park' },
    { label: '🏛️ Museums',      value: 'museum' },
    { label: '🎮 Indoor Play',   value: 'indoor-play' },
    { label: '🌿 Nature',        value: 'nature' },
    { label: '🎡 Festivals',     value: 'festival' },
    { label: '🍽️ Family Dining', value: 'dining' },
    { label: '📚 Classes',       value: 'class' },
  ];
  const catRow = $('cat-chips');
  cats.forEach(c => {
    const btn = chipBtn(c.label, false);
    btn.addEventListener('click', () => {
      if (state.categories.has(c.value)) {
        state.categories.delete(c.value);
        btn.classList.remove('active');
      } else {
        state.categories.add(c.value);
        btn.classList.add('active');
      }
      renderResults();
    });
    catRow.appendChild(btn);
  });

  /* Toggle chips */
  const rainyBtn = $('rainy-toggle');
  rainyBtn.addEventListener('click', () => {
    state.rainyOnly = !state.rainyOnly;
    rainyBtn.classList.toggle('active', state.rainyOnly);
    renderResults();
  });

  const strollerBtn = $('stroller-toggle');
  strollerBtn.addEventListener('click', () => {
    state.strollerOnly = !state.strollerOnly;
    strollerBtn.classList.toggle('active', state.strollerOnly);
    renderResults();
  });
}

function chipBtn(label, active) {
  const btn = document.createElement('button');
  btn.className = 'chip' + (active ? ' active' : '');
  btn.textContent = label;
  return btn;
}

/* ═══════════════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════════════ */
function attachEventListeners() {
  $('city-select').addEventListener('change', e => {
    state.cityKey = e.target.value;
    loadWeatherAndRender();
  });

  $('gps-btn').addEventListener('click', handleGPS);

  $('list-view-btn').addEventListener('click', () => switchView('list'));
  $('map-view-btn').addEventListener('click', () => switchView('map'));

  $('clear-filters-btn').addEventListener('click', clearAllFilters);
}

function handleGPS() {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser.');
    return;
  }
  const btn = $('gps-btn');
  btn.textContent = '⏳ Locating…';
  btn.disabled = true;
  navigator.geolocation.getCurrentPosition(
    pos => {
      const nearest = nearestCity(pos.coords.latitude, pos.coords.longitude);
      state.cityKey = nearest.key;
      $('city-select').value = nearest.key;
      btn.innerHTML = '📍 Use My Location';
      btn.disabled = false;
      loadWeatherAndRender();
    },
    () => {
      btn.innerHTML = '📍 Use My Location';
      btn.disabled = false;
      alert('Could not determine your location. Please select a city manually.');
    }
  );
}

function nearestCity(lat, lon) {
  let best = CITIES[0];
  let bestDist = Infinity;
  CITIES.forEach(c => {
    const d = Math.hypot(c.lat - lat, c.lon - lon);
    if (d < bestDist) { bestDist = d; best = c; }
  });
  return best;
}

function switchView(mode) {
  state.viewMode = mode;
  $('list-view-btn').classList.toggle('active', mode === 'list');
  $('map-view-btn').classList.toggle('active', mode === 'map');
  $('cards-view').style.display = mode === 'list' ? 'block' : 'none';
  $('map-view').style.display  = mode === 'map'  ? 'block' : 'none';
  if (mode === 'map') renderMap(filteredAndSorted());
}

function clearAllFilters() {
  state.ageFilter = 'all';
  state.settingFilter = 'any';
  state.costFilter = 'any';
  state.categories.clear();
  state.rainyOnly = false;
  state.strollerOnly = false;

  document.querySelectorAll('#age-chips .chip').forEach((c, i) => c.classList.toggle('active', i === 0));
  document.querySelectorAll('#setting-chips .chip').forEach((c, i) => c.classList.toggle('active', i === 0));
  document.querySelectorAll('#cost-chips .chip').forEach((c, i) => c.classList.toggle('active', i === 0));
  document.querySelectorAll('#cat-chips .chip').forEach(c => c.classList.remove('active'));
  $('rainy-toggle').classList.remove('active');
  $('stroller-toggle').classList.remove('active');
  renderResults();
}

/* ═══════════════════════════════════════════════════
   WEATHER
═══════════════════════════════════════════════════ */
async function loadWeatherAndRender() {
  const city = CITIES.find(c => c.key === state.cityKey);
  showWeatherLoading(true);
  hideBanner();

  try {
    const pointsRes = await fetch(
      `https://api.weather.gov/points/${city.lat.toFixed(4)},${city.lon.toFixed(4)}`,
      { headers: { 'User-Agent': 'FamilyFunFinder/1.0 (family.riktom.com)' } }
    );
    if (!pointsRes.ok) throw new Error('NWS points failed');
    const points = await pointsRes.json();
    const forecastUrl = points.properties.forecast;

    const fRes = await fetch(forecastUrl, {
      headers: { 'User-Agent': 'FamilyFunFinder/1.0 (family.riktom.com)' }
    });
    if (!fRes.ok) throw new Error('NWS forecast failed');
    const forecast = await fRes.json();
    const period = forecast.properties.periods[0];
    handleWeather(period, city.name);
  } catch (_) {
    /* Silently degrade — show neutral banner */
    showBanner('neutral', '🌤️ Weather data unavailable — showing all activities for ' + city.name);
    state.weatherCode = 'neutral';
  }

  showWeatherLoading(false);
  renderResults();
}

function handleWeather(period, cityName) {
  const sf = (period.shortForecast || '').toLowerCase();
  const temp = period.temperature || 72;
  const isRain = /rain|shower|storm|drizzle|thunder/.test(sf);
  const isHot  = temp > 95;
  const isNice = !isRain && temp >= 65 && temp <= 85 && /clear|sunny|fair|mostly sunny/.test(sf);

  if (isRain) {
    state.weatherCode = 'rain';
    // auto-enable rainy filter
    state.rainyOnly = true;
    $('rainy-toggle').classList.add('active');
    showBanner('orange', `☔ Rainy day in ${cityName} (${temp}°F) — showing indoor &amp; rain-friendly picks`);
  } else if (isHot) {
    state.weatherCode = 'heat';
    showBanner('yellow', `🌡️ Heat advisory in ${cityName} — ${temp}°F — prioritizing shaded and indoor activities`);
  } else if (isNice) {
    state.weatherCode = 'nice';
    showBanner('green', `☀️ Great day to be outside in ${cityName}! ${temp}°F — ${escHtml(period.shortForecast)}`);
  } else {
    state.weatherCode = 'neutral';
    showBanner('neutral', `🌤️ ${escHtml(period.shortForecast)} in ${cityName} — ${temp}°F`);
  }
}

function showBanner(cls, html) {
  const b = $('weather-banner');
  b.className = 'show ' + cls;
  b.innerHTML = html;
}
function hideBanner() {
  $('weather-banner').className = '';
}
function showWeatherLoading(show) {
  $('weather-loading').className = show ? 'show' : '';
}

/* ═══════════════════════════════════════════════════
   FILTERING & SORTING
═══════════════════════════════════════════════════ */
function filteredAndSorted() {
  const city = CITIES.find(c => c.key === state.cityKey);
  let list = ACTIVITIES.filter(a => a.city === state.cityKey);

  /* Age filter */
  if (state.ageFilter !== 'all') {
    const [minAge, maxAge] = ageRange(state.ageFilter);
    list = list.filter(a => a.ageMin <= maxAge && a.ageMax >= minAge);
  }

  /* Setting filter */
  if (state.settingFilter !== 'any') {
    list = list.filter(a => a.setting === state.settingFilter || a.setting === 'both');
  }

  /* Cost filter */
  if (state.costFilter !== 'any') {
    if (state.costFilter === 'free') {
      list = list.filter(a => a.costType === 'free');
    } else {
      const cap = parseInt(state.costFilter, 10);
      list = list.filter(a => a.costType === 'free' || (a.costMax !== null && a.costMax <= cap));
    }
  }

  /* Category filter (multi) */
  if (state.categories.size > 0) {
    list = list.filter(a => state.categories.has(a.category));
  }

  /* Rainy day filter */
  if (state.rainyOnly) {
    list = list.filter(a => a.rainFriendly);
  }

  /* Stroller filter */
  if (state.strollerOnly) {
    list = list.filter(a => a.strollerFriendly);
  }

  /* Sort */
  list.sort((a, b) => {
    const wa = weatherScore(a);
    const wb = weatherScore(b);
    if (wb !== wa) return wb - wa;

    // Age match quality (narrower range = better match for the selected age)
    const aa = a.ageMax - a.ageMin;
    const ab = b.ageMax - b.ageMin;
    if (aa !== ab) return aa - ab;

    // Cost (free first)
    const ca = a.costType === 'free' ? 0 : 1;
    const cb = b.costType === 'free' ? 0 : 1;
    if (ca !== cb) return ca - cb;

    return a.name.localeCompare(b.name);
  });

  return list;
}

function ageRange(filter) {
  switch (filter) {
    case '0-3':  return [0, 3];
    case '4-7':  return [4, 7];
    case '8-12': return [8, 12];
    case '13+':  return [13, 18];
    default:     return [0, 18];
  }
}

function weatherScore(a) {
  if (state.weatherCode === 'rain') {
    return a.rainFriendly ? 2 : (a.setting === 'indoor' ? 1 : 0);
  }
  if (state.weatherCode === 'heat') {
    return a.setting === 'indoor' ? 2 : (a.setting === 'both' ? 1 : 0);
  }
  if (state.weatherCode === 'nice') {
    return a.setting === 'outdoor' ? 2 : (a.setting === 'both' ? 1 : 0);
  }
  return 1; // neutral
}

/* ═══════════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════════ */
function renderResults() {
  const results = filteredAndSorted();
  const cityObj = CITIES.find(c => c.key === state.cityKey);
  $('results-count').textContent =
    `Showing ${results.length} activit${results.length === 1 ? 'y' : 'ies'} in ${cityObj.name}`;

  if (results.length === 0) {
    $('card-grid').innerHTML = '';
    $('no-results').style.display = 'flex';
  } else {
    $('no-results').style.display = 'none';
    renderCards(results);
  }

  if (state.viewMode === 'map') renderMap(results);
}

const CATEGORY_ICONS = {
  'park':       '🌳',
  'museum':     '🏛️',
  'indoor-play':'🎮',
  'nature':     '🌿',
  'dining':     '🍽️',
  'festival':   '🎡',
  'class':      '📚',
};

const CATEGORY_LABELS = {
  'park':       'Park',
  'museum':     'Museum',
  'indoor-play':'Indoor Play',
  'nature':     'Nature',
  'dining':     'Family Dining',
  'festival':   'Festival/Attraction',
  'class':      'Class/Camp',
};

function renderCards(list) {
  const grid = $('card-grid');
  grid.innerHTML = '';
  list.forEach(a => {
    const card = buildCard(a);
    grid.appendChild(card);
  });
}

function buildCard(a) {
  const wrap = document.createElement('article');
  wrap.className = 'activity-card' + (state.expandedId === a.id ? ' expanded' : '');
  wrap.dataset.id = a.id;

  const icon = CATEGORY_ICONS[a.category] || '📍';
  const catLabel = CATEGORY_LABELS[a.category] || a.category;
  const costBadge = a.costType === 'free'
    ? '<span class="badge badge-free">Free</span>'
    : `<span class="badge badge-paid">Up to $${a.costMax}</span>`;
  const settingBadge = `<span class="badge badge-${a.setting}">${a.setting === 'indoor' ? '🏠 Indoor' : a.setting === 'outdoor' ? '🌳 Outdoor' : '🏠🌳 Both'}</span>`;
  const ageLabel = a.ageMin === 0 && a.ageMax === 18
    ? 'All Ages'
    : a.ageMin === 0 ? `0–${a.ageMax} yrs` : `${a.ageMin}–${a.ageMax} yrs`;
  const dur = a.duration >= 60
    ? `${Math.round(a.duration / 60 * 10) / 10} hr${a.duration >= 120 ? 's' : ''}`
    : `${a.duration} min`;

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.address)}`;
  const websiteLink = a.website
    ? `<a href="${escHtml(a.website)}" class="card-links-item link-website" target="_blank" rel="noopener">🌐 Website</a>`
    : '';

  const isExpanded = state.expandedId === a.id;

  wrap.innerHTML = `
    <div class="card-top">
      <span class="card-icon">${icon}</span>
      <div class="card-title-block">
        <div class="card-name">${escHtml(a.name)}</div>
        <div class="card-badges">
          <span class="badge badge-cat-${escHtml(a.category)}">${escHtml(catLabel)}</span>
          ${costBadge}
          ${settingBadge}
          <span class="badge badge-age">👶 ${escHtml(ageLabel)}</span>
          <span class="badge badge-dur">⏱ ${escHtml(dur)}</span>
          ${a.rainFriendly ? '<span class="badge badge-free">☔ Rain OK</span>' : ''}
        </div>
      </div>
    </div>
    <p class="card-desc-short">${escHtml(a.desc)}</p>
    <button class="card-expand-btn" aria-expanded="${isExpanded}">
      ${isExpanded ? '▲ Hide Details' : '▼ View Details'}
    </button>
    <div class="card-detail${isExpanded ? ' show' : ''}">
      <span class="detail-label">Address</span>
      <p>${escHtml(a.address)}</p>
      <span class="detail-label">Full Description</span>
      <p>${escHtml(a.desc)}</p>
      <div class="card-links">
        ${websiteLink}
        <a href="${escHtml(mapsLink)}" class="card-links-item link-maps" target="_blank" rel="noopener">🗺️ Google Maps</a>
      </div>
    </div>
  `;

  wrap.querySelector('.card-expand-btn').addEventListener('click', e => {
    e.stopPropagation();
    if (state.expandedId === a.id) {
      state.expandedId = null;
    } else {
      state.expandedId = a.id;
    }
    renderResults();
    // Scroll card into view
    setTimeout(() => {
      const el = document.querySelector(`[data-id="${a.id}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  });

  return wrap;
}

/* ═══════════════════════════════════════════════════
   MAP
═══════════════════════════════════════════════════ */
function renderMap(list) {
  const cityObj = CITIES.find(c => c.key === state.cityKey);

  if (!leafletMap) {
    leafletMap = L.map('map-container').setView([cityObj.lat, cityObj.lon], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(leafletMap);
  } else {
    leafletMap.setView([cityObj.lat, cityObj.lon], 10);
  }

  // Clear existing markers
  leafletMarkers.forEach(m => m.remove());
  leafletMarkers = [];

  list.forEach(a => {
    const icon = CATEGORY_ICONS[a.category] || '📍';
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.address)}`;
    const costText = a.costType === 'free' ? 'Free' : `Up to $${a.costMax}`;

    const marker = L.marker([a.lat, a.lon]).addTo(leafletMap);
    marker.bindPopup(`
      <strong>${escHtml(a.name)}</strong><br>
      ${icon} ${escHtml(CATEGORY_LABELS[a.category] || a.category)} &bull; ${escHtml(costText)}<br>
      <small>${escHtml(a.address)}</small><br>
      <a href="${escHtml(mapsLink)}" target="_blank" rel="noopener">🗺️ Directions</a>
    `);
    leafletMarkers.push(marker);
  });

  // Force Leaflet to re-measure after the container becomes visible
  setTimeout(() => leafletMap.invalidateSize(), 50);
  setTimeout(() => leafletMap.invalidateSize(), 300);
  setTimeout(() => leafletMap.invalidateSize(), 800);
}

/* ═══════════════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════════════ */
function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
