import React from "react";
import { Tab } from "./Tab.tsx";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const LeftMenu = () => {
  return (
    <div className="bg-black py-2">
      <Tab IconName={HomeOutlinedIcon} label="For You" />
      <Tab IconName={PersonAddAltOutlinedIcon} label="Following" />
      <Tab IconName={GroupOutlinedIcon} label="Friends" />
      <Tab IconName={ExploreOutlinedIcon} label="Explore" />
      <Tab IconName={LiveTvOutlinedIcon} label="LIVE" />
      <Tab IconName={PersonOutlineOutlinedIcon} label="Profile" />
    </div>
  );
};
