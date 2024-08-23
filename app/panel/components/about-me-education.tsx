import React from "react";
import AboutMeInputs from "./about-me-education-inputs";
import AboutMeEducationDropdown from "./about-me-education-dropsown";
type AboutMeEducationProps = {
  setAboutMe: any;
  university: string;
  major: string;
  degree: string;
  free: string;
  student: string;
  resigned: string;
};

const AboutMeEducation = ({
  university,
  major,
  degree,
  free,
  setAboutMe,
}: AboutMeEducationProps) => {
  
  const handleFreeSelection = (selectedValue: string) => {
    setAboutMe((last: any) => ({
      ...last,
      education: { ...last.education, free: selectedValue },
    }));
  };
  return (
    <div className="flex flex-row gap-[4%]">
      <label className="whitespace-nowrap">تحصیلات:</label>
      <div className="grid grid-cols-3 w-full gap-5">
        <AboutMeInputs
          value={university}
          onChange={(e) =>
            setAboutMe((last: any) => ({
              ...last,
              education: { ...last, university: e.target.value },
            }))
          }
          placeholder="دانشگاه"
        />
        <AboutMeInputs
          value={major}
          onChange={(e) =>
            setAboutMe((last: any) => ({
              ...last,
              education: { ...last, major: e.target.value },
            }))
          }
          placeholder="رشته"
        />
        <AboutMeInputs
          value={degree}
          onChange={(e) =>
            setAboutMe((last: any) => ({
              ...last,
              education: { ...last, degree: e.target.value },
            }))
          }
          placeholder="مقطع"
        />
        <AboutMeEducationDropdown
          selectText="فارغ التحصیل"
          dropDownOptions={["بله", "خیر", "انصرافی"]}
          value={free}
          handleFreeSelection={handleFreeSelection}
        />
      </div>
    </div>
  );
};

export default AboutMeEducation;
