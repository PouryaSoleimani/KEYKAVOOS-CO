import React from "react";
type FinanceInputProps = {
  label: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  setToBlue?: boolean;
  disable?: boolean;
};
function FinanceInput({
  label,
  value,
  onChange,
  setToBlue,
  disable,
}: FinanceInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        className={`p-2 outline-none rounded-[4px] ${
          setToBlue ? "bg-[#4866CE] text-white" : "bg-[#EAEFF6]"
        }`}
        value={value}
        onChange={onChange}
        disabled={disable}
        readOnly={disable === true || !onChange ? true : false}
      />
    </div>
  );
}

export default FinanceInput;
