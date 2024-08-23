import Image from "next/image";
import React, { ChangeEvent } from "react";
import uploadFile from "../../../../../public/Panel/uploadfile.svg";
import malegender from "../../../../../public/Panel/malegender.svg";
type PersonalInfoFileuploadProps = {
  handleChange: any;
  selectedFile: any;
};
function PersonalInfoFileupload({
  handleChange,
  selectedFile,
}: PersonalInfoFileuploadProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChange(file);
    }
  };
  return (
    <div>
      <div className="flex flex-row gap-[8%]">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center gap-[5%] whitespace-nowrap">
            <label>عکس کاربری:</label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              style={{ cursor: "pointer" }}
              className="bg-[#EDF0FB] rounded-lg p-[2%] flex flex-col items-center w-full"
            >
              <Image src={uploadFile} alt="انتخاب فایل" />
              <span className="text-[#68707A] text-[13px]">
                {selectedFile ? selectedFile.name : "انتخاب فایل"}
              </span>
            </label>
          </div>
          <p className="w-full text-[18px] text-[#858585] font-faNum">
            فقط فایل های jpg, jpeg, png ، حداکثر حجم 2MB حداقل سایز تصویر
            انتخابی باید 200px * 200px باشد.
          </p>
        </div>
        <div>
          <Image src={malegender} alt="عکس انتخاب شده" width={600} />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoFileupload;
