import React from "react";

interface Props {
  IconName: React.ElementType;
  label: string;
}

export const Tab = ({ IconName, label }: Props) => {
  return (
    <div className="flex flex-row items-center hover:bg-gray-500 p-3 pl-4">
      <IconName className="text-white" style={{ fontSize: "30px" }} />
      <p className="font-medium text-xl ml-2 text-white">{label}</p>
    </div>
  );
};
