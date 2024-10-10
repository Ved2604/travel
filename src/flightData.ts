export interface StopDetail {
  airport: string;
  duration: string;
}

export interface Flight {
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  origin: string;
  destination: string;
  stops: number;
  stopDetails?: StopDetail[];
}

interface FlightOption {
  outbound: Flight;
  return?: Flight;
  price: number;
}

export const sampleFlightData: FlightOption[] = [
  {
    outbound: {
      airline: "Emirates",
      airlineLogo: "/emirates-logo.png", // Replace with actual logo path
      flightNumber: "AT 4334",
      departureTime: "9:45 AM",
      arrivalTime: "11:45 AM",
      duration: "2h 10min",
      origin: "Dubai International Airport (DXB)",
      destination: "Paris Charles De Gaulle (CDG)",
      stops: 0,
    },
    price: 2456.9,
  },
  {
    outbound: {
      airline: "Lufthansa",
      airlineLogo: "/lufthansa-logo.png", // Replace with actual logo path
      flightNumber: "AT 4334",
      departureTime: "11:45 PM",
      arrivalTime: "6:45 AM",
      duration: "4h 10min",
      origin: "Dubai International Airport (DXB)",
      destination: "Paris Charles De Gaulle (CDG)",
      stops: 2,
      stopDetails: [
        {
          airport: "Frankfurt Airport (FRA)",
          duration: "1h 30min",
        },
        {
          airport: "Munich Airport (MUC)",
          duration: "1h 15min",
        },
      ],
    },
    return: {
      airline: "Emirates",
      airlineLogo: "/emirates-logo.png", // Replace with actual logo path
      flightNumber: "AT 4334",
      departureTime: "9:45 AM",
      arrivalTime: "11:45 AM",
      duration: "7h 10min",
      origin: "Paris Charles De Gaulle (CDG)",
      destination: "Dubai International Airport (DXB)",
      stops: 1,
      stopDetails: [
        {
          airport: "Istanbul Airport (IST)",
          duration: "2h 45min",
        },
      ],
    },
    price: 1456.9,
  },
];
