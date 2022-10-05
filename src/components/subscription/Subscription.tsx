import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const Subscription = () => {
  return (
    <div className='flex flex-col items-center mb-20'>
      <div className='text-[#6596b9] font-Mulish text-[40px] leading-[50px] mb-14'>Подписывайтесь на нашу новостную рассылку</div>
      <div className='flex justify-between border-[1px] border-[#6596b9] rounded-primary w-[780px]'>
        <input className="outline-none font-Mulish text-base my-5 mx-9 w-[450px]" placeholder='E-mail' type='text' />
        <ButtonPrimary text="Подписаться"/>
      </div>
    </div>
  );
};

export default Subscription;
