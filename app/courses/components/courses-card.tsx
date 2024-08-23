import Link from "next/link";
import React from "react";
import Description from "./description";
import VideoComp from "./video-comp";
import CourseReg from "./course-reg";

type CoursesCardProps = {
  text: string;
  title: string;
  videoLink: string;
  videoLogosLink: string[];
  videoLogosText: string[];
  logoLink: string;
  logosHeadText: string;
  logosHour: string;
  courseAttendees: string;
  dynamicRoute: string;
};
const CoursesCard = ({
  text,
  title,
  videoLink,
  videoLogosLink,
  videoLogosText,
  logoLink,
  logosHeadText,
  logosHour,
  courseAttendees,
  dynamicRoute,
}: CoursesCardProps) => {
  return (
    <div
      className="grid lg:grid-cols-6 xl:grid-cols-8 4xl:grid-cols-9 grid-cols-1 border rounded-[50px] items-center justify-center"
      style={{
        boxShadow: "0px 0px 55px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="lg:col-span-2 order-3 lg:order-1 xl:col-span-3 4xl:col-span-3">
        <Description title={title} text={text} />
      </div>
      <div className="lg:col-span-2 order-2 xl:col-span-3 4xl:col-span-3">
        <VideoComp
          videoLink={videoLink}
          videoLogosLink={videoLogosLink}
          videoLogosText={videoLogosText}
        />
      </div>
      <div className="lg:col-span-2 order-1 lg:order-3 xl:col-span-2 4xl:col-span-3">
        <CourseReg
          courseAttendees={courseAttendees}
          dynamicRoute={dynamicRoute}
          logoLink={logoLink}
          logosHeadText={logosHeadText}
          logosHour={logosHour}
        />
      </div>
    </div>
  );
};
export default CoursesCard;
