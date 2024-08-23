import InfoParagraphs from "../info-paragraphs";
import { Dispatch, SetStateAction } from "react";
import Teacher from "../teacher";
import InfoCard from "../info-card";
import InfoBtn from "../info-btn";
import MobileTopics from "./mobile-topics";

type MobileComponentProps = {
  imgSrc: string;
  info: InfoText[];
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  textInfo: string;
  title: string;
  text: string;
  topics: any;
};
type InfoText = {
  title: string;
  text: string;
};

type InfoParagraphsProps = {
  info: InfoText[];
  expand: boolean;
};

const MainComponent = ({
  imgSrc,
  info,
  expand,
  setExpand,
  title,
  textInfo,
  text,
  topics,
}: MobileComponentProps) => {
  return (
    <div
      className="grid grid-cols-1 rounded-[25px] border mb-[40%]"
      style={{ boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="p-[5%]">
        <InfoCard imgSrc={imgSrc} textInfo={textInfo} title={title} />
      </div>
      <InfoParagraphs expand={expand} info={info} />
      <InfoBtn
        text={expand ? "بستن مطالب" : "ادامه مطالب"}
        setExpand={setExpand}
        expand={expand}
      />
      <MobileTopics topics={topics} />
      <Teacher />
      <div className="grid grid-cols-2 gap-[2%] text-white text-[25px]">
        <button className="bg-[#ADBFFF] py-[8%] rounded-tl-3xl rounded-br-3xl">
          ثبت نام
        </button>
        <button className="bg-[#ADBFFF] py-[8%] rounded-tr-3xl rounded-bl-3xl">
          مشاهده
        </button>
      </div>
    </div>
  );
};
export default MainComponent;
