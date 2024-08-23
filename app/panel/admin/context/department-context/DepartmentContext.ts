"use client";
import { createContext } from "react";
import { DepartmentFinalType, DepartmentType } from "../../org_management/departments/page";

export interface DepartmentTypeInterface {
  departments: DepartmentFinalType[] | DepartmentType[];
  setDepartments: React.Dispatch<React.SetStateAction<DepartmentFinalType[] | DepartmentType[]>>;
}
export const DepartmentContext = createContext<DepartmentTypeInterface>({
  departments: [],
  setDepartments: () => {},
});
