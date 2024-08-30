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
      <div className="flex lg:flex-row lg:gap-[8%] flex-col gap-5">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center gap-[5%] whitespace-nowrap">
            <label>{label}</label>
            <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleFileChange} />
            <label htmlFor="fileInput" style={{ cursor: "pointer" }} className="rounded-md px-2 w-[120px] py-2 bg-[#4866CF] hover:bg-blue-800 duration-300 flex flex-row-reverse justify-between space-x-4 items-center" >
              <MdOutlineFileUpload className="w-6 h-6 text-white" />
              <span className="text-white text-[13px] tracking-tighter hover:text-white">
                {selectedFile ? selectedFile.name : "انتخاب فایل"}
              </span>
            </label>
          </div>

          <p className="w-full text-justify text-[16px] tracking-tight leading-9 text-[#858585] font-faNum">
            فقط فایل های jpg, jpeg, png ، حداکثر حجم 2MB حداقل سایز تصویر
            انتخابی باید( 200px  * 200px ) باشد.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={selectedFile && selectedFile.type.startsWith("image/") ? URL.createObjectURL(selectedFile) : USER__DEFAULT} alt="عکس انتخاب شده" width={600} height={200} />
        </div>
      </div>
    </div>
  );
}

export default SettingsFileupload;
