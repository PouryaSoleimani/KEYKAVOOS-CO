"use client";
import React from "react";
import styles from "./order.module.css";

type OrderProgressProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
function OrderProgress({ currentStep, setCurrentStep }: OrderProgressProps) {
  const dotPositions = ["0%", "16.6666%", "33.3332%", "49.9998%", "66.6664%","83.333%","99.9996%"];
  const stepTexts = [
    "مشاوره",
    "ثبت سفارش",
    "دریافت فایلBrief",
    "پروپوزال",
    "تهیه زیرساخت",
    "طراحی وب",
    "تحویل وب",
  ];
  const handleDotClick = (step: number) => {
    setCurrentStep(step);
  };

  const getSquarePosition = () => {
    return dotPositions[currentStep];
  };

  return (
    <div className={`${styles.progressContainer} w-[80%] mx-auto`}>
      {dotPositions.map((position, index) => (
        <div
          key={index}
          className={`${styles.dot} ${
            currentStep === index ? styles.activeDot : ""
          }`}
          style={{ left: position }}
          onClick={() => handleDotClick(index)}
        >
          <span
            className={`whitespace-nowrap lg:whitespace-nowrap absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#4866CF] self-end ${
              currentStep === index ? "text-[15px] font-bold" : "text-[12px]"
            }`}
            dir="rtl"
          >
            {stepTexts[index]}
          </span>
        </div>
      ))}
      <div
        className={styles.square}
        style={{ left: getSquarePosition() }}
      ></div>
    </div>
  );
}

export default OrderProgress;
