import React from "react";

type Props = {
  title: string;
  Icon: React.ReactNode;
};
const Action = (props: Props) => {
  const { title = "344k", Icon } = props;
  return (
    <div className="text-white flex flex-col items-center">
      <div className="p-3 rounded-full bg-gray-800">{Icon}</div>
      <div className="text-[13px] font-semibold">{title}</div>
    </div>
  );
};

export default Action;
