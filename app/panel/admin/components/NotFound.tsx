import React from "react";

type NotFoundProps = {
  text: string;
};
function NotFound({ text }: NotFoundProps) {
  return (
    <p className="text-center font-bold text-red-700 bg-[#EAEFF6] p-2 rounded-md">
      {text}
    </p>
  );
}

export default NotFound;
