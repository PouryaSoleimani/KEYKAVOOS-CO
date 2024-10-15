"use client";
import React, { useEffect, useState } from "react";
import InfoFields from "./info-fields";
import Image from "next/image";
import ProfileDropdown from "./profile-dropdown";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./profile-button";
import { useFormik } from "formik";
import { UserPanelMoreInfoSchema } from "@/schemas/userpanel-profile-schema";
import { Bounce, toast } from "react-toastify";
import {
  fetchUserProfile,
  updateUserProfile,
} from "@/redux/features/user/userSlice";

const MoreInfo = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { localToken, userProfile } = useSelector(
    (state: any) => state.userRole
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchUserProfile());
  }, []);

  useEffect(() => {
    if (userProfile && Object.keys(userProfile).length) {
      formik.setValues({
        gender: userProfile.gender,
        LinkedIn: userProfile.LinkedIn,
        Instagram: userProfile.Instagram,
        website: userProfile.website,
      });
    }
  }, [userProfile]);

  const initialValues = {
    gender: userProfile.gender || "",
    LinkedIn: userProfile.LinkedIn || "",
    Instagram: userProfile.Instagram || "",
    website: userProfile.website || "",
  };
  const handleSubmission = async () => {
    await AddInfo(
      formik.values.gender,
      formik.values.LinkedIn,
      formik.values.Instagram,
      formik.values.website
    );
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmission,
    validateOnMount: true,
    validationSchema: UserPanelMoreInfoSchema,
  });

  const AddInfo = async (
    gender: string,
    LinkedIn: string,
    Instagram: string,
    website: string
  ) => {
    try {
      const { data } = await axios.put(
        "https://keykavoos.liara.run/User/UpdateProfile_supplementary",
        {
          gender,
          LinkedIn,
          Instagram,
          website,
        },
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      dispatch(
        updateUserProfile({
          ...userProfile,
          gender,
          LinkedIn,
          Instagram,
          website,
        })
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
    } catch (error) {
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
  return (
    <div className="bg-white flex flex-col rounded-3xl">
      <ProfileDropdown
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        title="اطلاعات تکمیلی"
      />

      {!showDropdown ? (
        ""
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 w-full px-[3%] py-[2%] gap-4">
            <div className="grid grid-cols-4 items-center gap-5 4xl:grid-cols-3">
              <label className="whitespace-nowrap col-span-1 4xl:col-span-1 relative">
                جنسیت
                <span className="text-[#4866CF] absolute -top-[50%]">*</span>:
              </label>
              <select
                className="bg-[#EDF0FB] rounded-lg p-[2%] col-span-3 4xl:col-span-2"
                value={formik.values.gender}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  formik.setValues({
                    ...formik.values,
                    gender: e.target.value,
                  })
                }
                name="gender"
              >
                <option value="زن">زن</option>
                <option value="مرد">مرد</option>
              </select>
            </div>
            <InfoFields
              title="لینکدین"
              info={formik.values.LinkedIn}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setValues({
                  ...formik.values,
                  LinkedIn: e.target.value,
                })
              }
              name="LinkedIn"
            />
            <InfoFields
              title="اینستاگرام"
              info={formik.values.Instagram}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setValues({
                  ...formik.values,
                  Instagram: e.target.value,
                })
              }
              name="Instagram"
            />
            <InfoFields
              title="وبسایت"
              info={formik.values.website}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setValues({
                  ...formik.values,
                  website: e.target.value,
                })
              }
              name="website"
            />
          </div>
          <ProfileButton
            setShowDropdown={setShowDropdown}
            disable={!formik.isValid}
          />
        </form>
      )}
    </div>
  );
};

export default MoreInfo;
