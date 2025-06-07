import React from "react";
import { ThemeToggle } from "@/components";
import { Button, Tabs } from "antd";
import { FcAbout } from "react-icons/fc";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    key: "dashboard",
    label: (
      <div className="flex items-center gap-2">
        <LuLayoutDashboard />
        <span>Dashboard</span>
      </div>
    ),
  },
  {
    key: "about",
    label: (
      <div className="flex items-center gap-2">
        <FcAbout />
        <span>About</span>
      </div>
    ),
  },
];

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (key: string) => {
    navigate(`/${key}`);
  };

  return (
    <>
      <Tabs
        defaultActiveKey={location.pathname.split("/")[1]}
        items={items}
        onChange={handleChange}
        className="w-full"
        centered={true}
      />
      <div className="p-2 rounded-md flex items-center justify-center">
        <ThemeToggle />
      </div>
      <div className="p-2 rounded-md flex items-center justify-center">
        <Button onClick={() => navigate("/login")}>
          <LuLogOut />
        </Button>
      </div>
    </>
  );
};

export default Menu;
