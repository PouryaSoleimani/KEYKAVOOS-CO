import Image from "next/image";
import React from "react";
type ProfileButtonProps = {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  disable?: boolean;
};
const ProfileButton = ({ setShowDropdown, disable }: ProfileButtonProps) => {
  return (
    <div className="grid grid-cols-2 mb-[2%] gap-[3%] items-center px-[5%]">
      <button
        className={`${
          disable ? "bg-indigo-300" : "bg-[#4866CF]"
        }  whitespace-nowrap text-white rounded-lg px-[1%] py-1 flex flex-row items-center justify-center gap-1`}
        type="submit"
        disabled={disable}
      >
        <Image src="/userpanel/note.svg" alt="note" width={10} height={10} />
        <span>ویرایش</span>
      </button>
      <button
        className="bg-[#FF2D2D] whitespace-nowrap text-white rounded-lg px-[2%] py-1"
        onClick={() => setShowDropdown(false)}
      >
        انصراف
      </button>
    </div>
  );
};

export default ProfileButton;
