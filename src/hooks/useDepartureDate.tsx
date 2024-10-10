import { useState } from "react";

function useDepartureDate() {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  return { departureDate, setDepartureDate };
}

export default useDepartureDate;
