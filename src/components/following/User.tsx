import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ModalComponent } from "../layouts/Modal.tsx";

interface Props {
  imageName: string;
  userName: string;
  id: string;
}

export const User = ({ imageName, userName, id }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        <strong className="text-[18px]">{userName}</strong>
        <div className="flex flex-row items-center">
          <strong className="text-[16px] mr-[2px]">{id}</strong>
          <CheckCircleIcon
            className="text-teal-200"
            style={{ fontSize: "16px" }}
          />
        </div>
        <div
          onClick={() => setIsModalVisible(true)}
          className="w-[150px] px-5 py-3 bg-red-500 hover:bg-red-700 cursor-pointer text-white text-center rounded-lg font-bold mt-2"
        >
          Follow
        </div>
      </div>
      <ModalComponent
        isOpen={isModalVisible}
        isClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};
