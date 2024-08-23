import Link from "next/link";

type CourseRegProps = {
  logoLink: string;
  logosHeadText: string;
  logosHour: string;
  courseAttendees: string;
  dynamicRoute: string;
};
const CourseReg = ({
  logoLink,
  logosHeadText,
  logosHour,
  courseAttendees,
  dynamicRoute,
}: CourseRegProps) => {
  return (
    <div
      className="grid grid-cols-1 gap-6 w-full font-faNum lg:pr-[8%]"
      style={{
        fill: "#FFF",
        filter: "drop-shadow(0px 0px 55px rgba(0, 0, 0, 0.3))",
      }}
    >
      <div
        className="bg-[#ADBFFF] rounded-tr-[50px] rounded-tl-[50px] h-[170px]"
        
      >
        <img
          src={logoLink}
          className="h-[60%] mt-7 px-4 flex justify-center items-center mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 pr-[5%]">
        <p className="font-bold text-[25px] text-center relative whitespace-nowrap 3xl:text-[23px]">
          {logosHeadText}
        </p>
        <p className="flex flex-row items-center gap-4">
          <img src="/courses/clockicon.png" className="w-[30px] h-[30px]" />
          <span className="font-bold text-[23px]">{logosHour}</span>
        </p>
        <p className="flex flex-row items-center gap-4">
          <img src="/courses/educationicon.png" className="w-[30px] h-[30px]" />
          <span className="font-bold text-[23px]">{courseAttendees}</span>
        </p>
        <div className="mx-auto">
          <img src="/courses/stars.png" className="w-[200px] h-[40px]" />
        </div>
      </div>
      {/* buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Link href="/">
          <p className="bg-[#ADBFFF] w-[100%] h-[100px] rounded-tl-[50px] rounded-br-[50px] flex justify-center items-center text-white font-[900] text-xl">
            ثبت نام
          </p>
        </Link>
        <Link href={`/courses/${dynamicRoute}`}>
          <p className="bg-[#ADBFFF] w-[100%] h-[100px] rounded-tr-[50px] rounded-bl-[50px] flex justify-center items-center text-white font-[900] text-xl">
            مشاهده
          </p>
        </Link>
      </div>
    </div>
  );
};
export default CourseReg;
