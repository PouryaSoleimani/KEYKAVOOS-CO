"use client";
import React, { useState } from "react";
import { DepartmentContext } from "./DepartmentContext";
import {
  DepartmentFinalType,
  DepartmentType,
} from "../../org_management/departments/page";

function DepartmentContextWrapper({ children }: { children: React.ReactNode }) {
  const [departments, setDepartments] = useState<
    DepartmentFinalType[] | DepartmentType[]
  >([]);
  return (
    <DepartmentContext.Provider value={{ departments, setDepartments }}>
      {children}
    </DepartmentContext.Provider>
  );
}

export default DepartmentContextWrapper;
