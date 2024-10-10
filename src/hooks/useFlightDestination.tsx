import { useState } from "react";
import { Airport } from "./useFlightSource";

function useFlightDestination() {
  const [destination, setDestination] = useState<Airport | null>(null);

  return { destination, setFlightDestination: setDestination };
}

export default useFlightDestination;
