import React from "react";
import AllProjects from "./all-projects";
import Link from "next/link";

function ProjectMangement() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="flex">
        <Link href={`/panel/admin/project-management/order-management`} className="text-white bg-[#4866CF] py-3 px-6 rounded-[5px] hover:bg-blue-800 duration-300"  >
          مدیریت سفارشات
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-10 bg-white shadow mx-auto rounded-lg w-full p-[3%]">
        <AllProjects />
      </div>
    </div>
  );
}

export default ProjectMangement;
