import React from "react";
import { ThemeToggle } from "@/components";
import { LuLayoutDashboard } from "react-icons/lu";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 p-2 rounded-md flex items-center justify-center cursor-pointer">
        <ThemeToggle />
      </div>
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LuLayoutDashboard />
        <span>Dashboard</span>
      </h1>
    </div>
  );
};

export default Dashboard;
