import Image from "next/image";
import React from "react";
import { BiSolidChevronDownSquare } from "react-icons/bi";


type SubmitOrderDropdownProps = { dropDownTitle: string; dropdownItems: string[] | any; value: string; onChange: any; name?: string; };

//^ COMPONENT
function SubmitOrderDropdown({ dropDownTitle, dropdownItems, value, onChange, name, }: SubmitOrderDropdownProps) {
  // ^ RETURN
  return (
    <div className={`flex ${dropDownTitle ? "flex-col gap-1" : "flex-row"} relative`} >
      <p>{dropDownTitle}</p>
      <BiSolidChevronDownSquare className="absolute left-3 top-12 w-5 h-5 text-blue-900 rounded-md" />
      <select name={name ? name : dropDownTitle} id={value} className={`bg-[#EAEFF6] h-full rounded-[5px] text-zinc-700 font-YekanBakh tracking-tighter text-md font-extralight px-3 py-4  ${!dropDownTitle && "w-full font-YekanBakh"}`} value={`${value}`} onChange={onChange}>
        {dropdownItems?.map((item : any) => (
          <option key={item} value={item} className="font-YekanBakh text-zinc-700 font-thin tracking-tight">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SubmitOrderDropdown;
