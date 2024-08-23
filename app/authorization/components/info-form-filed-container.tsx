import React from "react";

function InfoFormFieldContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`relative`}>{children}</div>;
}

export default InfoFormFieldContainer;
