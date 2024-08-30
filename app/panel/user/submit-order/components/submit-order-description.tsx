import React from "react";
type SubmitOrderDescriptionProps = { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; };

//^ COMPONENT
function SubmitOrderDescription({ value, onChange, }: SubmitOrderDescriptionProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <label>توضیحات پروژه:</label>
        <textarea className="p-2 font-extralight text-zinc-700 h-[120px] break-words overflow-y-scroll focus:border focus:border-[#4866CF] bg-[#EAEFF6] rounded-[4px] outline-none" value={value} onChange={onChange} ></textarea>
      </div>
    </div>
  );
}

export default SubmitOrderDescription;
