import React from "react";

type InfoText = {
  title: string;
  text: string;
};

type InfoParagraphsProps = {
  info: InfoText[];
  expand: boolean;
};

const InfoParagraphs = ({ info, expand }: InfoParagraphsProps) => {
  const slicedInfo = info.slice(1);

  const cutTheText = (text: string, lengthToCut: number) => {
    const splitText = text.split(" ");
    if (splitText.length <= lengthToCut) {
      return text;
    }
    return splitText.slice(0, lengthToCut).join(" ");
  };

  return (
    <>
      {info.map((item, index) => (
        <div key={index}>
          {item === info[0] && (
            <div>
              <p className="flex flex-row items-center gap-4 mt-16">
                <span>
                  <img
                    src="/singlecourse/pointer.png"
                    className="lg:w-[20px] w-[15px]"
                  />
                </span>
                <span className="font-semibold text-[1.5em]">{item.title}</span>
              </p>
              <p className="text-[20px] font-normal px-7 text-black text-justify">
                {item.text}
              </p>
            </div>
          )}
        </div>
      ))}

      {expand 
        ? slicedInfo.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row items-center gap-4 mt-16">
                <span>
                  <img src="/singlecourse/pointer.png" className="w-[20px]" />
                </span>
                <p className="font-semibold text-[1.5em]">{item.title}</p>
              </div>
              <p className="text-[20px] font-normal px-7 text-black text-justify">
                {item.text}
              </p>
            </div>
          ))
        : slicedInfo.map((item, index) => (
            <div key={index}>
              {item === slicedInfo[0] && (
                <div className="flex flex-row items-center gap-4 mt-16">
                  <span>
                    <img src="/singlecourse/pointer.png" className="w-[20px]" />
                  </span>
                  <p className="font-semibold text-[1.5em]">{item.title}</p>
                </div>
              )}

              <p
                className="text-[20px] font-normal px-7 text-black text-justify"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 10%, transparent 100%)",
                }}
              >
                {item === slicedInfo[0] && cutTheText(item.text, 223)}
              </p>
            </div>
          ))}
    </>
  );
};

export default InfoParagraphs;
