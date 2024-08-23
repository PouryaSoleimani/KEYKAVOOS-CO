import Image from "next/image";
import React from "react";
type SubmitOrderDropdownProps = {
  dropDownTitle: string;
  dropdownItems: string[];
  value: string;
  onChange: any;
  name?: string;
};
function SubmitOrderDropdown({
  dropDownTitle,
  dropdownItems,
  value,
  onChange,
  name,
}: SubmitOrderDropdownProps) {
  return (
    <div
      className={`flex ${
        dropDownTitle ? "flex-col gap-3" : "flex-row"
      } relative`}
    >
      <p>{dropDownTitle}</p>
      <select
        name={name ? name : dropDownTitle}
        id={value}
        className={`bg-[#EAEFF6] h-full rounded-[4px] p-2 ${
          !dropDownTitle && "w-full"
        }`}
        value={`${value}`}
        onChange={onChange}
        
      >
        {dropdownItems?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SubmitOrderDropdown;
