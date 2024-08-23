"use client";
import React, { useState } from "react";
import { PlanType } from "../../admin/plan-management/page";
import { OrderSubmissionContext } from "./OrderSubmissionContext";
import { SimilarSiteType } from "../../user/submit-order/page";

function OrderSubmissionContextWrapper({ children }: { children: React.ReactNode }) {
  const [allPlans, setAllPlans] = useState<PlanType[]>([]);
  const [siteTypes, setSiteTypes] = useState<SimilarSiteType[]>([]);
  return (
    <OrderSubmissionContext.Provider value={{ allPlans, setAllPlans , siteTypes , setSiteTypes }}>
      {children}
    </OrderSubmissionContext.Provider>
  );
}

export default OrderSubmissionContextWrapper;
