"use client";
import Image from "next/image";
import React from "react";
type ProfileDropdownProps = {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  showDropdown: boolean;
  title: string;
};
const ProfileDropdown = ({
  setShowDropdown,
  showDropdown,
  title,
}: ProfileDropdownProps) => {

  return (
    <div
      className="flex flex-row items-center justify-between w-full p-[1%] transition"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <p className="font-semibold cursor-pointer">{title}</p>
      <span>
        <Image
          src="/userpanel/dropdownarrow.svg"
          alt="dropdown-arrow"
          width={13}
          height={13}
          className="cursor-pointer"
        />
      </span>
    </div>
  );
};

export default ProfileDropdown;
