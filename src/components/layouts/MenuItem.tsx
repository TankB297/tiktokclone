import React from "react";

interface Props {
  IconName: string;
  label: string;
}

export const MenuItem = ({ IconName, label }: Props) => {
  return (
    <div className="text-white flex flex-row items-center p-3 gap-x-1.5 bg-slate-800 hover:bg-slate-600">
      <IconName style={{ fontSize: "23px" }} />
      <p className="font-semi-bold text-[18px]">{label}</p>
    </div>
  );
};
