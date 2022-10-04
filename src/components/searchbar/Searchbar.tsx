import React from "react";
import ButtonLanguage from "./ButtonLanguage";
import Logo from "../img/searchbar-logo.png";
import SearchIcon from "../img/service-icons/search.svg";

const Searchbar = () => {
  return (
    <div className='pt-8 pb-20 w-full flex justify-between'>
      <div className='flex items-center'>
        <img src={Logo} alt='' />
      </div>
      <div className='relative flex items-center justify-between border-[1px] border-[#6596b9] rounded-primary bg-white '>
        <input
          className='outline-none font-Mulish font-[300] text-2xl placeholder:text-base placeholder:font-Montserrat mx-7 py-5 w-[40vw]'
          placeholder='Название населенного пункта , страны или региона'
          type='text'
        />
        <img className='cursor-pointer px-5 ' src={SearchIcon} alt='' />
        <ul className='autocomplete hidden'>
          <li className='autocomplete-item selected'>
            <span>Город, </span> Страна, Регион
          </li>
          <li className='autocomplete-item'>
            <span>Город, </span> Страна, Регион
          </li>
          <li className='autocomplete-item'>
            <span>Город, </span> Страна, Регион
          </li>
        </ul>
      </div>
      <div className='dark-background'></div>
      <div className='flex justify-between items-center'>
        <ButtonLanguage text='RU' selected />
        <ButtonLanguage text='UA' />
        {/* <button className="button-language button-language--selected">RU</button>
      <button className="button-language">UA</button> */}
      </div>
    </div>
  );
};

export default Searchbar;
