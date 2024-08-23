const Teacher = () => {
  return (
    <div className="">
      {/* Head */}
      <div className="flex flex-row items-center gap-4 mt-16">
        <span>
          <img src="/singlecourse/pointer.png" className="w-[20px]" />
        </span>
        <p className="font-semibold text-[30px]">مدرس شما کیست؟</p>
      </div>
      {/* textarea */}
      <div className="px-[5%]">
        <div
          style={{
            boxShadow: "0px 11px 0px 5px #4866CF",
            borderRadius: "35px",
          }}
          className="h-[300px] mt-8 mb-12"
        ></div>
      </div>
    </div>
  );
};
export default Teacher;
