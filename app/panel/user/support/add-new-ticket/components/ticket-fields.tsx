import React from "react";
type TicketFieldsProps = {
  label: string;
  width: string;
  value: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
function TicketFields({ label, width, value, type , onChange }: TicketFieldsProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="whitespace-nowrap">{label}</label>
      <input
        className={`bg-[#EAEFF6] rounded-[4px] p-2 lg:${width} w-full`}
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
      />
    </div>
  );
}

export default TicketFields;
