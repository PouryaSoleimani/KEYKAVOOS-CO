"use client";
import { createContext } from "react";

interface ValueIdContextType {
  attrId: string;
  setAttrId: React.Dispatch<React.SetStateAction<string>>;
}
export const AttrIdContext = createContext<ValueIdContextType>({
  attrId: "",
  setAttrId: () => {},
});
