import React from "react";
import {
  LoadingProgressBar,
  LoadingDialog,
  FlightCardSkeleton,
} from "@/components/ui/LoadingComponents";

const LoadingState = () => {
  return (
    <>
      <div className="w-full z-50">
        <div className="relative w-full h-4">
          <LoadingProgressBar />
        </div>
      </div>
      <div className="mt-20 px-4">
        <LoadingDialog />
        <div className="space-y-4 ml-40 mr-28 mt-4">
          {[...Array(6)].map((_, index) => (
            <FlightCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LoadingState;
