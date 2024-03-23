import React from 'react';

type Props = {
    children: React.ReactNode
}

const Layouts = (props) => {
  const { children } = props;
  return (
    <div className="">
      <div className='header'>header</div>
      <div className='contents'>
        <div className='left-menu'>left</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
