import React from "react";

type ShowPassStrengthProps = {
  strength: 0 | 1 | 2 | 3;
};
function ShowPassStrength({ strength }: ShowPassStrengthProps) {
  return (
    <div className="flex flex-row justify-end pt-[3%] gap-1">
      {Array.from({ length: strength + 1 }).map((item, index) => (
        <div
          key={index}
          className={`${
            strength === 0
              ? "bg-red-400"
              : strength === 1
              ? "bg-orange-400"
              : strength === 2
              ? "bg-yellow-400"
              : strength === 3 && "bg-green-400"
          } w-[65px] h-2 rounded-lg`}
        ></div>
      ))}
    </div>
  );
}

export default ShowPassStrength;
