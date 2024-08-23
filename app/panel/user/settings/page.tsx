"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Genuine from "./genuine";
import Legal from "./legal";
import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
  readPhoneNumberFromLocalStroage,
} from "@/redux/features/user/userSlice";
import SettingsHeader from "./components/settings-header";

function PersonalInfo() {
  const { PhoneNumber, token, userId, userProfile, type } = useSelector(
    (state: any) => state.userData
  );
  const dispatch = useDispatch();
  const [step, setStep] = useState(type);

  useEffect(() => {
    setStep(type);
  }, [type]);

  const renderSteps = () => {
    switch (step) {
      case "haghighi":
        return (
          <Genuine PhoneNumber={PhoneNumber} userId={userId} token={token} />
        );
      case "hoghooghi":
        return <Legal />;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div className="py-[5%] w-[90%] shadow mx-auto bg-white rounded-2xl px-[3%]">
        <div className="pb-[5%] pt-0 lg:block hidden">
          <SettingsHeader step={step} setStep={setStep} />
        </div>
        {renderSteps()}
      </div>
    </React.Fragment>
  );
}

export default PersonalInfo;
