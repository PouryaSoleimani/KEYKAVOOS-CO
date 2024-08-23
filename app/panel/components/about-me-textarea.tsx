import React from "react";

type AboutMeTextAreaProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};
const AboutMeTextArea = ({ value, onChange }: AboutMeTextAreaProps) => {
  return (
    <div className="relative h-full flex flex-row">
      <label className=" lg:px-4 px-2 whitespace-nowrap">درباره من:</label>
      <textarea
        className="border-2 rounded-lg px-2 py-4 w-full h-full bg-[#EDF0FB]"
        value={value}
        onChange={onChange}
        rows={5}
      ></textarea>
    </div>
  );
};

export default AboutMeTextArea;
