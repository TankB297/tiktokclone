import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  IconName: React.ElementType;
  label: string;
  path: string;
  onClick?: () => void;
}

export const Tab = ({ IconName, label, path, onClick }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={`flex flex-row items-center hover:bg-slate-800 p-3 pl-4 ${
        isActive ? "text-red-500" : "text-white"
      }`}
      onClick={!path ? onClick : null}
    >
      <IconName className="" style={{ fontSize: "30px" }} />
      <p className="font-medium text-xl ml-2">{label}</p>
    </Link>
  );
};
