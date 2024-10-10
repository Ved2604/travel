import React from "react";
import { FlightSearchForm } from "@/components/ui/flightSearchForm";

export default function FlightSearchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[12vh] bg-gray-50 pl-14 ml-8">
      <div className="w-full max-w-[1200px] space-y-12">
        <h1 className="text-[40px] text-center font-medium text-gray-900 font-sans">
          Good afternoon, Brian
        </h1>

        <div className="bg-white rounded-lg border border-gray-100 shadow-lg p-8 h-[300px] mb-4">
          <div className="flex items-center space-x-2 bg-gray-100 w-28 rounded-md">
            <div className="text-sm px-8 py-3 font-semibold text-black font-serif">
              Flights
            </div>
          </div>
          <FlightSearchForm />
        </div>
      </div>
    </div>
  );
}
