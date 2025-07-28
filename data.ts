
export interface DestId {
  status: boolean;
  message: string;
  timestamp: number;
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  dest_id: string;
  search_type: string;
  nr_hotels: number;
  cc1: string;
  name: string;
  latitude: number;
  roundtrip: string;
  country: string;
  region: string;
  lc: string;
  city_name: string;
  dest_type: string;
  longitude: number;
  hotels: number;
  city_ufi?: number | null;
  image_url: string;
  type: string;
  label: string;
}

export interface HotelProperty {
  blockIds: string[];
  checkoutDate: string;
  latitude: number;
  priceBreakdown: {
    taxExceptions: never[];
    grossPrice: {
      currency: string;
      value: number;
    };
    benefitBadges: {
      explanation: string;
      text: string;
      variant: string;
      identifier: string;
    }[];
    strikethroughPrice?: {
      value: number;
      currency: string;
    };
  };
  mainPhotoId: number;
  ufi: number;
  checkinDate: string;
  reviewScore: number;
  rankingPosition: number;
  optOutFromGalleryChanges: number;
  reviewScoreWord: string;
  photoUrls: string[];
  longitude: number;
  countryCode: string;
  currency: string;
  qualityClass: number;
  propertyClass: number;
  accuratePropertyClass: number;
  id: number;
  isFirstPage: boolean;
  reviewCount: number;
  checkout: {
    fromTime: string;
    untilTime: string;
  };
  wishlistName: string;
  name: string;
  checkin: {
    untilTime: string;
    fromTime: string;
  };
  position: number;
  isPreferred?: boolean;
  isPreferredPlus?: boolean;
}

export type HotelsResponse = Hotel[];

export interface Hotel {
  hotel_id: number;
  accessibilityLabel: string;
  property: HotelProperty;
}




interface SideBarElementType {
    icon: string;
    title: string;
}

export const sideBarElement: SideBarElementType[] = [
  {
    icon: "/svg/runway.svg",
    title: "Activities"
  },
  {
    icon: "/svg/Buildings.svg",
    title: "Hotels"
  },
  {
    icon: "/svg/aero.svg",
    title: "Flights"
  },
  {
    icon: "/svg/Student.svg",
    title: "Study"
  },
  {
    icon: "/svg/visa.svg",
    title: "Visa"
  },
  {
    icon: "/svg/luggage.svg",
    title: "Immigration"
  },
  {
    icon: "/svg/FirstAidKit.svg",
    title: "Medical"
  },
  {
    icon: "/svg/med.svg",
    title: "Vacation Packages"
  },
]

export interface HotelDetailsType {
  id: number;
    hotelName: string;
    hotelStreet: string;
    showMap: string;
    rating: string;
    size: string;
    price: number;
    totalPrice: number;
    type: string;
    facilities: {
        one: string;
        two: string;
    };
    checkIn: string;
    checkOut: string;
}

export const hotelDetails:HotelDetailsType[] = [
  {
    id: 1,
    hotelName: "Riviera Resort, Lekki",
    hotelStreet:
      "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
    showMap: "",
    rating: "8.5 (436)",
    size: "King size room",
    price: 123450.00,
    totalPrice: 560000,
    type: "1 room x 10 nights incl. taxes",
    facilities: {
      one: "pool",
      two: "bar"
    },
    checkIn: "20-04-2024",
    checkOut: "29-04-2024"
  },
  {
    id: 2,
    hotelName: "Riviera Resort, Lekki",
    hotelStreet:
      "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
    showMap: "",
    rating: "8.5 (436)",
    size: "King size room",
    price: 123450.00,
    totalPrice: 560000,
    type: "1 room x 10 nights incl. taxes",
    facilities: {
      one: "pool",
      two: "bar"
    },
    checkIn: "20-04-2024",
    checkOut: "29-04-2024"
  },
];




export interface FlightDetailsType {
	id: number;
    airline: string;
    class: string;
    seatCode: string;
    flightDuration: string;
    flightTime: string;
    flightDate: string;
    destinationTime: string;
    flightDateArrival: string;
    amount: number;
    baggage: string;
    cabinBaggage: string;
    media: string;
    meal: string;
    port: string;
	from: string;
	to: string;
}
export const flightDetails: FlightDetailsType[] = [
  {
	id: 1,
    airline: "American airlines",
    class: "First class",
    seatCode: "AA-829",
    flightDuration: "1h 45m",
    flightTime: "08:35",
    flightDate: "Sun, 20 Aug",
    destinationTime: "09:55",
    flightDateArrival: "Sun, 20 Aug",
    amount: 123450.0,
	baggage: "20Kg",
	cabinBaggage: "8kg",
	media: "In flight entertainment",
	meal: "In flight meal",
	port: "USB Port",
	from: "LOS",
	to: "SIN"
  },
  {
	id: 2,
    airline: "American airlines",
    class: "First class",
    seatCode: "AA-829",
    flightDuration: "1h 45m",
    flightTime: "08:35",
    flightDate: "Sun, 20 Aug",
    destinationTime: "09:55",
    flightDateArrival: "Sun, 20 Aug",
    amount: 123450.0,
	baggage: "20Kg",
	cabinBaggage: "8kg",
	media: "In flight entertainment",
	meal: "In flight meal",
	port: "USB Port",
	from: "LOS",
	to: "SIN"
  }
];

interface NavElementType {
  icon: string;
  title: string;
}

export const navElements: NavElementType[] = [
  {
    icon: "/svg/House.svg",
    title: "Home"
  },
  {
    icon: "/svg/dashboard.svg",
    title: "Dashboard"
  },
  {
    icon: "/svg/Wallet.svg",
    title: "Wallet"
  },
  {
    icon: "/svg/trip.svg",
    title: "Plan a trip"
  },
  {
    icon: "/svg/HandCoins.svg",
    title: "Commission for life"
  }
];

export const navElements1: NavElementType[] = [
  {
    icon: "/svg/Bell.svg",
    title: "Notification"
  },
  {
    icon: "/svg/cart.svg",
    title: "Cart"
  },
  {
    icon: "/svg/PlusSquare.svg",
    title: "Create"
  }
];

interface AddActivity {
  id: number;
  title: string;
  description: string;
  action: string;
}
export const addActivities: AddActivity[] = [
  {
    id: 1,
    title: "Activities",
    description:
      "Build, personalize, and optimize your itineraries with our trip planner.",
    action: "Add Activities"
  },
  {
    id: 2,
    title: "Hotels",
    description:
      "Build, personalize, and optimize your itineraries with our trip planner.",
    action: "Add Hotels"
  },
  {
    id: 3,
    title: "Flights",
    description:
      "Build, personalize, and optimize your itineraries with our trip planner.",
    action: "Add Flights"
  }
];
