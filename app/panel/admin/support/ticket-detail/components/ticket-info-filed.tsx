import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
type TicketInfoFieldProps = {
  label: string;
  text: any;
  ticketDetailStatus: boolean;
};
function TicketInfoField({
  label,
  text,
  ticketDetailStatus,
}: TicketInfoFieldProps) {
  return (
    <div className="flex flex-row gap-3 items-center">
      <p className="w-[25%] whitespace-nowrap">{label}</p>
      {ticketDetailStatus ? (
        <SkeletonTheme>
          <Skeleton count={1} baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : (
        <p className="bg-[#EAEFF6] flex items-center rounded-[4px] w-[75%] p-2 font-faNum">
          {text}
        </p>
      )}
    </div>
  );
}

export default TicketInfoField;
