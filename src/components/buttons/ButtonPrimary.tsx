import React, { FC } from "react";
import { ButtonProps } from "../../types/index";

const ButtonPrimary: FC<ButtonProps> = ({ text, selected, disabled, language }) => {
  return (
    <button
      disabled={disabled}
      className={`border-[1px] rounded-primary text-center 
      disabled:bg-[#CFDAE2] disabled:border-[#CFDAE2] disabled:text-[#ADB9C2] disabled:drop-shadow-none
      ${
        !language 
        ? "text-white py-4 px-10 font-Mulish text-[20px] font-bold bg-[#6596b9] border-none"
        : `py-3 px-9 font-Montserrat font-[300] text-xl ml-6 ${
          selected
            ? "text-white bg-[#6596b9] border-[#6596b9]"
            : "text-[#9fbed4] bg-white hover:drop-shadow-button"
        }`
      }`}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
