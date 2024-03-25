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
      <Tab path={'/'} IconName={HomeOutlinedIcon} label="For You" />
      <Tab path={'/following'} IconName={PersonAddAltOutlinedIcon} label="Following" />
      <Tab path={''} IconName={GroupOutlinedIcon} label="Friends" />
      <Tab path={'/explore'} IconName={ExploreOutlinedIcon} label="Explore" />
      <Tab path={''} IconName={LiveTvOutlinedIcon} label="LIVE" />
      <Tab path={''} IconName={PersonOutlineOutlinedIcon} label="Profile" />
    </div>
  );
};
