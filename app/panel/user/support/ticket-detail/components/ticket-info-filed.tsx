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
    <div className="flex lg:flex-row flex-col gap-3 lg:items-center">
      <p className="w-[25%] whitespace-nowrap">{label}</p>
      {ticketDetailStatus ? (
        <SkeletonTheme>
          <Skeleton count={1} baseColor="#EAEFF6" />
        </SkeletonTheme>
      ) : (
        <p className="bg-[#EAEFF6] flex items-center rounded-[4px] lg:w-[75%] w-full p-2 font-faNum">
          {text}
        </p>
      )}
    </div>
  );
}

export default TicketInfoField;
