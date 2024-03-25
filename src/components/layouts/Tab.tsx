import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  IconName: React.ElementType;
  label: string;
  path: string;
}

export const Tab = ({ IconName, label, path }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link
      to={path}
      className={`flex flex-row items-center hover:bg-gray-500 p-3 pl-4 ${
        isActive ? 'text-red-500' : 'text-white'
      }`}
    >
      <IconName className='' style={{ fontSize: '30px' }} />
      <p className='font-medium text-xl ml-2'>{label}</p>
    </Link>
  );
};
