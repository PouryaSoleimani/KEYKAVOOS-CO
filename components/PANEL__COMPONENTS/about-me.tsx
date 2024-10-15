"use client";
import React, { useEffect, useState } from "react";
import ProfileDropdown from "./profile-dropdown";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProfileButton from "./profile-button";
import AboutMeTextArea from "./about-me-textarea";
import AboutMeSkills from "./about-me-skills";
import AboutMeEducation from "./about-me-education";
import AboutMeWorkExperience from "./about-me-workexperience";
import { useSearchParams } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import {
  fetchUserProfile,
  updateUserProfile,
} from "@/redux/features/user/userSlice";

const AboutMe = () => {
  const { localToken, userProfile } = useSelector(
    (state: any) => state.userRole
  );
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [skillsData, setSkillsData] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const searchParams = useSearchParams();
  const showModal = searchParams.get("showModal");
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    dispatch<any>(fetchUserProfile());
  }, []);

  const parseJSON = (jsonString: any) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return {};
    }
  };
  const [AboutMe, setAboutMe] = useState({
    About_Me: userProfile.About_Me || "",
    skills: userProfile.Skills || "",
    education: userProfile.education ? parseJSON(userProfile.education) : {},
    Work_experience: userProfile.Work_experience
      ? parseJSON(userProfile.Work_experience)
      : {},
  });

  useEffect(() => {
    if (userProfile && Object.keys(userProfile).length) {
      setAboutMe({
        About_Me: userProfile.About_Me,
        skills: userProfile.Skills,
        education: userProfile.education,
        Work_experience: userProfile.Work_experience,
      });
    }
  }, [userProfile]);

  const updateAboutMe = async (
    About_Me: string,
    Skills: never[] | string,
    education: string,
    Work_experience: string
  ) => {
    try {
      const { data } = await axios.put(
        "https://keykavoos.liara.run/User/UpdateProfile_AboutMe",
        {
          About_Me,
          Skills,
          education,
          Work_experience,
        },
        {
          headers: {
            authorization: `Bearer ${localToken}`,
          },
        }
      );
      dispatch(
        updateUserProfile({ ...userProfile, About_Me, Skills, education })
      );
      toast.success("اطلاعات با موفقیت ثبت شد.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        rtl: true,
      });
      console.log(data);
    } catch (error: any) {
      toast.error("ثبت اطلاعات ناموفق بود.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
      console.log(error);
    }
  };

  const skillsApi = async () => {
    try {
      const { data } = await axios.get(
        `https://api.apilayer.com/skills?q=${skillInput}`,
        {
          headers: {
            apikey: "cnoGxAZ5YeoB8zKTkbSwihm1FufcUMB9",
          },
        }
      );
      setSkillsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (skillInput !== "") {
        skillsApi();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [skillInput]);

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !showModal &&
      (await updateAboutMe(
        AboutMe.About_Me,
        String(AboutMe.skills),
        JSON.stringify(AboutMe.education),
        JSON.stringify(AboutMe.Work_experience)
      ));
  };
  return (
    <div className="bg-white flex flex-col rounded-3xl">
      <ProfileDropdown
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        title="درباره من"
      />

      {!showDropdown ? (
        ""
      ) : (
        <div>
          <form
            className="grid grid-cols-1 w-full px-[3%] py-[3%] gap-4"
            onSubmit={(e) => handleSubmission(e)}
          >
            <AboutMeTextArea
              value={AboutMe.About_Me}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setAboutMe((last) => ({ ...last, About_Me: e.target.value }))
              }
            />
            <AboutMeSkills
              value={skillInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSkillInput(e.target.value)
              }
              skillsData={skillsData}
              selectedSkill={selectedSkill}
              setSelectedSkill={setSelectedSkill}
              setSkillsData={setSkillsData}
              showModal={showModal}
              setAboutMe={setAboutMe}
              AboutMeSkills={AboutMe.skills}
              userProfileSkill={userProfile.Skills}
            />
            <AboutMeEducation {...AboutMe.education} setAboutMe={setAboutMe} />
            <AboutMeWorkExperience
              {...AboutMe.Work_experience}
              setAboutMe={setAboutMe}
            />
            <ProfileButton
              setShowDropdown={setShowDropdown}
              disable={!AboutMe.skills && true}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
