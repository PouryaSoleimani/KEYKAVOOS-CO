import Image from "next/image";
import React, { ChangeEvent } from "react";
import uploadFile from "../../../../../public/Panel/uploadfile.svg";
import { MdOutlineFileUpload } from "react-icons/md";
import USER__DEFAULT from '@/public/USER__DEFAULT.png'
type SettingsFileuploadProps = { handleChange: any; selectedFile: any; label: string; };


//^ COMPONENT 
function SettingsFileupload({ handleChange, selectedFile, label, }: SettingsFileuploadProps) {

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) { handleChange(file); }
  };

  //^ RETURN 
  return (
    <div>
      <div className="flex lg:flex-row lg:gap-6 flex-col gap-5 items-center justify-center">
        <div className="flex flex-col pt-6 justify-start gap-y-4 h-inherit w-full lg:w-1/2">
          <div className="flex flex-row items-center gap-[4%] whitespace-nowrap">
            <label>{label}</label>
            <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleFileChange} />
            <label htmlFor="fileInput" style={{ cursor: "pointer" }} className="rounded-md px-2 w-[120px] py-2 bg-[#4866CF] hover:bg-blue-800 duration-300 flex flex-row-reverse justify-between space-x-4 items-center" >
              <MdOutlineFileUpload className="w-6 h-6 text-white" />
              <span className="text-white text-[13px] tracking-tighter hover:text-white">
                {selectedFile ? selectedFile.name : "انتخاب فایل"}
              </span>
            </label>
          </div>
          <p className="text-justify w-full py-2 tracking-tight leading-7 text-[#858585] font-faNum break-words whitespace-pre-wrap">
            فقط فایل های jpg / jpeg / png  حداکثر حجم 2MB حداقل سایز تصویر
            انتخابی باید(200px*200px) باشد.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-1/2 p-7 h-full">
          <Image src={selectedFile && selectedFile.type.startsWith("/image/") ? URL.createObjectURL(selectedFile) : USER__DEFAULT} alt="عکس انتخاب شده" width={500} height={200} className="rounded-full lg:translate-x-4" />
        </div>
      </div>
    </div>
  );
}

export default SettingsFileupload;
