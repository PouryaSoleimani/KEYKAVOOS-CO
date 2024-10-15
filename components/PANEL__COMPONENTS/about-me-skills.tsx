import Link from "next/link";
import React, { useState } from "react";
import ModalStuff from "./modal-stuff";
import { RiDeleteBin6Line } from "react-icons/ri";

type AboutMeSkillsProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  skillsData: never[];
  setSkillsData: React.Dispatch<React.SetStateAction<never[]>>;
  setSelectedSkill: React.Dispatch<React.SetStateAction<never[]>>;
  selectedSkill: never[];
  showModal: string | null;
  setAboutMe: any;
  AboutMeSkills: string;
  userProfileSkill: any;
};
const AboutMeSkills = ({
  value,
  onChange,
  skillsData,
  setSkillsData,
  setSelectedSkill,
  selectedSkill,
  showModal,
  setAboutMe,
  AboutMeSkills,
  userProfileSkill,
}: AboutMeSkillsProps) => {
  const [deleteItem, setDeleteItem] = useState({ delete: false, index: 0 });
  const onClose = async () => {
    console.log("modal closed");
  };
  const onSave = async () => {
    if (userProfileSkill.length > 0) {
      setAboutMe((last: any) => ({
        ...last,
        skills: selectedSkill + userProfileSkill,
      }));
    } else {
      setAboutMe((last: any) => ({
        ...last,
        skills: selectedSkill,
      }));
    }
  };
  return (
    <div>
      <ModalStuff
        onClose={onClose}
        onSave={onSave}
        skillsData={skillsData}
        showModal={showModal}
        setSelectedSkill={setSelectedSkill}
        value={value}
        onChange={onChange}
        setSkillsData={setSkillsData}
        selectedSkill={selectedSkill}
      />

      <div className="flex flex-row gap-[3%]">
        <label className="whitespace-nowrap relative">
          <span className="text-[#4866CF] absolute left-0 -top-[25%]">*</span>
          مهارت ها:
        </label>
        <div className="w-full flex flex-col">
          <div className="flex flex-row bg-[#EDF0FB] items-center justify-between py-[2%] px-[1%] rounded-lg">
            <div className="flex flex-row gap-[3%] w-full">
              {AboutMeSkills}
            </div>
            <Link
              href="/panel/profile?showModal=y"
              className="text-[#4866CF] whitespace-nowrap"
            >
              + افرودن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSkills;
