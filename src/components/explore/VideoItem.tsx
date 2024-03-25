import React from 'react';
import video from '../../assets/video1.mp4';
import avatarDemo from '../../assets/user-demo.jpg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const VideoItem = () => {
  return (
    <div className='w-[280px]'>
      <div className='h-[360px] overflow-hidden rounded-lg'>
        <video src={video} className='rounded-lg w-[100%] h-[360px] object-cover' controls />
      </div>
      <div>
        <strong className='text-white mr-1'>set fire to the rain</strong>
        <strong className='text-blue-400'>
          #viral #music #cover #song #lyrics
        </strong>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-x-2'>
          <img
            src={avatarDemo}
            className='w-[30px] h-[30px] rounded-full'
            alt='avatar'
          />
          <p className='text-white'>ace.music_cover</p>
        </div>
        <div className='flex flex-row items-center gap-x-[1px]'>
          <FavoriteBorderOutlinedIcon
            className='text-slate-400'
            style={{ fontSize: '20px' }}
          />
          <strong className='text-slate-400'>2.1M</strong>
        </div>
      </div>
    </div>
  );
};
