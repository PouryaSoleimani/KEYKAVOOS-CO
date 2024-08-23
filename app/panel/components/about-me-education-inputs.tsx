import React from "react";
type AboutMeEducationProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
};
const AboutMeInputs = ({
  value,
  onChange,
  placeholder,
}: AboutMeEducationProps) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="bg-[#EDF0FB] rounded-lg p-[2%] w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default AboutMeInputs;
