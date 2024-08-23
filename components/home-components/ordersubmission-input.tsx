import React from "react";

type OrdersubmissionInputProps = {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  error: string | undefined | boolean;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
};
function OrdersubmissionInput({
  placeholder,
  onChange,
  value,
  name,
  error,
  onBlur
}: OrdersubmissionInputProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className={`${
          error ? "border-indigo-400" : "border-[#D0DBEC]"
        } outline-none border-2  rounded-[8px] p-3 w-full`}
        dir="rtl"
        onChange={onChange}
        value={value}
        name={name}
        onBlur={onBlur}
      />
    </div>
  );
}

export default OrdersubmissionInput;
