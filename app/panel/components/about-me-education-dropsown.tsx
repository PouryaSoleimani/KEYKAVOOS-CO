"use client";
import Image from "next/image";
import React, { useState } from "react";
type AboutMeEducationDropdownProps = {
  selectText: string;
  dropDownOptions?: string[];
  value: string;
  handleFreeSelection: (selectedValue: string) => void;
};
const AboutMeEducationDropdown = ({
  selectText,
  dropDownOptions,
  value,
  handleFreeSelection,
}: AboutMeEducationDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="relative bg-[#EDF0FB] rounded-lg p-[2%] w-full">
      <div>
        <div className="flex justify-between items-center gap-[1%] py-[1%]">
          <span className="text-gray-400">{selectText}</span>
          <Image
            width={12}
            height={12}
            src="/employerpanel/right-arrow.svg"
            alt="arrow"
            className="-rotate-90 gap-[2%] cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
        </div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-[3%] bg-white rounded-lg w-full"
        onMouseLeave={() => setShowDropdown(false)}
      >
        {showDropdown && (
          <ul>
            {dropDownOptions?.map((item, index) => (
              <li
                key={index}
                value={value}
                onClick={() => handleFreeSelection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AboutMeEducationDropdown;
