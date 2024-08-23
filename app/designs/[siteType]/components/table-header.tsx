import base from "@/public/Plans/base-logo.svg";
import advanced from "@/public/Plans/advanced-logo.svg";
import special from "@/public/Plans/special-logo.svg";
import elite from "@/public/Plans/ellite-logo.svg";
import Image from "next/image";
import React, { useState } from "react";

import TableHeaderTemp from "./table-header-temp";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>
          <div className="text-center">
            <span className="text-[#4866CF]">مشاوره رایگان</span>
            <p className="text-black">
              برای مشاوره رایگان با کارشناسان ما تماس بگیرید
            </p>
            <p className="text-[#4866CF] font-faNum">09961900684</p>
          </div>
        </th>
        <TableHeaderTemp index={1}>
          <div className="flex flex-col items-center text-[#E4624C]">
            <Image src={base} alt="پایه" />
            <span className="font-bold">پلن پایه</span>
            <span>شروع قیمت از</span>
            <span className="font-faNum">10 میلیون تومان</span>
          </div>
        </TableHeaderTemp>
        <TableHeaderTemp index={2}>
          <div className="flex flex-col items-center text-[#A8B1EC]">
            <Image src={advanced} alt="حرفه ای" />
            <span className="font-bold">پلن حرفه ای</span>
            <span>شروع قیمت از</span>
            <span className="font-faNum">15 میلیون تومان</span>
          </div>
        </TableHeaderTemp>
        <TableHeaderTemp index={3}>
          <div className="flex flex-col items-center text-[#FBAC5B]">
            <Image src={special} alt="پایه" />
            <span className="font-bold">پلن ویژه</span>
            <span>شروع قیمت از</span>
            <span className="font-faNum">30 میلیون تومان</span>
          </div>
        </TableHeaderTemp>
        <TableHeaderTemp index={4}>
          <div className="flex flex-col items-center text-[#FFDF40]">
            <Image src={elite} alt="الیت" />
            <span className="font-bold">پلن الیت</span>
            <span>شروع قیمت از</span>
            <span className="font-faNum">50 میلیون تومان</span>
          </div>
        </TableHeaderTemp>
      </tr>
    </thead>
  );
}

export default TableHeader;
