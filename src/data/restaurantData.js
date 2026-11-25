// Restaurant Core Data & Configuration
// Sadafal Cafe & Dining - Nawalgarh, Rajasthan

export const RESTAURANT_INFO = {
  name: "Sadafal Cafe & Dining",
  shortName: "SADAFAL",
  tagline: "Good Food. Great Moments.",
  subheading: "Discover delicious flavours and enjoy memorable dining experiences at Sadafal Cafe & Dining.",
  locationBadge: "Nawalgarh, Rajasthan",
  
  address: {
    street: "Near OBC Bank, Nansa Gate",
    city: "Nawalgarh",
    state: "Rajasthan",
    pincode: "333042",
    country: "India",
    full: "Near OBC Bank, Nansa Gate, Nawalgarh, Rajasthan 333042, India",
  },
  
  contact: {
    phone: "+91 87642 15021",
    phoneTel: "tel:+918764215021",
    email: "sadafalcafe@gmail.com",
    emailMailto: "mailto:sadafalcafe@gmail.com",
  },
  
  timing: {
    display: "9:00 AM – 11:00 PM",
    isProvisional: true,
    note: "Timings are provisional based on current listings (approx. 9/10 AM to 11 PM) and subject to owner confirmation.",
    days: "Monday – Sunday",
  },
  
  cuisines: [
    "North Indian",
    "South Indian",
    "Chinese",
    "Italian",
    "Fast Food",
    "Street Food",
    "Pizza",
    "Sandwiches",
    "Beverages",
  ],
  
  maps: {
    searchUrl: "https://www.google.com/maps/search/?api=1&query=Sadafal+Cafe+%26+Dining+Near+OBC+Bank+Nansa+Gate+Nawalgarh+Rajasthan+333042",
    embedUrl: "https://maps.google.com/maps?q=Nansa+Gate+Nawalgarh+Rajasthan+333042&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  
  about: {
    heading: "Welcome to Sadafal Cafe & Dining",
    description: "At Sadafal Cafe & Dining, enjoy a variety of flavours ranging from North Indian and South Indian favourites to Chinese dishes, pizzas, sandwiches and refreshing beverages. Whether you are visiting for breakfast, lunch or dinner, discover a welcoming place to enjoy good food.",
    highlights: [
      {
        id: "variety",
        title: "Variety of Food",
        description: "From traditional Indian curries to authentic Chinese and artisanal pizzas.",
      },
      {
        id: "family",
        title: "Family Dining",
        description: "Warm and courteous hospitality with seating ideal for family and friends.",
      },
      {
        id: "flavours",
        title: "Delicious Flavours",
        description: "Freshly prepared vegetarian dishes with authentic regional spices.",
      },
    ],
  },
  
  whyChooseUs: [
    {
      id: "variety-cuisine",
      title: "Variety of Cuisine",
      description: "An extensive vegetarian menu covering North Indian, South Indian, Chinese, Italian, Burgers, Sandwiches, and shakes.",
      icon: "UtensilsCrossed",
    },
    {
      id: "all-day-meals",
      title: "Breakfast, Lunch & Dinner",
      description: "From morning parathas and pav bhaji to afternoon combo meals and rich evening dinner courses.",
      icon: "Clock",
    },
    {
      id: "family-dining",
      title: "Family Dining",
      description: "Comfortable, clean, and welcoming environment perfect for dining with loved ones, families, and friends.",
      icon: "Users",
    },
    {
      id: "convenient-location",
      title: "Convenient Location",
      description: "Easily accessible near OBC Bank at Nansa Gate in historic Nawalgarh, with convenient neighborhood parking.",
      icon: "MapPin",
    },
  ],
  
  disclaimers: {
    menu: "Menu and availability may change. Please contact the restaurant for current details.",
    hours: "Opening hours are displayed provisionally and subject to direct restaurant confirmation.",
  },
  
  // Cloudinary image assets hosted on mychatend cloud
  images: {
    heroBg: "https://res.cloudinary.com/mychatend/image/upload/v1795585164/sadafal_cafe/hero_bg.jpg",
    aboutDining: "https://res.cloudinary.com/mychatend/image/upload/v1795585166/sadafal_cafe/about_dining.jpg",
  }
};
