import React, { FC } from "react";
import { ButtonLanguageProps } from "./../../types/index";

const ButtonLanguage: FC<ButtonLanguageProps> = ({ text, selected }) => {
  return (
    <button
      className={`border-[1px] rounded-primary text-center ml-6 py-3 px-9 font-Mulish font-[300] text-xl
      ${
        selected ? "text-[#9fbed4] bg-white hover:drop-shadow-lang-button" : "text-white bg-[#6596b9] border-[#6596b9]"
      }`}>
      {text}
    </button>
  );
};

export default ButtonLanguage;
