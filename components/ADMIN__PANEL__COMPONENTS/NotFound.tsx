import React from "react";

type NotFoundProps = { text: string; };


function NotFound({ text }: NotFoundProps) {
  return (
    <p className="text-center bg-red-100 tracking-tight leading-10 text-lg text-red-700 p-3 mt-8 rounded-md">
      {text}
    </p>
  );
}

export default NotFound;
