import { useState } from "react";

// Define the type for Airport
export interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}

// Custom hook to handle the source with localStorage
function useFlightSource() {
  // Fetch the initial value from localStorage or default to null
  const [source, setSource] = useState<Airport | null>(null);

  // Custom setter function to update both the state and localStorage
  const setFlightSource = (newSource: Airport) => {
    setSource(newSource);
  };

  return { source, setFlightSource };
}

export default useFlightSource;
