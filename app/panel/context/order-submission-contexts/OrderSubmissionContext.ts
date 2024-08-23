"use client";
import { createContext } from "react";
import { PlanType } from "../../admin/plan-management/page";
import { SimilarSiteType } from "../../user/submit-order/page";

export interface OrderSubmissionInterface {
  allPlans: PlanType[];
  setAllPlans: React.Dispatch<React.SetStateAction<PlanType[]>>;
  siteTypes: SimilarSiteType[];
  setSiteTypes: React.Dispatch<React.SetStateAction<SimilarSiteType[]>>;
}

export const OrderSubmissionContext = createContext<OrderSubmissionInterface>({
  allPlans: [],
  setAllPlans: () => {},
  siteTypes: [],
  setSiteTypes: () => {},
});
