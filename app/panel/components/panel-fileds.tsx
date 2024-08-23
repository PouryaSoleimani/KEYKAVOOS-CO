import React from "react";
type PanelFieldsProps = {
  label: string;
  value: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disable?: boolean;
  name?: string;
  readonly?: boolean;
  flexDirection?: string;
};
function PanelFields({
  label,
  onChange,
  value,
  disable,
  name,
  readonly,
  flexDirection
}: PanelFieldsProps) {
  return (
    <div className={`flex ${flexDirection ? `${flexDirection} items-center` : "flex-col"}  gap-3`}>
      <label htmlFor="">{label}</label>
      <input
        className={`${
          disable ? "bg-[#EAEFF6] text-slate-500 px-3" : "bg-[#EAEFF6] px-2"
        } outline-none border-none py-2 rounded-[4px]`}
        onChange={onChange}
        value={value}
        disabled={disable}
        name={name}
        readOnly={readonly}
      />
    </div>
  );
}

export default PanelFields;
