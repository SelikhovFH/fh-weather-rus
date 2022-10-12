import React from 'react';
import plusIcon from '../img/service-icons/plus.svg';

const AddNewCard = () => {
  return (
    <div className='cursor-pointer font-Mulish text-white w-full bg-cover rounded-primary px-6 flex flex-col justify-center border-1px border-dashed border-primary-blue'>
      <img className='h-10' src={plusIcon} alt='add' />
      <div className='mt-12 text-center font-light text-2xl text-light-gray'>
        Добавить место
      </div>
    </div>
  );
};

export default AddNewCard;
