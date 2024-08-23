import React from "react";

type FormValidationMsgProps = {
  errorMsg: string;
};
function FormValidationMsg({ errorMsg }: FormValidationMsgProps) {
  return (
    <div
      className={`text-white bg-[#4866CF] rounded-[4px] border-none outline-none text-[10px] absolute w-full p-[.25rem] z-30`}
    >
      {errorMsg !== "undefined" ? errorMsg : ""}
    </div>
  );
}

export default FormValidationMsg;
