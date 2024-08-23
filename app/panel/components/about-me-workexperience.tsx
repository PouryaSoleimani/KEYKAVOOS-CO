import React from "react";
import AboutMeInputs from "./about-me-education-inputs";
type AboutMeWorkExperienceProps = {
  setAboutMe: any;
  company: string;
  position: string;
  province: string;
  start: string;
  end: string;
};
const AboutMeWorkExperience = ({
  setAboutMe,
  company,
  position,
  province,
  start,
  end,
}: AboutMeWorkExperienceProps) => {
  return (
    <div>
      <div className="flex flex-row gap-[3%]">
        <label className="whitespace-nowrap">تجربه کاری:</label>
        <div className="grid grid-cols-3 w-full gap-5">
          <AboutMeInputs
            value={company}
            onChange={(e) =>
              setAboutMe((last: any) => ({
                ...last,
                Work_experience: { ...last, company: e.target.value },
              }))
            }
            placeholder="شرکت"
          />
          <AboutMeInputs
            value={position}
            onChange={(e) =>
              setAboutMe((last: any) => ({
                ...last,
                Work_experience: { ...last, position: e.target.value },
              }))
            }
            placeholder="سمت"
          />
          <AboutMeInputs
            value={province}
            onChange={(e) =>
              setAboutMe((last: any) => ({
                ...last,
                Work_experience: { ...last, province: e.target.value },
              }))
            }
            placeholder="استان"
          />
          <AboutMeInputs
            value={start}
            onChange={(e) =>
              setAboutMe((last: any) => ({
                ...last,
                Work_experience: { ...last, start: e.target.value },
              }))
            }
            placeholder="شروع"
          />
          <AboutMeInputs
            value={end}
            onChange={(e) =>
              setAboutMe((last: any) => ({
                ...last,
                Work_experience: { ...last, end: e.target.value },
              }))
            }
            placeholder="پایان"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeWorkExperience;
