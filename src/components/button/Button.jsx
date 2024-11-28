/* eslint-disable react/prop-types */
import "./Button.css";
const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#baeb88] to-[#12d5d0] before:bg-gradient-to-r before:from-[#baeb88b9] before:to-[#12d5ce93] px-[26px] lg:px-[32px] py-[8.52px] lg:py-[12px] text-[14px] lg:text-[15px] text-base font-bold ${className} hover:bg-gradient-to-l hover:before:bg-gradient-to-l duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
