import ReadMore from "./read-more";

type DescriptionProps = {
  title: string;
  text: string;
};
const Description = ({ title, text }: DescriptionProps) => {
  return (
    <div className="flex flex-col gap-3 mr-[10%]">
      <p className="text-[30px] font-bold whitespace-nowrap 4xl:text-[25px]">{title}</p>
      <ReadMore text={text} />
    </div>
  );
};
export default Description;
