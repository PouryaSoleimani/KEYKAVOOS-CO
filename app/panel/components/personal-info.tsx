"use client";
import React, { useEffect, useState } from "react";
import InfoFields from "./info-fields";
import ProfileDropdown from "./profile-dropdown";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./profile-button";
import {
  fetchUserProfile,
  updateUserProfile,
} from "@/redux/features/user/userSlice";
import { useFormik } from "formik";
import { UserPanelPersonalSchema } from "../../../schemas/userpanel-profile-schema";
import { Bounce, toast } from "react-toastify";

const PersonalInfo = () => {
  const { localToken, userProfile } = useSelector(
    (state: any) => state.userRole
  );
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    dispatch<any>(fetchUserProfile());
  }, []);
  useEffect(() => {
    if (userProfile && Object.keys(userProfile).length) {
      formik.setValues({
        FirstName: userProfile.FirstName,
        LastName: userProfile.LastName,
        email: userProfile.email,
        Date_of_birth: userProfile.Date_of_birth,
      });
    }
  }, [userProfile]);

  const initialValues = {
    FirstName: userProfile.FirstName || "",
    LastName: userProfile.LastName || "",
    Date_of_birth: userProfile.Date_of_birth || "",
    email: userProfile.email || "",
  };

  const handleSubmission = async () => {
    await UpdatePersonalInfo(
      formik.values.FirstName,
      formik.values.LastName,
      formik.values.email,
      formik.values.Date_of_birth
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmission,
    validationSchema: UserPanelPersonalSchema,
    validateOnMount: true,
  });

  const UpdatePersonalInfo = async (
    FirstName: string,
    LastName: string,
    email: string,
    Date_of_birth: string
  ) => {
    try {
      const { data } = await axios.put(
        "https://keykavoos.liara.run/User/UpdateProfile_Personal",
        {
          FirstName,
          LastName,
          email,
          Date_of_birth,
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
          FirstName,
          LastName,
          email,
          Date_of_birth,
        })
      );
      if (data.status === 200) {
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
      }
      console.log(data);
    } catch (error: any) {
      if (error.response.data.message == "Duplicate email") {
        setErrorMsg("ایمیل تکراری است.");
        console.log(errorMsg);
      } else {
        setErrorMsg("ثبت اطلاعات ناموفق بود.");
      }
      if (error) {
        toast.error(`${errorMsg}`, {
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
      }
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex flex-col rounded-3xl">
      <ProfileDropdown
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        title="اطلاعات شخصی"
      />
      {!showDropdown ? (
        ""
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 w-full px-[3%] py-[2%] gap-4">
            <InfoFields
              title="نام"
              info={formik.values.FirstName}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setValues({
                  ...formik.values,
                  FirstName: e.target.value,
                })
              }
              name="FirstName"
              onBlur={formik.handleBlur}
              required={true}
              min={3}
            />
            <InfoFields
              title="نام خانوادگی"
              info={formik.values.LastName}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setValues({
                  ...formik.values,
                  LastName: e.target.value,
                })
              }
              name="LastName"
              onBlur={formik.handleBlur}
              required={true}
              min={3}
            />
            <InfoFields
              title="تاریخ تولد"
              info={formik.values.Date_of_birth}
              type="text"
              name="Date_of_birth"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                formik.setValues({
                  ...formik.values,
                  Date_of_birth: e.target.value,
                })
              }
              onBlur={formik.handleBlur}
            />
            <div className="relative">
              <InfoFields
                title="ایمیل"
                info={formik.values.email}
                type="text"
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  formik.setValues({
                    ...formik.values,
                    email: e.target.value,
                  })
                }
                onBlur={formik.handleBlur}
                required={true}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 absolute left-1/2 -translate-x-1/2">
                  {`${formik.errors.email}`}
                </p>
              )}
            </div>
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

export default PersonalInfo;
