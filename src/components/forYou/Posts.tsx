import React from 'react';
import avatar from "../../assets/avatar.png";
import Post from './Post.tsx';

const Posts = () => {
    return <div className='w-100 mt-5 flex flex-col gap-5'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
}

export default Posts;