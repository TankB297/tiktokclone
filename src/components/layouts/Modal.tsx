import React from "react";
import Modal from "@mui/material/Modal";
import { LoginList } from "./LoginList.tsx";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

interface Props {
  isOpen: boolean;
  isClose: () => void;
}

export const ModalComponent = ({ isOpen, isClose }: Props) => {
  return (
    <Modal
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      open={isOpen}
    >
      <div className="bg-slate-800 w-[500px] text-white m-auto mt-20 text-center flex flex-col">
        <CancelOutlinedIcon
          onClick={isClose}
          style={{ fontSize: "40px", alignSelf: "end", margin: 10 }}
        />
        <strong className="text-[28px]">Log in to TikTok</strong>
        <LoginList />
      </div>
    </Modal>
  );
};
