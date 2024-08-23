import React from "react";
import Info from "./components/info";
import PlansTable from "./components/plans-table";
import {
  CorporateTableData,
  EcommerceTableData,
  MedicalTableData,
  TourismTableData,
} from "@/lib/data";
import Accordion from "./components/accordion";
import TableBody from "./components/table-body";

function SiteType({ params }: { params: { siteType: string } }) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <Info />
      <PlansTable>
        <TableBody
          TableData={
            params.siteType === "corporate"
              ? CorporateTableData
              : params.siteType === "ecommerce"
              ? EcommerceTableData
              : params.siteType === "tourism"
              ? TourismTableData
              : params.siteType === "medical"
              ? MedicalTableData
              : []
          }
        />
      </PlansTable>
      <Accordion
        siteType={
          params.siteType === "corporate"
            ? "شرکتی"
            : params.siteType === "ecommerce"
            ? "فروشگاهی"
            : params.siteType === "tourism"
            ? "توریستی"
            : params.siteType === "medical"
            ? "پزشکی"
            : ""
        }
      />
    </div>
  );
}

export default SiteType;
