import React, { useState } from "react";
import { Tab } from "./Tab.tsx";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { ModalComponent } from "./Modal.tsx";

export const LeftMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="bg-black py-2">
      <Tab path={"/"} IconName={HomeOutlinedIcon} label="For You" />
      <Tab
        path={"/following"}
        IconName={PersonAddAltOutlinedIcon}
        label="Following"
      />
      <Tab
        onClick={() => setIsModalVisible(true)}
        path={""}
        IconName={GroupOutlinedIcon}
        label="Friends"
      />
      <Tab path={"/explore"} IconName={ExploreOutlinedIcon} label="Explore" />
      <Tab
        onClick={() => setIsModalVisible(true)}
        path={""}
        IconName={LiveTvOutlinedIcon}
        label="LIVE"
      />
      <Tab
        onClick={() => setIsModalVisible(true)}
        path={""}
        IconName={PersonOutlineOutlinedIcon}
        label="Profile"
      />
      <ModalComponent
        isOpen={isModalVisible}
        isClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};
