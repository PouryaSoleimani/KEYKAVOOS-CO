import React from "react";
type PanelFieldsProps = { label: string; value: string | undefined; onChange?: React.ChangeEventHandler<HTMLInputElement>; disable?: boolean; name?: string; readonly?: boolean; flexDirection?: string; placeholder: string };

function PanelFields({ label, onChange, value, disable, name, readonly, flexDirection, placeholder }: PanelFieldsProps) {
  // ^ RETURN
  return (
    <div className={`flex py-3 ${flexDirection ? `${flexDirection} items-center` : "flex-col"}  gap-2`}>
      <label htmlFor="" className="tracking-tighter ">{label}</label>
      <input className={`${disable ? "bg-[#EAEFF6] text-zinc-800/60 px-3" : "bg-[#EAEFF6] px-2"} translate-x-3 px-2 w-full text-zinc-600 text-lg font-extralight tracking-tighter outline-none border-none py-2 rounded-[4px] mx-2`}
        onChange={onChange}
        value={value}
        disabled={disable}
        name={name}
        readOnly={readonly}
        placeholder={placeholder}
      />
    </div>
  );
}

export default PanelFields;
