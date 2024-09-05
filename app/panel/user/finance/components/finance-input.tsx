import React from "react";
type FinanceInputProps = { label: string; value?: string | number; onChange?: React.ChangeEventHandler<HTMLInputElement>; setToBlue?: boolean; disable?: boolean; };

function FinanceInput({ label, value, onChange, setToBlue, disable, }: FinanceInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="" className="pr-2 tracking-tight text-zinc-800">{label}</label>
      <input type="text" className={`p-4 outline-none text-xl rounded-[4px] ${setToBlue ? "bg-[#4865ce61] text-blue-950 font-semibold  p-4" : "bg-[#EAEFF6]"} p-4`} value={value} onChange={onChange} disabled={disable} readOnly={disable === true || !onChange ? true : false} />
    </div>
  );
}

export default FinanceInput;
