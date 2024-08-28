import React from "react";

type NotFoundProps = { text: string; };


function NotFound({ text }: NotFoundProps) {
  return (
    <p className="text-center bg-red-200/80  tracking-tight leading-10 text-lg text-red-700  p-2 rounded-md">
      {text}
    </p>
  );
}

export default NotFound;
