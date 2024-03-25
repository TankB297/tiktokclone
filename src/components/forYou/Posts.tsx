import React from "react";
import Post from "./Post.tsx";
import tiktok0 from "../../assets/video1.mp4";
import tiktok1 from "../../assets/tiktok1.mp4";
import tiktok2 from "../../assets/tiktok2.mp4";
import tiktok3 from "../../assets/tiktok3.mp4";
import tiktok4 from "../../assets/tiktok4.mp4";
import tiktok5 from "../../assets/tiktok5.mp4";
import tiktok6 from "../../assets/tiktok6.mp4";
import tiktok7 from "../../assets/tiktok7.mp4";
import tiktok8 from "../../assets/tiktok8.mp4";
import tiktok9 from "../../assets/tiktok9.mp4";

const Posts = () => {
  return (
    <div className="w-100 mt-5 flex flex-col gap-5">
      <Post videoURL={tiktok0} userName="danny106" note="Military Activity" />
      <Post videoURL={tiktok1} userName="hoaproxvn" note="HOAPROX" />
      <Post
        videoURL={tiktok2}
        userName="official_football"
        note="Official Football"
      />
      <Post videoURL={tiktok3} userName="oldboyphoido" note="Oldboy Phoi Do" />
      <Post videoURL={tiktok4} userName="aqui7899" note="Flop Review" />
      <Post videoURL={tiktok5} userName="nguyenhimatto" note="Nguyen Hi" />
      <Post videoURL={tiktok6} userName="mazuong2ka" note="Zeros" />
      <Post
        videoURL={tiktok7}
        userName="anime_ringtones"
        note="Anime Ringtones"
      />
      <Post videoURL={tiktok8} userName="vdhiep2k1" note="Vu Hiep" />
      <Post videoURL={tiktok9} userName="tankbee297" note="TankB297" />
      <Post videoURL={tiktok4} userName="aqui7899" note="Flop Review" />
      <Post videoURL={tiktok3} userName="oldboyphoido" note="Oldboy Phoi Do" />
      <Post videoURL={tiktok6} userName="mazuong2ka" note="Zeros" />
      <Post videoURL={tiktok5} userName="nguyenhimatto" note="Nguyen Hi" />
      <Post videoURL={tiktok4} userName="aqui7899" note="Flop Review" />
      <Post videoURL={tiktok5} userName="nguyenhimatto" note="Nguyen Hi" />
      <Post videoURL={tiktok6} userName="mazuong2ka" note="Zeros" />
      <Post
        videoURL={tiktok7}
        userName="anime_ringtones"
        note="Anime Ringtones"
      />
    </div>
  );
};

export default Posts;
