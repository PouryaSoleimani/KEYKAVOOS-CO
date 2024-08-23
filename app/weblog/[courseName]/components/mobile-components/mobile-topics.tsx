type TopicProps = {
  topics: TheTopicType;
};
type TheTopicType = {
  [key: string]: Array<string>;
};
const MobileTopics = ({ topics }: TopicProps) => {
  return (
    <div className="grid grid-cols-1 gap-[5%] px-[2%]">
      <div className="flex flex-row items-center gap-4 mt-16">
        <span>
          <img src="/singlecourse/pointer.png" className="w-[20px]" />
        </span>
        <p className="font-semibold text-[30px]">مباحث</p>
      </div>

      <div
        className="flex justify-between items-center text-center p-[2%] rounded-xl"
        style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
      >
        {topics.line1.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {topics.line2 && (
        <div
          className="flex justify-between items-center text-center p-[2%] rounded-xl"
          style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
        >
          {topics.line2.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
      {topics.line3 && (
        <div
          className="flex justify-between items-center text-center p-[2%] rounded-xl"
          style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
        >
          {topics.line3.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
      {topics.line4 && (
        <div
          className="flex justify-between items-center text-center p-[2%] rounded-xl"
          style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
        >
          {topics.line4.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default MobileTopics;
