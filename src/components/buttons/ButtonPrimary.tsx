import React, { FC } from "react";
import { ButtonProps } from "../../types/index";

const ButtonPrimary: FC<ButtonProps> = ({ text, disabled }) => {
	return (
		<button
			disabled={disabled}
			className={`border-[1px] rounded-primary text-center hover:drop-shadow-button disabled:bg-[#CFDAE2] disabled:border-[#CFDAE2] disabled:text-[#ADB9C2] disabled:drop-shadow-none text-white py-4 px-10 font-Mulish text-[20px] font-bold bg-[#6596b9] border-none`}>
			{text}
		</button>
	);
};

export default ButtonPrimary;
