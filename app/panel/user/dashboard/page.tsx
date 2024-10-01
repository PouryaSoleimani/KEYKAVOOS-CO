import { UserDashboardInfo } from "@/lib/data";
import React from "react";
import DashboardCard from "../components/DashboardCard";
import 'animate.css';

function Dashboard() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold p-2 text-[#4866CF]">داشبورد</h1>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:my-5 gap-y-24 place-items-center text-center bg-white shadow mx-auto rounded-lg w-full px-[3%] py-20 lg:py-[8%] animate__animated animate__pulse">
        {UserDashboardInfo.map((item) => (
          <DashboardCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
