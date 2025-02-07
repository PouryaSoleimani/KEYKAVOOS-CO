type SubmissionBtnProps = {
  text: string;
  validation?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
};
const SubmissionBtn = ({ text, validation, type }: SubmissionBtnProps) => {
  return (
    <button
      className={`${validation ? "bg-[#4866CF] cursor-pointer" : "bg-indigo-300 cursor-not-allowed"} text-white w-full whitespace-nowrap text-[20px] font-thin py-3 tracking-tight rounded-[7px] hover:bg-blue-800 duration-300`}
      disabled={!validation ? true : false}
      type={type}
    >
      {text}
    </button>
  );
};
export default SubmissionBtn;
