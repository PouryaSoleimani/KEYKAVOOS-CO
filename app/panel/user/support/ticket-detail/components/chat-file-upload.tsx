import React, { ChangeEvent } from "react";
import "./chat.module.css"
type FileUploadProps = { handleChange: any; File: any; };
function ChatFileUpload({ handleChange, File }: FileUploadProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChange(file);
    }
  };
  return (
    <div className="flex lg:flex-col flex-row gap-1 ">
      <div id="CHAT_FILE_UPLOAD" className="text-[#4866CE] bg-[#EAEFF6] p-2 rounded-[4px] hover:bg-blue-800 duration-300 hover:text-white">
        <input id="fileInput" type="file" multiple style={{ display: "none" }} onChange={handleFileChange} className="hover:bg-blue-800 duration-200" />
        <label id="fileLabel" htmlFor="fileInput" style={{ cursor: "pointer" }} className="bg-transparent rounded-lg flex flex-col items-center" >
          {File ? File.name : "انتخاب فایل"}
        </label>
      </div>
      <span dir="rtl" className="text-[.8rem] tracking-tight text-[#EDF0FB] flex justify-center" >
        فرمت مورد قبول: zip,rar
      </span>
    </div>
  );
}

export default ChatFileUpload;
