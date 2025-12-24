// Centralized image links for Desa Windusari website

// SVG Icons from public folder
export const svgIcons = {
  file: '/file.svg',
  globe: '/globe.svg',
  next: '/next.svg',
  vercel: '/vercel.svg',
  window: '/window.svg',
} as const;

// Hero/Banner Images
export const heroImages = {
  villageHero: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1920&q=80',
  villageMain: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&q=80',
} as const;

// Product Images
export const productImages = {
  organicRice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
  bambooHandicraft: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80',
  robustaCoffe: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80',
  forestHoney: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80',
  melinjoCrackers: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  hydroponicVegetables: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  cassavaChips: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
} as const;

// Activity Images
export const activityImages = {
  posyandu: 'https://images.unsplash.com/photo-1609189608032-40efe68e4a05?w=500&q=80',
  kknProgram: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80',
  umkmTraining: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80',
  villageCleanup: 'https://images.unsplash.com/photo-1618477462146-c27c6a5b7ae5?w=500&q=80',
  meetingCoordination: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80',
  organicFarmingEducation: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
  independenceCompetition: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80',
  childLiteracy: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80',
  elderlyExercise: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80',
} as const;

// Booklet/Article Images
export const bookletImages = {
  organicFarming: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
  digitalMarketing: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80',
  villageHistory: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&q=80',
  foodSecurity: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  environmentalCleanliness: 'https://images.unsplash.com/photo-1618477462146-c27c6a5b7ae5?w=400&q=80',
} as const;

// Placeholder and blur data URLs
export const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8A/wD/2Q==';

// Export all images as a single object
const images = {
  svgIcons,
  heroImages,
  productImages,
  activityImages,
  bookletImages,
  blurDataURL,
} as const;

export default images;

// All objects are now exported individually above and also available via the default export