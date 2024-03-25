import React from "react";

interface Props {
  IconName: string;
  Label: string;
}

export const LoginItem = ({ IconName, Label }: Props) => {
  return (
    <div className="flex flex-row w-[350px] px-5 py-3 bg-slate-600 items-center text-center rounded-lg mx-auto hover:bg-slate-700">
      <IconName className="text-white" style={{ fontSize: "22px" }} />
      <strong className="mx-auto">{Label}</strong>
    </div>
  );
};
