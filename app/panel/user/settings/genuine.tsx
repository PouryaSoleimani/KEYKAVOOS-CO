"use client";
import React, { ChangeEvent, useState } from "react";
import PanelFields from "../../components/panel-fileds";
import axios from "axios";
import { useFormik } from "formik";
import SettingsFileupload from "./components/settings-fileupload";
import { Bounce, toast } from "react-toastify";
import app from "@/services/service";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "@/redux/features/user/userSlice";

const initialValues = {
  FirstName: "",
  LastName: "",
  email: "",
  mobile: "",
};
type GenuineProps = {
  PhoneNumber: string;
  userId: string;
  token: string;
};
function Genuine({ userId, token }: GenuineProps) {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const handleFileChange = (file: File) => {
    setSelectedFile(file);
  };
  const { userProfile } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  const handleAvatar = async () => {
    const formData = new FormData();
    formData.append("pic", selectedFile);
    try {
      const { data } = await app.post(
        `/upload/profile_pic/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("success avatr" , data);
      // check
      dispatch(
        updateUserProfile({
          ...userProfile,
          pic_path: data.data.pic_path,
        })
      );
      toast.success("آپلود فایل موفق بود.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
    } catch (error) {
      toast.error("خطا در آپلود فایل، لطفا مجدد آپلود کنید.", {
        position: "top-right",
        autoClose: 3000,
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

  const GenuineSubmission = async (
    name: string,
    surname: string,
    email: string,
    mobile: string
  ) => {
    try {
      const { data } = await app.put(`/user/update/${userId}`, {
        name,
        surname,
        email,
        mobile,
      });
      dispatch(
        updateUserProfile({
          ...userProfile,
          name,
          surname,
          email,
          mobile,
        })
      );
      toast.success("آپدیت پروفایل موفق بود.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        rtl: true,
      });
      console.log(data);
    } catch (error) {
      toast.error("خطا در آپلود فایل.", {
        position: "top-right",
        autoClose: 3000,
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
  const handleSubmission = async () => {
    Promise.all([
      await GenuineSubmission(
        values.FirstName,
        values.LastName,
        values.email,
        values.mobile
      ),
      await handleAvatar(),
    ]);
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: handleSubmission,
  });

  return (
    <form className="flex flex-col lg:gap-2 items-center lg:items-end gap-12" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5%]">
        <div className="flex flex-col justify-between gap-3">
          <PanelFields
            label="نام:"
            onChange={handleChange}
            value={values.FirstName}
            name="FirstName"
          />
          <PanelFields
            label="نام خانوادگی:"
            onChange={handleChange}
            value={values.LastName}
            name="LastName"
          />
          <PanelFields
            label="ایمیل:"
            onChange={handleChange}
            value={values.email}
            name="email"
          />
        </div>
        <div className="flex flex-col gap-20">
          <SettingsFileupload
            handleChange={handleFileChange}
            selectedFile={selectedFile}
            label="عکس کاربری:"
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          className="bg-[#4866CF] text-white px-3 py-1 rounded-lg"
          type="submit"
        >
          تایید ویرایش
        </button>
      </div>
    </form>
  );
}

export default Genuine;
