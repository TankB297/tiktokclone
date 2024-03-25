import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import tiktokLogo from "../assets/tiktok-logo.svg";
import tiktokReward from "../assets/tiktok-reward.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { LeftMenu } from "../components/layouts/LeftMenu.tsx";
import { MenuHover } from "../components/layouts/MenuHover.tsx";

type Props = {
  children: React.ReactNode;
};

const Layouts = (props: Props) => {
  const { children } = props;
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="bg-black">
      <div className="bg-black flex flex-row py-2 border-b-[1px] border-b-gray-700">
        <div className="flex flex-row py-2 pl-4">
          <img className="w-[30px] mr-1" src={tiktokLogo} alt="logo" />
          <strong className="text-white text-3xl font-sans">TikTok</strong>
        </div>
        <div className="flex flex-row rounded-[50px] bg-neutral-700 px-3 items-center w-[35%] m-auto my-0 border-transparent border-2 hover:border-gray-500">
          <input
            className="text-white focus:outline-none bg-inherit placeholder:text-gray-200 placeholder:text-[18px] w-[100%] border-r-[1px] border-r-gray-400 mr-2 ml-2"
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
              Log in
            </p>
          </div>
          <div
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            className="block cursor-pointer"
          >
            <MoreVertIcon
              className="text-white ml-2"
              style={{ fontSize: "28px" }}
            />
            {isMenuVisible && <MenuHover />}
          </div>
        </div>
      </div>
      <div className="flex">
        <div
          className="bg-black w-[230px] overflow-scroll no-scrollbar"
          style={{ height: "calc(100vh - 68px)" }}
        >
          <LeftMenu />
          <div className="ml-4 mt-4 w-[200px]">
            <p className="text-gray-500 font-medium">
              Log in to follow creators, like videos, and view comments.
            </p>
          </div>
          <div className="bg-gray-800 p-3 border-2 border-red-500 mt-5 w-[85%] m-auto">
            <p className="text-red-500 text-center text-lg">Log in</p>
          </div>
          <div className="py-5 border-t-2 border-t-gray-800 mt-5 w-[85%] m-auto relative">
            <img
              src={tiktokReward}
              className="w-[100%] m-auto"
              alt="tiktok-reward"
            />
            <div className="absolute px-5 top-6 left-7 w-full">
              <p className="text-white font-bold text-sm">
                Create TikTok effects, get a reward
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-1.5 pl-4">
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              About
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Newsroom
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Contact
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Careers
            </a>
          </div>
          <div className="items-center pl-4 flex flex-wrap gap-x-1.5 gap-y-1 mt-3">
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              TikTok for Good
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Advertise
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              TikTok LIVE Creator Network
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Developers
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Transparency
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              TikTok Rewards
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              TikTok Embeds
            </a>
          </div>
          <div className="items-center pl-4 flex flex-wrap gap-x-1.5 gap-y-1 mt-3">
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Help
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Safety
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Terms
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Privacy Center
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Creator Portal
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline"
            >
              Community Guidelines
            </a>
            <a
              href="/"
              className="no-underline text-gray-500 font-extrabold text-[12px] hover:underline mt-2"
            >
              © 2024 TikTok
            </a>
          </div>
        </div>
        <div
          className="grow overflow-scroll no-scrollbar"
          style={{ height: "calc(100vh - 68px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layouts;
