import React from "react";

type CostumSelectProps = {
  label: string;
  selectOptions: string[] | number[];
  value: string;
  name: string;
  changeHandler: any;
};
function CostumSelect({
  label,
  selectOptions,
  value,
  name,
  changeHandler,
}: CostumSelectProps) {
  return (
    <div className="flex flex-row items-center gap-5">
      <label className="whitespace-nowrap relative">
        {label}
        {/* <span className="text-[#4866CF] absolute -top-[50%]">*</span>: */}
      </label>

      <select
        className="bg-[#EAEFF6] rounded-lg p-2 w-full"
        value={value}
        onChange={changeHandler}
        name={name}
      >
        {selectOptions.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default CostumSelect;
