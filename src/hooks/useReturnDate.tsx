import { useState } from "react";

function useReturnDate() {
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  return { returnDate, setReturnDate };
}

export default useReturnDate;
