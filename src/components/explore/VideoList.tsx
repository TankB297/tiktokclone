import React from "react";
import { VideoItem } from "./VideoItem.tsx";

export const VideoList = () => {
  return (
    <div className="flex flex-wrap mx-auto w-[900px] gap-4">
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
};
