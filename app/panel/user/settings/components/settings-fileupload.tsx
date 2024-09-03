import Image from "next/image";
import React, { ChangeEvent, useEffect } from "react";
import uploadFile from "../../../../../public/Panel/uploadfile.svg";
import { MdOutlineFileUpload } from "react-icons/md";
import USER__DEFAULT from '@/public/USER__DEFAULT.png'
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, getIdFromLocal, getTokenFromLocal } from "@/redux/features/user/userSlice";
import axios from "axios";
import store from "@/redux/store";
type SettingsFileuploadProps = { handleChange: any; selectedFile: any; label: string; };


//^ COMPONENT 
function SettingsFileupload({ handleChange, selectedFile, label, }: SettingsFileuploadProps) {
  const dispatch = useDispatch();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) { handleChange(file); }
  };

  useEffect(() => {
    dispatch(getTokenFromLocal());
    dispatch<any>(fetchUserProfile());
    dispatch(getIdFromLocal());
  }, []);

  const { token, userProfile, status, numberOfAnnouncements, role, userId } = useSelector((store: any) => store.userData);
  console.log(userProfile?.pic_path);
  const USER_PROFILE_PIC = userProfile.pic_path
  //^ RETURN 
  return (
    <div className="flex flex-col lg:flex-row space-y-5 lg:gap-x-6 items-center justify-center w-full p-0">

      <div className="flex flex-col pt-6 justify-start gap-y-4 h-inherit w-full lg:w-1/2">
        <div className="flex flex-row items-center gap-2 whitespace-nowrap">
          <label>{label}</label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleFileChange} />
          <label htmlFor="fileInput" style={{ cursor: "pointer" }} className="rounded-md px-3 w-[120px] py-2 bg-[#4866CF] hover:bg-blue-800 duration-300 flex flex-row-reverse justify-between space-x-4 items-center" >
            <MdOutlineFileUpload className="w-6 h-6 text-white" />
            <span className="text-white text-[13px] tracking-tighter hover:text-white flex items-center justify-center">
              {selectedFile ? selectedFile.name.slice(0, 6) : "انتخاب فایل"}
            </span>
          </label>
        </div>
        <p className="text-justify w-full py-2 tracking-tighter leading-7 text-[#858585] font-faNum ">
          فقط فایل های jpg / jpeg / png  حداکثر حجم 2MB حداقل سایز تصویر
          انتخابی باید(200px*200px) باشد.
        </p>
      </div>
      {USER_PROFILE_PIC ? (
        <div className="flex justify-center items-center w-full lg:w-1/2 p-8 lg:p-2 h-full">
          <Image src={selectedFile && selectedFile.type.startsWith("/image/") ? URL.createObjectURL(selectedFile) : USER__DEFAULT} alt="" width={500} height={200} className="rounded-full lg:translate-x-4" />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full lg:w-1/2 p-8 lg:p-2 h-full">
          <Image src={USER__DEFAULT} alt="عکس انتخاب شده" width={500} height={200} className="rounded-full lg:translate-x-4" />
        </div>
      )}
    </div>
  );
}

export default SettingsFileupload;

// src={selectedFile && selectedFile.type.startsWith("/image/") ? URL.createObjectURL(selectedFile) : USER__DEFAULT}

// users/1/profile_pic/1_917598_IMG_20230103_191248.jpg