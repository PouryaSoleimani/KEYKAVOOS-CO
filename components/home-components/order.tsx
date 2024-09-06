"use client";
import React, { useState } from "react";
import OrderProgress from "./order-progress";
import OrdersubmissionForm from "./ordersubmission-form";

function Order() {
  const [currentStep, setCurrentStep] = useState(0);

  const renderSteps = () => {
    switch (currentStep) {
      case 0:
        return <OrdersubmissionForm setCurrentStep={setCurrentStep} />;
      case 1:
        return <OrdersubmissionForm setCurrentStep={setCurrentStep} />;
      case 2:
        return <OrdersubmissionForm setCurrentStep={setCurrentStep} />;
      case 3:
        return <OrdersubmissionForm setCurrentStep={setCurrentStep} />;
      case 4:
        return <OrdersubmissionForm setCurrentStep={setCurrentStep} />;
      default:
        return;
    }
  };
  return (
    <div className="gap-5 grid grid-cols-1 bg-transparent shadow-md shadow-zinc-300 backdrop-blur-sm mt-10 border rounded-lg text-lg" data-aos="fade-up" data-aos-duration="2000">
      {/* <OrderProgress currentStep={currentStep} setCurrentStep={setCurrentStep} /> */}
      {renderSteps()}
    </div>
  );
}

export default Order;
