"use client";
import { updateStatus } from "@/redux/features/user/userSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useCaptcha = (
  PhoneNumber: string,
  setLoginwithPass: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { status } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [mathProblem, setMathProblem] = useState("");
  const [wrongAnswerMessage, setWrongAnswerMessage] = useState("");
  const [firstNumber, setFirstNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [secondNumber, setSecondNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );

  const correctAnswer = firstNumber + secondNumber;

  useEffect(() => {
    setMathProblem(`${firstNumber} + ${secondNumber}`);
    // if (status === "failed") {
    //   // Generate a new math problem
    //   setFirstNumber(Math.floor(Math.random() * 10) + 1);
    //   setSecondNumber(Math.floor(Math.random() * 10) + 1);
    //   setMathProblem(`${firstNumber} + ${secondNumber}`);
    //   dispatch(updateStatus());
    //   setAnswer("");
    // } else {
    //   setWrongAnswerMessage("");
    // }
    if (answer === "") {
      setWrongAnswerMessage("");
    } else if (parseInt(answer) !== correctAnswer) {
      setWrongAnswerMessage("پاسخ صحیح نیست.");
    } else if (parseInt(answer) === correctAnswer) {
      setWrongAnswerMessage("");
    }
  }, [answer, firstNumber, secondNumber, status]);

  let result = parseInt(answer) === correctAnswer;

  return {
    mathProblem,
    wrongAnswerMessage,
    answer,
    correctAnswer,
    setAnswer,
    setSecondNumber,
    setFirstNumber,
    result,
  };
};
