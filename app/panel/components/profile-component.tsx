"use client";
import { useSelector } from "react-redux";
import PersonalInfo from "./personal-info";
import MoreInfo from "./more-info";
import AboutMe from "./about-me";
import EditPassword from "./edit-password";

const ProfileComponent = () => {
  const { userProfile } = useSelector(
    (store: any) => store.userRole
  );
  return (
    <div className="w-[90%] mx-auto rounded-xl grid grid-cols-1 justify-center gap-[3%] lg:bg-profileBorderbg">
      <div className="w-full rounded-lg grid grid-cols-1 gap-[20%] lg:gap-[8%] lg:py-[5%] lg:px-[3%]">
        <div className="grid grid-cols-1 w-full">
          <div className="flex flex-col gap-4 order-2 lg:order-none overflow-hidden rounded-3xl">
            <PersonalInfo />
            <MoreInfo />
            <AboutMe />
            <EditPassword userProfile={userProfile} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;
