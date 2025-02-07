import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="loader-container">
      <Image src="/loading.svg" alt="loading" width={150} height={150} className="w-32 h-32" priority />
    </div>
  );
};

export default Loading;

