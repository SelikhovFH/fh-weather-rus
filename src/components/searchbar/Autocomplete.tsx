import React, { FC } from "react";

const someData = [
  "Paris, someeRegion, France",
  "Kyiv, Kyivska oblast, Ukraine",
  "Tokyo, someRegion, Japan",
];

const Autocomplete: FC = () => {
  return (
    <ul className='py-7 absolute w-full border-[1px] border-[#6596b9] bg-white rounded-primary top-[110%]'>
      {someData.map((item) => (
        <li
          key={item}
          className='font-Mulish font-normal text-2xl py-2.5 px-8 hover:bg-[#9fbed4] hover:text-white cursor-pointer'>
          <span className='font-bold'>ЖирныйШрифт </span> {item}
        </li>
      ))}
    </ul>
  );
};

export default Autocomplete;
