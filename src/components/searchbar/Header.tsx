import React, { FC } from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderLogo from './HeaderLogo';
import Search from './Search';

const Header: FC = () => {
  return (
    <div className='pt-8 pb-20 w-full flex justify-between text-black'>
      <HeaderLogo />
      <Search />
      <HeaderButtons />
    </div>
  );
};

export default Header;
