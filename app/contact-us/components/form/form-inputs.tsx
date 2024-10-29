import React from "react";
type FormInputsProps = { label?: string; placeholder?: string; type?: string; pattern?: string; name?: string; error?: any; onChange?: any; disabled?: boolean; value: string; onBlur?: any; autoFocus?: boolean; };
const FormInput = ({ label, placeholder, type, onChange, value, pattern, name, error, disabled, onBlur, autoFocus, }: FormInputsProps) => {

  const setLength = () => {
    if (type === "tel") { return 11; } else { return 100; }
  };
  let length = setLength();
  return (
    <div className="relative">
      <label className={`absolute -top-3 right-4 z-10 lg:text-[14px] lg:px-2 px-2 ${disabled ? "bg-transparent" : "bg-white"} ${error === "" || !error ? " text-black" : "text-[#4866CF]"}`}>
        {label}
      </label>
      <input
        className={`${error === "" || !error ? "text-black border border-zinc-400/80" : "border border-[#4866CF] text-[#4866CF]"} ${disabled ? "text-center bg-[#D0DBEC] border-[#D0DBEC]" : ""} mx-auto outline-none rounded-md px-2 py-2 text-lg w-full border-[1.5px]`}
        placeholder={placeholder}
        type={`${type === "password" ? "password" : "text"}`}
        dir={`${type === "tel" ? "rtl" : "rtl"}`}
        onChange={onChange}
        maxLength={length}
        value={value}
        required
        autoComplete="off"
        pattern={pattern}
        name={name}
        disabled={disabled}
        onBlur={onBlur}
        style={{ direction: `${!disabled && type !== "text" ? "ltr" : "rtl"}` }}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default FormInput;
