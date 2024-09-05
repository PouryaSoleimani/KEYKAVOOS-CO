"use client";
import React, { ChangeEvent, useState } from "react";
import PanelFields from "../../components/panel-fileds";
import axios from "axios";
import { useFormik } from "formik";
import SettingsFileupload from "./components/settings-fileupload";
// import { Bounce, toast } from "react-toastify";
import app from "@/services/service";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "@/redux/features/user/userSlice";
import toast, { Toaster } from 'react-hot-toast';

const initialValues = { FirstName: "", LastName: "", email: "", mobile: "", };
type GenuineProps = { PhoneNumber: string; userId: string; token: string; };

//^ COMPONENT ==========================================================================================================================================
function Genuine({ userId, token }: GenuineProps) {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const handleFileChange = (file: File) => { setSelectedFile(file); };
  const { userProfile } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  //* NOTIFICATIONS
  const notifySuccess = () => toast.success("آپلود فایل موفقیت آمیز بود", { style: { border: '2px solid #4866CF', padding: '7px', color: '#303030', fontSize: "14px", fontWeight: "400" }, })
  const notifyError = () => toast.error("خطا در آپلود فایل، لطفا مجددا آپلود کنید", { style: { border: '2px solid #4866CF', padding: '7px', color: '#303030', fontSize: "14px", fontWeight: "400" }, })

  const handleAvatar = async () => {
    const formData = new FormData();
    formData.append("pic", selectedFile);
    try {
      const { data } = await app.post(`/upload/profile_pic/${userId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}`, }, }
      );
      console.log("%c AVATAR UPLOAD SUCCESS", "color : limegreen", data);
      // check
      dispatch(updateUserProfile({ ...userProfile, pic_path: data.data.pic_path, }));
      notifySuccess()
      setSelectedFile({ name: "آپلود فایل" })
      location.reload()
    } catch (error) {
      notifyError()
      console.log(error);
    }
  };

  const GenuineSubmission = async (name: string, surname: string, email: string, mobile: string) => {
    try {
      const { data } = await app.put(`/user/update/${userId}`, { name, surname, email, mobile, });
      dispatch(updateUserProfile({ ...userProfile, name, surname, email, mobile, }));
      notifySuccess()
      console.log(data);
    } catch (error) {
      notifyError()
      console.log(error);
    }
  };
  const handleSubmission = async () => {
    Promise.all([await GenuineSubmission(values.FirstName, values.LastName, values.email, values.mobile), await handleAvatar(),]);
  };

  const { values, handleChange, handleSubmit } = useFormik({ initialValues, onSubmit: handleSubmission, });

  return (
    <>
      <form className="flex flex-col lg:gap-2 items-center lg:items-end gap-12" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5%]">
          <div className="flex flex-col justify-between gap-2 px-2">
            <PanelFields label="نام : " onChange={handleChange} value={values.FirstName} name="FirstName" placeholder={userProfile?.name} />
            <PanelFields label="نام خانوادگی : " onChange={handleChange} value={values.LastName} name="LastName" placeholder={userProfile?.surname} />
            <PanelFields label="ایمیل : " onChange={handleChange} value={values.email} name="email" placeholder={userProfile?.email ? userProfile.email : "---"} />
          </div>
          <div className="flex flex-col gap-10">
            <SettingsFileupload handleChange={handleFileChange} selectedFile={selectedFile} label="عکس کاربری:" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end px-2 lg:px-8 mt-2">
          <button className="bg-[#4866CF] text-white w-full lg:w-1/2 py-2 rounded-md hover:bg-blue-800 duration-300 tracking-wide" type="submit"> تایید  ویرایش</button>
        </div>
      </form>
    </>
  );
}

export default Genuine;
