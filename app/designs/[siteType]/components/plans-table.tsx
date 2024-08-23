import React from "react";
import styles from "./plans-table.module.css";
import TableHeader from "./table-header";

function PlansTable({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles["table-container"]}`}>
      <table className="text-center bg-white w-full">
        {/* <TableHeader /> */}
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <TableHeader />
        {children}
      </table>
    </div>
  );
}

export default PlansTable;
