type VideoCompProps = {
  videoLink: string;
  videoLogosLink: string[];
  videoLogosText: string[];
};
const VideoComp = ({
  videoLink,
  videoLogosLink,
  videoLogosText,
}: VideoCompProps) => {
  return (
    <div className="grid grid-cols-1 mx-auto w-[90%] gap-[8%] pr-[5%]">
      <div className="border border-black rounded-lg w-full h-[200px]">
        <img
          src={videoLink}
          className="w-full h-full mx-auto p-[5%]"
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-row justify-between w-full">
          {videoLogosLink.map((src, index) => (
            <img src={src} key={index} className="w-[50px] h-[50px]" />
          ))}
        </div>
        <div className="flex flex-row justify-between w-full">
          {videoLogosText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VideoComp;
