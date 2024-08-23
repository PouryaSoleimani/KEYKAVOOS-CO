import Link from "next/link";
import VideoComp from "../video-comp";
import ReadMore from "../read-more";

type MobileCardProps = {
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
const MobileCard = ({
  logoLink,
  logosHeadText,
  logosHour,
  courseAttendees,
  dynamicRoute,
  text,
  title,
  videoLink,
  videoLogosLink,
  videoLogosText,
}: MobileCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 w-full">
      <div
        className="bg-[#ADBFFF] rounded-tr-[50px] rounded-tl-[50px] h-[170px]"
        style={{
          fill: "#FFF",
          filter: "drop-shadow(0px 0px 55px rgba(0, 0, 0, 0.3))",
        }}
      >
        <img
          src={logoLink}
          className="h-[60%] mt-7 px-4 flex justify-center items-center mx-auto"
        />
      </div>

      <div className="flex justify-center items-center gap-4">
        <img src="/courses/mobilestars.svg"/>
        <div className="grid grid-cols-1 gap-6">
          <p className="font-bold text-[30px] relative">{logosHeadText}</p>
          <p className="flex flex-row items-center gap-4">
            <img src="/courses/clockicon.png" className="w-[35px] h-[35px]" />
            <span className="font-bold text-[25px]">{logosHour}</span>
          </p>
          <p className="flex flex-row items-center gap-4">
            <img
              src="/courses/educationicon.png"
              className="w-[35px] h-[35px]"
            />
            <span className="font-bold text-[25px]">{courseAttendees}</span>
          </p>
        </div>
      </div>

      <VideoComp
        videoLink={videoLink}
        videoLogosLink={videoLogosLink}
        videoLogosText={videoLogosText}
      />

      <ReadMore text={text} />
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
export default MobileCard;
