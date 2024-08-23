"use client";
import React, { useState } from "react";
import NewPlacard from "./new-placard";

function AddNewTicket() {
  const [steps, setSteps] = useState(0);
  const renderSteps = () => {
    switch (steps) {
      case 0:
        return <NewPlacard setSteps={setSteps} />;
      default:
        break;
    }
  };
  return (
    <div className="bg-white shadow mx-auto rounded-2xl py-[3%] px-[3%] w-full">
      {renderSteps()}
    </div>
  );
}

export default AddNewTicket;
