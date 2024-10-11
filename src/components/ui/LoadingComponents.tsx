import React from "react";
import { motion } from "framer-motion";

const LoadingProgressBar = () => (
  <div className="relative w-full h-2 bg-blue-400 mt-32">
    <motion.div
      className="absolute top-0 left-0 h-full bg-blue-600"
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeInOut", repeat: 40 }}
    />
  </div>
);

const LoadingPlaneIcon = () => (
  <motion.div
    animate={{
      x: [0, 10, 0],
      y: [0, -5, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12 text-blue-500"
    >
      <path
        d="M4 11L9 6L20 6L12 14L4 11ZM4 11L9 16L20 16L12 14L4 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

const LoadingItem = ({ text, delay }: { text: string; delay: number }) => (
  <div className="flex items-center space-x-3">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center"
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-3 h-3 text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
      >
        <path
          fill="currentColor"
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        />
      </motion.svg>
    </motion.div>
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-gray-700"
    >
      {text}
    </motion.span>
  </div>
);

const LoadingDialog = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
      <div className="flex justify-center mb-6">
        <LoadingPlaneIcon />
      </div>
      <div className="space-y-4">
        <LoadingItem text="Searching 400+ flights" delay={2} />
        <LoadingItem text="Attaching company rules" delay={6} />
        <LoadingItem text="Serving best results" delay={10} />
      </div>
    </div>
  </div>
);

const FlightCardSkeleton = () => (
  <div className="w-full bg-white rounded-lg shadow p-6 animate-pulse">
    <div className="grid grid-cols-4 gap-6">
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
    </div>
    <div className="mt-6 grid grid-cols-4 gap-6">
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export { LoadingProgressBar, LoadingDialog, FlightCardSkeleton };
