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
        className="mx-auto outline-none rounded-md border-[0.3px] flex justify-center w-full text-center items-center text-3xl border-black"
        style={{ direction: "ltr" }}
        disabled={true}
        value={mathProblem}
      />
      {wrongAnswerMessage && <span>{wrongAnswerMessage}</span>}
    </React.Fragment>
  );
}

export default MathProblemComponent;
