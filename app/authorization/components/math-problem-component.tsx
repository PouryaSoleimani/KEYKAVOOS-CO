import React from "react";
type MathProblemComponentProps = {
  mathProblem: string;
  wrongAnswerMessage: string;
};
function MathProblemComponent({
  mathProblem,
  wrongAnswerMessage,
}: MathProblemComponentProps) {
  return (
    <React.Fragment>
      <input
        type="text"
        className="mx-auto outline-none rounded-md border-[1px] flex justify-center w-full text-center items-center text-3xl font-semibold tracking-tight border-zinc-400/80"
        style={{ direction: "ltr" }}
        disabled={true}
        value={mathProblem}
      />
      {wrongAnswerMessage && <span className="px-4 py-1 text-red-900 tracking-tighter rounded-lg text-md">{wrongAnswerMessage}</span>}
    </React.Fragment>
  );
}

export default MathProblemComponent;
