"use client";
import React, { useEffect, useState } from "react";
import PersonalInfoHeader from "./components/personal-info-header";
import { useDispatch, useSelector } from "react-redux";
import Genuine from "./genuine";
import Legal from "./legal";
import {
  fetchUserProfile,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import NotFound from "../../admin/components/NotFound";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

type OrganizationType = {
  name: string;
  shenase_melli: string;
  registration_number: string;
};
function PersonalInfo() {
  const { token, type, userProfile, status } = useSelector(
    (state: any) => state.userData
  );
  const dispatch = useDispatch();
  const [step, setStep] = useState(type);

  const LegalUserOrgName = userProfile.organizations?.map(
    (item: OrganizationType) => item.name
  );
  const LegalUserShenaseMellli = userProfile.organizations?.map(
    (item: OrganizationType) => item.shenase_melli
  );
  const LegalUserOrgReg = userProfile.organizations?.map(
    (item: OrganizationType) => item.registration_number
  );

  useEffect(() => {
    setStep(type);
  }, [type]);
  
  // وقتی یوزر بره ستینگر تغییر بده برگرده دوباره میگیره دیتارو
  useEffect(() => {
    dispatch(getTokenFromLocal());
    dispatch<any>(fetchUserProfile());
  }, []);

  const renderSteps = () => {
    switch (step) {
      case "haghighi":
        return <Genuine userProfile={userProfile} />;
      case "hoghooghi":
        return (
          <Legal
            PhoneNumber={userProfile.mobile}
            token={token}
            name_of_Organization={LegalUserOrgName}
            shenase_melli={LegalUserShenaseMellli}
            registration_Number={LegalUserOrgReg}
            path={userProfile.pic_path}
          />
        );
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div className="py-[5%] w-[90%] shadow mx-auto bg-white rounded-2xl px-[3%]">
        <div className="pb-[5%] pt-0 lg:block hidden">
          <PersonalInfoHeader
            step={step}
            color="#EAEFF6"
          />
        </div>
        {status === "loading" || status === "idle" ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-3" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : status === "failed" ? (
          <NotFound text="خطا در دریافت اطلاعات" />
        ) : (
          status === "success" && renderSteps()
        )}
      </div>
    </React.Fragment>
  );
}

export default PersonalInfo;
