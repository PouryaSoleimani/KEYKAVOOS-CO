type FormTextareaProps = {
  onChange: any;
  value: string;
  formId: string;
};
const FormTextarea = ({ onChange, value , formId }: FormTextareaProps) => {
  return (
    <div className="relative h-full">
      <label className="absolute -top-3 right-4 bg-white lg:text-[20px] lg:px-4 px-2">
        پیام شما
      </label>
      <textarea
        className="border-2 rounded-lg border-[#4866CF] px-2 py-4 w-full h-full"
        placeholder="سلام لطفا..."
        onChange={onChange}
        value={value}
        form={formId}
      ></textarea>
    </div>
  );
};
export default FormTextarea;
