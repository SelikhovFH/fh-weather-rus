import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageButton from '../buttons/LanguageButton';
import Logo from '../img/searchbar-logo.png';
import SearchIcon from '../img/service-icons/search.svg';
import HomeIcon from '../img/service-icons/Home.svg';
import Autocomplete from './Autocomplete';

const Searchbar: FC = () => {
  const [input, setInput] = useState('');

  return (
    <div className='pt-8 pb-20 w-full flex justify-between'>
      <div className='flex items-center'>
        <img src={Logo} alt='' />
      </div>

      <div className='relative flex items-center justify-between border-1px border-primary-blue rounded-primary bg-white w-45vw z-20'>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className='outline-none font-Mulish font-light text-2xl placeholder:text-base placeholder:font-Montserrat mx-7 py-5 w-[40vw]'
          placeholder='Название населенного пункта , страны или региона'
          type='text'
        />
        <img className='cursor-pointer px-5 ' src={SearchIcon} alt='' />
        <Autocomplete show={!!input.length} />
      </div>
      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <img className='mr-4' src={HomeIcon} />
        </Link>
        <LanguageButton text='RU' selected />
        <LanguageButton text='UA' />
      </div>

      <div
        className={`${
          input.length ? '' : 'hidden'
        } w-screen h-screen fixed top-0 left-0 bg-search-shadow bg-opacity-50 z-10`}></div>
    </div>
  );
};

export default Searchbar;
