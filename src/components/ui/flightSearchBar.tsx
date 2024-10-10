import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const FlightSearchBar = () => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-md">
      <div className="flex-1 flex items-center space-x-2 px-4">
        <Input
          placeholder="CDG Paris Charles De Gu..."
          className="border-none shadow-none text-sm"
        />
      </div>
      <div className="flex-1 flex items-center space-x-2 px-4 border-l border-r">
        <Input
          placeholder="DXB Dubai International..."
          className="border-none shadow-none text-sm"
        />
      </div>
      <div className="flex-1 flex items-center space-x-2 px-4">
        <Input
          placeholder="Jun 25 - Jul 2"
          className="border-none shadow-none text-sm"
        />
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="text-gray-400 hover:text-gray-600"
      >
        <Search className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="text-gray-400 hover:text-gray-600"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FlightSearchBar;
