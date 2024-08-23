import { createContext } from "react";
import { PositionType } from "../../position-management/page";

interface PositionContextType {
  positions: PositionType[];
  setPositions: React.Dispatch<React.SetStateAction<PositionType[]>>;
  positionId: string;
  setPositionId: React.Dispatch<React.SetStateAction<string>>;
}

export const PositionContext = createContext<PositionContextType>({
  positions: [],
  setPositions: () => {},
  positionId: "",
  setPositionId: () => {},
});
