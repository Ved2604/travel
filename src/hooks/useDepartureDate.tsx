import { useState, useEffect } from "react";

function useDepartureDate() {
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  return { departureDate, setDepartureDate };
}

export default useDepartureDate;
