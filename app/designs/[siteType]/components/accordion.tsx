"use client";
import React, { useState } from "react";
import AccordionItem from "./accordion-item";
import { CorporateAccordionData } from "@/lib/data";

function Accordion({ siteType }: { siteType: string }) {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((last) => (last === index ? null : index));
  };
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[#4866CF] font-bold text-center">
        سوالات متداول در مورد طراحی سایت {siteType}{" "}
      </h3>
      <div className="grid grid-cols-1 gap-1">
        {CorporateAccordionData.map((item) => (
          <div key={item.id} className="bg-white">
            <AccordionItem
              items={item}
              onClick={handleItemClick}
              isOpen={activeIndex === item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
