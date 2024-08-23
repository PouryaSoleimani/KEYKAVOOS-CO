type FormButtonProps = {
  disable?: boolean;
};
const FormButton = ({ disable }: FormButtonProps) => {
  return (
    <button
      className={`${!disable ? "bg-[#4866CF]" : "bg-indigo-300"} flex  self-center lg:self-start text-white px-3 py-1 rounded-2xl text-[20px]`}
      disabled={disable}
    >
      ارسال فرم
    </button>
  );
};
export default FormButton;
