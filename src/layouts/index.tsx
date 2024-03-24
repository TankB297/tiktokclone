import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import tiktokLogo from "../assets/tiktok-logo.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  children: React.ReactNode;
};

const Layouts = (props: Props) => {
  const { children } = props;
  return (
    <div className="">
      <div className="bg-black flex flex-row py-2">
        <div className="flex flex-row py-2 pl-4">
          <img className="w-[30px] mr-1" src={tiktokLogo} alt="logo" />
          <strong className="text-white text-3xl font-sans">TikTok</strong>
        </div>
        <div className="flex flex-row rounded-[50px] bg-neutral-700 px-3 items-center w-[35%] m-auto my-0 hover:border-2 hover:border-gray-500">
          <input
            className="bg-inherit placeholder:text-gray-200 placeholder:text-[18px] w-[100%] border-r-[1px] border-r-gray-400 mr-2 ml-2"
            placeholder="Search"
          />
          <SearchIcon className="text-gray-400" style={{ fontSize: 30 }} />
        </div>
        <div className="flex flex-row items-center mr-4">
          <div className="flex flex-row items-center bg-gray-600 hover:bg-gray-700 py-2 rounded-md w-[120px] justify-center">
            <AddIcon className="text-white" style={{ fontSize: "25px" }} />
            <p className="font-medium text-white text-[18px] ml-2">Upload</p>
          </div>
          <div className="bg-red-600 hover:bg-red-700 py-2 rounded-md ml-[15px] w-[120px]">
            <p className="font-medium text-center text-white text-[18px]">
              Login
            </p>
          </div>
          <MoreVertIcon
            className="text-white ml-2"
            style={{ fontSize: "28px" }}
          />
        </div>
      </div>
      <div className="contents">
        <div className="left-menu">left</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
