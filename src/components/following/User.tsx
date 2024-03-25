import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  imageName: string;
}

export const User = ({ imageName }: Props) => {
  return (
    <div className="w-[226px] h-[302px] text-white relative">
      <img
        src={imageName}
        className="w-[100%] h-[100%] rounded-lg"
        alt="avatar-user"
      />
      <div className="grid justify-items-center w-[100%] absolute bottom-3">
        <img
          src={imageName}
          className="w-[55px] h-[55px] rounded-full mb-5"
          alt="avatar-user-small"
        />
        <strong className="text-[18px]">CrisDevilGamer</strong>
        <div className="flex flex-row items-center">
          <strong className="text-[16px] mr-[2px]">crisdevilgamer7</strong>
          <CheckCircleIcon
            className="text-teal-200"
            style={{ fontSize: "16px" }}
          />
        </div>
        <div className="w-[150px] px-5 py-3 bg-red-500 text-white text-center rounded-lg font-bold mt-2">
          Follow
        </div>
      </div>
    </div>
  );
};