import React, { useState } from "react";
import { PositionContext } from "./PositionContext";
import { PositionType } from "../../position-management/page";

function PositionContextWrapper({ children }: { children: React.ReactNode }) {
  const [positions, setPositions] = useState<PositionType[]>([]);
  const [positionId, setPositionId] = useState("");
  return (
    <PositionContext.Provider
      value={{ positionId, setPositionId, positions, setPositions }}
    >
      {children}
    </PositionContext.Provider>
  );
}

export default PositionContextWrapper;
