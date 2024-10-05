import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FlightSearchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-[12vh] bg-gray-50 pl-14 ml-8 ">
      <div className="w-full max-w-[1200px] space-y-12">
        <h1 className="text-[40px] text-center font-medium text-gray-900 font-sans">
          Good afternoon, Brian
        </h1>

        <div className="bg-white rounded-lg border border-gray-100 shadow-lg p-8 h-[300px] mb-4">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 bg-gray-100 w-28 rounded-md">
              <div className="text-sm px-8 py-3 font-semibold text-black font-serif">
                Flights
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr,1fr,1fr] gap-4 items-start">
              <Select>
                <SelectTrigger className="h-[64px] bg-white border-gray-200">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 text-gray-400"
                    >
                      <path
                        d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <SelectValue
                      placeholder="Where from?"
                      className="text-gray-100 font-light font-mono"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nyc">New York</SelectItem>
                  <SelectItem value="lon">London</SelectItem>
                  <SelectItem value="par">Paris</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full shrink-0 mt-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66669 11.3333L13.3334 4.66666M13.3334 4.66666L8.00002 4.66666M13.3334 4.66666L13.3334 9.99999"
                    stroke="#667085"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <Select>
                <SelectTrigger className="h-[64px] bg-white border-gray-200">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 text-gray-400"
                    >
                      <path
                        d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <SelectValue
                      placeholder="Where to?"
                      className="text-gray-100 font-light font-mono"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tok">Tokyo</SelectItem>
                  <SelectItem value="sin">Singapore</SelectItem>
                  <SelectItem value="dub">Dubai</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-[64px] bg-white border-gray-200">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 text-gray-400"
                    >
                      <path
                        d="M6.66669 1.66666V4.16666M13.3334 1.66666V4.16666M2.91669 7.58333H17.0834M4.16669 3.33333H15.8334C16.7538 3.33333 17.5 4.07952 17.5 5V16.6667C17.5 17.5871 16.7538 18.3333 15.8334 18.3333H4.16669C3.24621 18.3333 2.50002 17.5871 2.50002 16.6667V5C2.50002 4.07952 3.24621 3.33333 4.16669 3.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <SelectValue
                      placeholder="Departure"
                      className="text-gray-100 font-light font-mono"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="nextweek">Next Week</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-[64px] bg-white border-gray-200">
                  <div className="flex items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 text-gray-400"
                    >
                      <path
                        d="M6.66669 1.66666V4.16666M13.3334 1.66666V4.16666M2.91669 7.58333H17.0834M4.16669 3.33333H15.8334C16.7538 3.33333 17.5 4.07952 17.5 5V16.6667C17.5 17.5871 16.7538 18.3333 15.8334 18.3333H4.16669C3.24621 18.3333 2.50002 17.5871 2.50002 16.6667V5C2.50002 4.07952 3.24621 3.33333 4.16669 3.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <SelectValue
                      placeholder="Return"
                      className="text-gray-100 font-light font-mono"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oneweek">In 1 Week</SelectItem>
                  <SelectItem value="twoweeks">In 2 Weeks</SelectItem>
                  <SelectItem value="noreturn">No Return</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end pt-4">
              <Button className="w-[300px] bg-[#004953] hover:bg-[#003940] h-12">
                <Search className="mr-2 h-5 w-5" />
                <span className="font-light">Search flights</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
