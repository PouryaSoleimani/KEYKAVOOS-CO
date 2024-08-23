type InfoCardProps = {
  title: string;
  textInfo: string;
  imgSrc: string;
};
const InfoCard = ({ title, textInfo, imgSrc }: InfoCardProps) => {
  return (
    <div
      className="grid lg:grid-cols-2 lg:max-xl:grid-cols-7 4xl:grid-cols-12 rounded-[54px] lg:border border-none p-[3%] shadow-none lg:shadow-2xl lg:shadow-[0_4px_10px_5px_rgba(0, 0, 0, 0.25)] lg:gap-0 gap-[3%]"
      // style={{ boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="col-span-1 grid grid-cols-1 lg:gap-[1%] lg:max-xl:col-span-4 4xl:col-span-7 lg:order-1 order-2 justify-center items-center text-center lg:text-right gap-[3%]">
        <p className="text-[2em] font-bold">{title}</p>
        <p className="leading-8 text-[1.5em] text-justify lg:w-[80%] w-full mx-auto lg:mx-0">
          {textInfo}
        </p>
      </div>
      <div className="grid grid-cols-1 w-[100%] mx-auto col-span-1 gap-[3%] 4xl:gap-0 5xl:gap-[3%] lg:max-xl:col-span-3 4xl:col-span-5 lg:order-2 order-1">
        <div className="border border-black rounded-lg h-[22em] 4xl:h-[22em] flex justify-center items-center">
          <img src={imgSrc} className="p-[3%] mx-auto self-center" />
        </div>
        <div className="lg:grid grid-cols-2 gap-[30%] hidden">
          <button className="bg-[#ADBFFF] text-white px-[6%] py-[3%] rounded-tl-3xl rounded-br-3xl font-bold text-[1.25em] ">
            ثبت نام
          </button>
          <button className="bg-[#ADBFFF] text-white px-[6%] py-[3%] rounded-tr-3xl rounded-bl-3xl font-bold text-[1.25em] ">
            مشاهده
          </button>
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
