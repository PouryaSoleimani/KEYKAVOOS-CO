"use client";
import React, { useState } from "react";
import { AttrIdContext } from "./AttrIdContext";

function AttrIdContextWrapper({ children }: { children: React.ReactNode }) {
  const [attrId, setAttrId] = useState("");
  return (
    <AttrIdContext.Provider value={{ attrId, setAttrId }}>
      {children}
    </AttrIdContext.Provider>
  );
}

export default AttrIdContextWrapper;
