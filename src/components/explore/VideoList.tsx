import React from "react";
import { VideoItem } from "./VideoItem.tsx";
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

export const VideoList = () => {
  return (
    <div className="flex flex-wrap mx-auto w-[900px] gap-4">
      <VideoItem videoURL={tiktok0} />
      <VideoItem videoURL={tiktok1} />
      <VideoItem videoURL={tiktok2} />
      <VideoItem videoURL={tiktok3} />
      <VideoItem videoURL={tiktok4} />
      <VideoItem videoURL={tiktok5} />
      <VideoItem videoURL={tiktok6} />
      <VideoItem videoURL={tiktok7} />
      <VideoItem videoURL={tiktok8} />
      <VideoItem videoURL={tiktok9} />
      <VideoItem videoURL={tiktok1} />
      <VideoItem videoURL={tiktok2} />
      <VideoItem videoURL={tiktok3} />
      <VideoItem videoURL={tiktok5} />
      <VideoItem videoURL={tiktok7} />
    </div>
  );
};
