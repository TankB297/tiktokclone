import React from "react";
import { MenuItem } from "./MenuItem.tsx";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

export const MenuHover = () => {
  return (
    <div className="absolute top-[64px] right-[0px] py-2 bg-slate-800 rounded-lg">
      <MenuItem IconName={LightbulbOutlinedIcon} label="LIVE Creator Hub" />
      <MenuItem IconName={AutoStoriesOutlinedIcon} label="English" />
      <MenuItem IconName={HelpOutlineOutlinedIcon} label="Feedback and help" />
      <MenuItem IconName={KeyboardAltOutlinedIcon} label="Keyboard shortcuts" />
    </div>
  );
};
