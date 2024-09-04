import Image from "next/image";
import React from "react";
type SubmitOrderDropdownProps = { dropDownTitle: string; dropdownItems: string[]; value: string; onChange: any; name?: string; };


//* COMPONENT
function SubmitOrderDropdown({ dropDownTitle, dropdownItems, value, onChange, name, }: SubmitOrderDropdownProps) {
  // ^ RETURN
  return (
    <div className={`flex ${dropDownTitle ? "flex-col gap-1" : "flex-row"} relative`} >
      <p>{dropDownTitle}</p>
      <select name={name ? name : dropDownTitle} id={value} className={`bg-[#EAEFF6] h-full rounded-[5px] text-zinc-700 font-YekanBakh tracking-tighter text-md font-extralight px-3 py-4  ${!dropDownTitle && "w-full font-YekanBakh"}`} value={`${value}`} onChange={onChange}>
        {dropdownItems?.map((item) => (
          <option key={item} value={item} className="font-YekanBakh text-zinc-700 font-thin tracking-tight">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SubmitOrderDropdown;
