"use client";
import React, { useState } from "react";
import NewPlacardNew from "./new-placard-new";
import BackButton from "../../components/BackButton";

function AddNewTicket() {
  const [steps, setSteps] = useState(0);

  const renderSteps = () => {
    switch (steps) {
      // case 0: return <NewPlacard setSteps={setSteps} />;
      case 0: return <NewPlacardNew />;
      default: break;
    }
  }
  return (
    <>
      <div className="flex items-center justify-end w-full">
        <BackButton />
      </div>
      <div className="bg-white shadow mx-auto rounded-2xl py-[3%] px-[3%] w-full">
        {renderSteps()}
      </div>
    </>
  );
}

export default AddNewTicket;
