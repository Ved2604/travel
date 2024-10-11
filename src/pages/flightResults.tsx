import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FlightCard from "@/components/ui/FlightCard";
import { FlightSearchForm } from "@/components/ui/flightSearchForm";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import LoadingState from "@/components/ui/LoadingState";

import { format } from "date-fns";
import airports from "@/constants/airports";
import { Airport } from "@/hooks/useFlightSource";

export default function FlightSearchPage() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [source, setFlightSource] = useState<Airport | null>(null);
  const [destination, setFlightDestination] = useState<Airport | null>(null);

  const handleExpand = () => {
    setIsSearchExpanded(true);
  };

  const handleCollapse = () => {
    setIsSearchExpanded(false);
  };

  useEffect(() => {
    if (router.isReady) {
      const { src, dest, dep, ret } = router.query;

      if (typeof src === "string") {
        const sourceAirport = airports.find((airport) => airport.code === src);
        if (sourceAirport) setFlightSource(sourceAirport);
      }

      if (typeof dest === "string") {
        const destAirport = airports.find((airport) => airport.code === dest);
        if (destAirport) setFlightDestination(destAirport);
      }

      if (typeof dep === "string") {
        try {
          const parsedDepartureDate = new Date(dep);
          if (!isNaN(parsedDepartureDate.getTime())) {
            setDepartureDate(parsedDepartureDate);
          }
        } catch (e) {
          console.error("Invalid departure date in URL");
        }
      }

      if (typeof ret === "string") {
        try {
          const parsedReturnDate = new Date(ret);
          if (!isNaN(parsedReturnDate.getTime())) {
            setReturnDate(parsedReturnDate);
          }
        } catch (e) {
          console.error("Invalid return date in URL");
        }
      }
    }
  }, [
    router.isReady,
    router.query,
    setFlightSource,
    setFlightDestination,
    setDepartureDate,
    setReturnDate,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const SearchBar = () => (
    <div className="flex items-center justify-between w-full bg-white px-4 py-3 cursor-pointer h-full">
      <div className="flex items-center space-x-4 rounded-full px-4 py-2 ml-48 w-[50%] shadow-lg h-14 border-gray-300 border-2">
        <div className="flex items-center space-x-4 flex-1">
          <span className="text-xl text-black font-medium">{source?.code}</span>
          <span className="text-lg text-gray-400 mt-1">
            {source?.name &&
              (source.name.length > 20
                ? `${source.name.slice(0, 20)}...`
                : source.name)}
          </span>
        </div>
        <div className="flex items-center space-x-4 flex-1">
          <span className="text-xl text-black font-medium">
            {destination?.code}
          </span>
          <span className="text-lg text-gray-400 mt-1">
            {destination?.name &&
              (destination.name.length > 20
                ? `${destination.name.slice(0, 20)}...`
                : destination.name)}
          </span>
        </div>
        <div className="flex items-center space-x-4 flex-1">
          <span className="text-xl text-black font-medium">
            {departureDate && format(departureDate, "d MMM")}
            {departureDate && returnDate && " - "}
            {returnDate && format(returnDate, "d MMM")}
          </span>
        </div>
        <Search className="h-5 w-5 text-gray-400 bg-gray-300 rounded-full" />
      </div>
      <div>
        <Button
          size="sm"
          variant="ghost"
          className="hover:bg-transparent"
          onClick={(e) => {
            e.stopPropagation();
            router.push("/");
          }}
        >
          <X className="h-5 w-5 text-gray-400" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full fixed top-0 z-50">
        {!isSearchExpanded ? (
          <div className="w-full bg-white overflow-hidden transition-all duration-300 ease-in-out h-28 border-black border-b mt-4 pb-2">
            <div className="h-full flex items-center" onClick={handleExpand}>
              <SearchBar />
            </div>
          </div>
        ) : (
          <div
            className="w-full bg-white overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: "500px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="p-6 border-gray-400 border-b-2">
              <FlightSearchForm
                depDate={departureDate}
                retDate={returnDate}
                src={source}
                dest={destination}
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button
                onClick={handleCollapse}
                variant="outline"
                className="px-6"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>

      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="mt-36 px-4">
          <p className="text-sm text-gray-500 mb-4 ml-48">
            Showing 356 of 767 results
          </p>
          <div className="space-y-4 ml-48 mr-28 mb-4">
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <FlightCard
              source={source}
              destination={destination}
              departureDate={departureDate}
              returnDate={returnDate}
            />
          </div>
        </div>
      )}
    </div>
  );
}
