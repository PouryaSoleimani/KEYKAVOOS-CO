import React from "react";
import AllProjects from "./all-projects";
import Link from "next/link";

function ProjectMangement() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="py-3">
        <h1 className="text-2xl font-bold text-[#4866cf] pr-2">مدیریت پروژه ها</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 bg-white shadow mx-auto rounded-lg w-full p-[3%]">
        <AllProjects />
      </div>
    </div>
  );
}

export default ProjectMangement;
