import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Clock, ArrowLeft, Plane } from "lucide-react";
import { Airport } from "@/hooks/useFlightSource";

interface FlightCardProps {
  source: Airport | null;
  destination: Airport | null;
  departureDate: Date | null;
  returnDate: Date | null;
}

const FlightCard = ({
  source,
  destination,
  departureDate,
  returnDate,
}: FlightCardProps) => {
  const getNextDay = (date: Date | null) => {
    if (!date) return null;
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  };

  // Calculate the day after departure
  const dayAfterDeparture = getNextDay(departureDate);

  // Function to format date as "Day DD Month"
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  return (
    <Sheet>
      <Card className="w-full bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between">
            <div className="flex-grow grid grid-cols-4 gap-6">
              {/* First flight */}
              <div className="col-span-4 grid grid-cols-4 gap-6 mb-6">
                <div className="flex justify-center">
                  <Plane className="w-8 h-8 text-blue-600 mr-3" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Emirates • AT 4334
                  </p>
                  <p className="text-base text-gray-600">9:45 AM - 11:45 AM</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {source?.code} - {destination?.code}
                  </p>
                  <p className="text-base text-gray-600">2h 10min</p>
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    Non stop
                  </p>
                </div>
              </div>

              {/* Second flight */}
              <div className="col-span-4 grid grid-cols-4 gap-6">
                <div className="flex justify-center">
                  <Plane className="w-8 h-8 text-red-600 mr-3" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Lufthansa • AT 4334
                  </p>
                  <p className="text-base text-gray-600">
                    11:45 PM - 6:45 AM{" "}
                    <span className="text-red-500">+1 day</span>
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {destination?.code}-{source?.code}
                  </p>
                  <p className="text-base text-gray-600">4h 10min</p>
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">2 stops</p>
                  <p className="text-sm text-gray-500">
                    6h 32m in Lisbon, P...
                  </p>
                </div>
              </div>
            </div>

            <div className="pl-8 ml-6 flex flex-col items-end justify-between border-l border-gray-300">
              <div className="text-right">
                <p className="text-sm text-gray-500">from</p>
                <p className="text-2xl font-semibold text-gray-900">
                  AED 2,456.90
                </p>
              </div>
              <SheetTrigger asChild>
                <Button className="bg-green-700 hover:bg-green-800 mt-4 px-8 py-2 text-lg text-white">
                  Select
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </CardContent>
      </Card>

      <SheetContent className="w-[800px] bg-white" style={{ maxWidth: "90vw" }}>
        <div className="flex items-center mb-6">
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </SheetClose>
          <SheetTitle className="text-gray-900 text-xl">
            Flight details
          </SheetTitle>
        </div>
        <div className="space-y-8">
          {/* First Flight */}
          <div>
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">
                  Emirates • AT 4334
                </p>
                <p className="text-sm text-gray-500">Economy • A330</p>
              </div>
              <p className="ml-auto text-sm text-gray-600">
                Flight time 3h 45m
              </p>
            </div>

            <div className="relative pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-300"></div>

              <div className="flex items-start mb-4">
                <div className="absolute left-0 top-2 w-2 h-2 -ml-[4.5px] rounded-full bg-gray-300"></div>
                <div className="flex-shrink-0 w-24 ml-6">
                  <p className="font-semibold text-gray-900">2:15</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(departureDate)}
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">{source?.name}</p>
                  <p className="text-sm text-gray-500">{source?.code}</p>
                </div>
              </div>

              <div className="flex items-center mb-4 ml-6">
                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                <p className="text-sm text-gray-500">Layover 2h 25m</p>
              </div>

              <div className="flex items-start">
                <div className="absolute left-0 bottom-2 w-2 h-2 -ml-[4.5px] rounded-full bg-gray-300"></div>
                <div className="flex-shrink-0 w-24 ml-6">
                  <p className="font-semibold text-gray-900">2:15</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(dayAfterDeparture)}
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">
                    King Khalid International Airport
                  </p>
                  <p className="text-sm text-gray-500">RUH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Second Flight - with the same dotted line structure */}
          <div>
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">
                  Emirates • AT 4334
                </p>
                <p className="text-sm text-gray-500">Economy • A330</p>
              </div>
              <p className="ml-auto text-sm text-gray-600">
                Flight time 3h 45m
              </p>
            </div>

            <div className="relative pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-300"></div>

              <div className="flex items-start mb-4">
                <div className="absolute left-0 top-2 w-2 h-2 -ml-[4.5px] rounded-full bg-gray-300"></div>
                <div className="flex-shrink-0 w-24 ml-6">
                  <p className="font-semibold text-gray-900">2:15</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(dayAfterDeparture)}
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">
                    King Khalid International Airport
                  </p>
                  <p className="text-sm text-gray-500">RUH</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="absolute left-0 bottom-2 w-2 h-2 -ml-[4.5px] rounded-full bg-gray-300"></div>
                <div className="flex-shrink-0 w-24 ml-6">
                  <p className="font-semibold text-gray-900">2:15</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(dayAfterDeparture)}
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-900">
                    {destination?.name}
                  </p>
                  <p className="text-sm text-gray-500">{destination?.code}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FlightCard;
