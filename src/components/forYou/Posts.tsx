import React, { useEffect, useRef, useState } from 'react';
import Post from './Post.tsx';

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Posts = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const postRefs = useRef([]);
  postRefs.current = arrays.map(
    (_, i) => postRefs.current[i] ?? React.createRef(),
  );

  // Function to scroll to the next post
  const scrollToNextPost = () => {
    const nextIndex =
      currentPostIndex + 1 < arrays.length ? currentPostIndex + 1 : 0;
    setCurrentPostIndex(nextIndex);

    postRefs.current[nextIndex].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToPreviousPost = () => {
    const lastIndex =
      currentPostIndex - 1 > arrays.length ? currentPostIndex - 1 : 0;
    setCurrentPostIndex(lastIndex);

    postRefs.current[lastIndex].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Attach keydown event
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        // Use the key you prefer (e.g., ArrowDown, Space, etc.)
        scrollToNextPost();
      } else if (event.key === 'ArrowUp') {
        scrollToPreviousPost()
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPostIndex]);

  return (
    <div className='w-100 mt-5 flex flex-col gap-5'>
      {arrays.map((item: number, index: number) => (
        <div key={item} ref={postRefs.current[index]}>
          <Post />
        </div>
      ))}
    </div>
  );
};

export default Posts;
