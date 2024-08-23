import React from "react";
type TicketFieldsProps = {
  label: string;
  width: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  direction?: string;
};
function TicketFields({ label, width, value, onChange , direction }: TicketFieldsProps) {
  return (
    <div className={`flex ${direction ? direction : "flex-col"} gap-2`}>
      <label htmlFor="">{label}</label>
      <input
        className="bg-[#EAEFF6] rounded-[4px] p-2"
        style={{ width }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TicketFields;
