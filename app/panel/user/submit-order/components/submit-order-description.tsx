import React from "react";
type SubmitOrderDescriptionProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
function SubmitOrderDescription({
  value,
  onChange,
}: SubmitOrderDescriptionProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <label>توضیحات پروژه:</label>
        <textarea
          className="p-[2%] bg-[#EAEFF6] rounded-[4px]"
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
}

export default SubmitOrderDescription;
