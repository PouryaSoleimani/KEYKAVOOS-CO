"use client";
import React, { useState } from "react";
import styles from "./plans-table.module.css";

type TableHeaderTempProps = {
  children: React.ReactNode;
  index: number;
};
function TableHeaderTemp({ children , index}: TableHeaderTempProps) {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  return (
    <th
      onMouseEnter={() => setHoveredColumn(index)}
      onMouseLeave={() => setHoveredColumn(null)}
      className={`font-faNum ${
        hoveredColumn === index ? styles["column-head"] : ""
      }`}
    >
      {children}
      <button
        className={`${
          hoveredColumn === index ? styles["buy-button"] : styles["hide-buy-button"]
        }`}
      >
        سفارش
      </button>
    </th>
  );
}

export default TableHeaderTemp;
