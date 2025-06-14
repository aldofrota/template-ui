import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <LuLayoutDashboard />
        <span>Dashboard</span>
      </h1>
    </div>
  );
};

export default Dashboard;
