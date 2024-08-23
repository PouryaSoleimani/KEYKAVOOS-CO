import React, { ChangeEvent } from "react";
type FileUploadProps = {
  handleChange: any;
  File: any;
};
function ChatFileUpload({ handleChange, File }: FileUploadProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChange(file);
    }
  };
  return (
    <div className="flex lg:flex-col flex-row gap-1">
      <div className="text-[#4866CE] bg-[#EAEFF6] p-2 rounded-[4px]">
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          style={{ cursor: "pointer" }}
          className="bg-[#EDF0FB] rounded-lg flex flex-col items-center"
        >
          {File ? File.name : "انتخاب فایل"}
        </label>
      </div>
      <span
        dir="rtl"
        className="text-[0.5rem] text-[#EDF0FB] flex justify-center"
      >
        فرمت مورد قبول: zip,rar
      </span>
    </div>
  );
}

export default ChatFileUpload;
