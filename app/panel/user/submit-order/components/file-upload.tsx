import Image from "next/image";
import React, { ChangeEvent } from "react";
import uploadFile from "../../../../../public/Panel/uploadfile.svg";
// import uploadFile from "../../../../public/Panel/uploadfile.svg";
type FileUploadProps = {
  handleChange: any;
  File: any;
};
function FileUpload({ handleChange, File }: FileUploadProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChange(file);
    }
  };
  return (
    <div>
      <div className="flex flex-row items-center gap-[5%] whitespace-nowrap">
        <label>فایل انتخابی:</label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          style={{ cursor: "pointer" }}
          className="bg-[#EDF0FB] rounded-lg flex flex-col items-center px-2 py-2"
        >
          {File ? File.name : <Image src={uploadFile} alt="انتخاب فایل" />}
        </label>
      </div>
    </div>
  );
}

export default FileUpload;
