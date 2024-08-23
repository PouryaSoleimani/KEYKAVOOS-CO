type TopicProps = {
  topics: TheTopicType;
};
type TheTopicType = {
  [key: string]: Array<string>;
}
const Topics = ({ topics }: TopicProps) => {
  return (
    <div className="mb-28">
      <div className="flex flex-row items-center gap-4 mt-16">
        <span>
          <img src="/singlecourse/pointer.png" className="w-[20px]" />
        </span>
        <p className="font-semibold text-[30px]">مباحث</p>
      </div>

      <div
        className="w-full h-11 mt-8 rounded-lg font-semibold text-[1.5em] py-[2%] px-[3%] flex justify-between items-center"
        style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
      >
        {topics.line1.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {topics.line2 && (
        <div
          className="w-full h-11 mt-8 rounded-lg font-semibold text-[1.5em] py-[2%] px-[3%] flex justify-between items-center"
          style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
        >
          {topics.line2.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        </div>
      )}
      {topics.line3 && (
        <div
          className="w-full h-11 mt-8 rounded-lg font-semibold text-[1.5em] py-[2%] px-[3%] flex justify-between items-center"
          style={{ boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.25)" }}
        >
          {topics.line3.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        </div>
      )}
      {topics.line4 && (
        <div
          className="w-full h-11 mt-8 rounded-lg font-semibold text-[1.5em] py-[2%] px-[3%] flex justify-between items-center"
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
export default Topics;
