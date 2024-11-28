import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const dropDownList = [
  {
    id: 1,
    value: "Country",
  },
  {
    id: 2,
    value: "United Kingdom",
  },
  {
    id: 3,
    value: "United States",
  },
  {
    id: 4,
    value: "Canada",
  },
];

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(dropDownList[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="px-[15px] py-3 rounded-[6px] bg-gradient-to-b from-[#0a2023] to-slate-50/10 relative cursor-pointer w-full border border-[#E2E8FF]/10">
      <div className="flex justify-between items-center">
        <h3 className="text-[15px] leading-[17px] font-medium text-white/50 select-none">{selectedValue.value}</h3>
        <MdKeyboardArrowDown className={`text-2xl text-white/50  duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
      </div>

      <ul
        className={`flex  flex-col absolute top-[3.5rem] bg-[#1E3237] rounded-[6px] border border-[#E2E8FF]/20 shadow-md z-40 w-full left-0 duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0 "
        }`}
      >
        <h2 className="py-2.5 px-[15px] text-[#E2E8FF]/60 font-semibold border-b  border-[#E2E8FF]/20 cursor-not-allowed  uppercase">Select Country</h2>
        {dropDownList.slice(1, 5).map((item, index) => (
          <li
            onClick={() => setSelectedValue(item)}
            key={item.id}
            className={`py-3 px-[15px] text-[#E2E8FF]/60 hover:text-[#E2E8FF] cursor-pointer ease-in-out duration-300 font-medium hover:bg-gradient-to-l from-[#baeb8863] to-[#12d5ce3b] ${
              index !== dropDownList.length - 2 ? "border-b  border-[#E2E8FF]/20" : ""
            }`}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
