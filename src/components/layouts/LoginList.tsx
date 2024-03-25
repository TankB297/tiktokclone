import React from "react";
import { LoginItem } from "./LoginItem.tsx";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";

export const LoginList = () => {
  return (
    <div className="mt-8 flex flex-col gap-y-3 pb-5 mb-5">
      <LoginItem IconName={QrCode2OutlinedIcon} Label="Use QR code" />
      <LoginItem
        IconName={PersonOutlineOutlinedIcon}
        Label="Use phone / email / username"
      />
      <LoginItem
        IconName={FacebookOutlinedIcon}
        Label="Continue with facebook"
      />
      <LoginItem IconName={ShopOutlinedIcon} Label="Continue with Google" />
    </div>
  );
};
