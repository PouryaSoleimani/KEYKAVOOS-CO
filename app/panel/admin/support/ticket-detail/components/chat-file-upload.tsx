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
    <div>
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
    </div>
  );
}

export default ChatFileUpload;
