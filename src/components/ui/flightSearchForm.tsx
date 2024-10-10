import React, { useMemo, useState } from "react";
import { Search, ArrowLeftRight, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "./calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import useDepartureDate from "@/hooks/useDepartureDate";
import useReturnDate from "@/hooks/useReturnDate";
import useFlightSource from "@/hooks/useFlightSource";
import useFlightDestination from "@/hooks/useFlightDestination";
import airports from "@/constants/airports";
import { useRouter } from "next/router";
import { Airport } from "@/hooks/useFlightSource";

interface FlightSearchProps {
  src?: Airport | null;
  dest?: Airport | null;
  depDate?: Date | null;
  retDate?: Date | null;
}

export const FlightSearchForm: React.FC = ({
  src,
  dest,
  depDate,
  retDate,
}: FlightSearchProps) => {
  const [departureDate, setDepartureDate] = useState<Date | null>(
    depDate ?? null
  );
  const [returnDate, setReturnDate] = useState<Date | null>(retDate ?? null);
  const [source, setFlightSource] = useState<Airport | null>(src ?? null);
  const [destination, setFlightDestination] = useState<Airport | null>(
    dest ?? null
  );

  const router = useRouter();

  const handleSwitch = () => {
    const tempSource = source;
    setFlightSource(destination!);
    setFlightDestination(tempSource);
  };

  const isSearchDisabled = useMemo(() => {
    return !source || !destination || (!departureDate && !returnDate);
  }, [source, destination, departureDate, returnDate]);

  const disabledDates = (date: Date): boolean => {
    if (!date) return true;
    if (date < new Date()) return true;
    if (departureDate && date < departureDate) return true;
    return false;
  };

  const getFilteredAirports = (currentSelection: typeof source | null) => {
    return airports.filter((airport) =>
      currentSelection ? airport.code !== currentSelection.code : true
    );
  };

  function handleClick() {
    const queryParams = new URLSearchParams();
    if (source) queryParams.set("src", source.code);
    if (destination) queryParams.set("dest", destination.code);
    if (departureDate) queryParams.set("dep", departureDate.toISOString());
    if (returnDate) queryParams.set("ret", returnDate.toISOString());

    const currentPath = router.pathname;
    const newPath = currentPath === "/" ? "/flightResults" : currentPath;

    router.push(`${newPath}?${queryParams.toString()}`);
  }

  return (
    <div className="space-y-8 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,1fr,1fr] gap-4 items-start">
        <Select
          value={source?.code}
          onValueChange={(value) =>
            setFlightSource(airports.find((airport) => airport.code === value)!)
          }
        >
          <SelectTrigger className="h-[64px] bg-white border-gray-200">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-gray-400" />
                {source ? (
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {source.name.length > 20
                        ? `${source.name.slice(0, 20)}...`
                        : source.name}{" "}
                      ({source.code})
                    </span>
                  </div>
                ) : (
                  <SelectValue
                    placeholder="Where from?"
                    className="text-black font-light font-mono"
                  />
                )}
              </div>
            </div>
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto">
            {getFilteredAirports(destination).map((airport) => (
              <SelectItem
                key={airport.code}
                value={airport.code}
                className="py-2 px-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{airport.city}</div>
                    <div className="text-sm text-gray-500">
                      {airport.country}
                    </div>
                  </div>
                  <div className="text-sm font-mono ml-12 right-1">
                    {airport.code}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center pt-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-100"
            onClick={handleSwitch}
          >
            <ArrowLeftRight className="h-5 w-5" />
          </Button>
        </div>

        <Select
          value={destination?.code}
          onValueChange={(value) =>
            setFlightDestination(
              airports.find((airport) => airport.code === value)!
            )
          }
        >
          <SelectTrigger className="h-[64px] bg-white border-gray-200">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-gray-400" />
                {destination ? (
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {destination.name.length > 20
                        ? `${destination.name.slice(0, 20)}...`
                        : destination.name}{" "}
                      ({destination.code})
                    </span>
                  </div>
                ) : (
                  <SelectValue
                    placeholder="Where to?"
                    className="text-gray-100 font-light font-mono"
                  />
                )}
              </div>
            </div>
          </SelectTrigger>
          <SelectContent className="max-h-[300px] overflow-y-auto">
            {getFilteredAirports(source).map((airport) => (
              <SelectItem
                key={airport.code}
                value={airport.code}
                className="py-2 px-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{airport.city}</div>
                    <div className="text-sm text-gray-500">
                      {airport.country}
                    </div>
                  </div>
                  <div className="text-sm font-mono ml-12">{airport.code}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "h-[64px] justify-start text-left font-normal bg-white border-gray-200",
                !departureDate && "text-black font-light font-mono"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {departureDate ? (
                format(departureDate, "PPP")
              ) : (
                <span>Departure</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={departureDate || undefined}
              onSelect={(date) => setDepartureDate(date || null)}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "h-[64px] justify-start text-left font-normal bg-white border-gray-200",
                !returnDate && "text-black font-light font-mono"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {returnDate ? format(returnDate, "PPP") : <span>Return</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={returnDate || undefined}
              onSelect={(date) => setReturnDate(date || null)}
              disabled={disabledDates}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex justify-end pt-4">
        <Button
          className="w-[300px] bg-[#004953] hover:bg-[#003940] h-12"
          disabled={isSearchDisabled}
          onClick={handleClick}
        >
          <Search className="mr-2 h-5 w-5" />
          <span className="font-light">Search flights</span>
        </Button>
      </div>
    </div>
  );
};
