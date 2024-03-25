import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import video from "../../assets/video1.mp4";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import Action from "./Action.tsx";
import { ModalComponent } from "../layouts/Modal.tsx";

const Post = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex text-white w-[692px] mx-auto border-b-[1px] border-b-gray-700 pb-5">
      <img
        src={avatar}
        alt="avatar"
        className="w-[56px] h-[56px] object-cover rounded-full me-3"
      />
      <div className="grow">
        <div className="flex">
          <div className="grow">
            <div>
              <span className="font-bold">music63286</span>
              <span className="text-[12px]"> Music</span>
            </div>
            <div>Alam ko na hindi ako ang para sayo</div>
            <div className="flex items-center opacity-80">
              <MusicNoteRoundedIcon fontSize="small" />
              <div className="text-[14px]">nhạc nền - VietZ</div>
            </div>
          </div>
          <div onClick={() => setIsModalVisible(true)}>
            <button className="font-bold border-rose-500 border-[1px] rounded-sm h-[36px] w-[96px] text-rose-500">
              Follow
            </button>
          </div>
        </div>
        <div className="rounded-lg w-[300px] mt-3 flex">
          <video src={video} className="rounded-lg w-100" controls />
          <div className="flex flex-col justify-end ms-4 gap-2">
            <Action
              onClick={() => setIsModalVisible(true)}
              Icon={<FavoriteIcon color="inherit" />}
              title="344k"
            />
            <Action
              onClick={() => setIsModalVisible(true)}
              Icon={<TextsmsIcon color="inherit" />}
              title="3453"
            />
            <Action
              onClick={() => setIsModalVisible(true)}
              Icon={<BookmarkIcon color="inherit" />}
              title="10k"
            />
            <Action
              onClick={() => setIsModalVisible(true)}
              Icon={<ShareIcon color="inherit" />}
              title="34"
            />
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isModalVisible}
        isClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default Post;
