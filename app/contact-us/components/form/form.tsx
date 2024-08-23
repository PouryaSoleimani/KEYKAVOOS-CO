"use client";
import Image from "next/image";
import React, { useState } from "react";
import FormInput from "./form-inputs";
import FormTextarea from "./form-textarea";
import FormText from "./form-text";
import FormButton from "./form-button";
import axios from "axios";

const Form = () => {
  const [message, setMessage] = useState({ name: "", phone: "", text: "" });
  const [disable, setDisable] = useState(true);
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    try {
      const { data } = await axios.post("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-1 w-full mx-auto lg:w-[80%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto justify-between lg:gap-[8%] w-full">
        <div className="flex flex-col w-full items-start lg:gap-[5%] gap-[3%]">
          <FormText />
          <form
            className="flex flex-col h-full lg:w-full lg:gap-[10%] w-[75%] mx-auto gap-4"
            onSubmit={(e) => handleSubmission(e)}
            id="contact-us"
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[5%] gap-3">
              <FormInput
                label="نام "
                placeholder="علی رسولی"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMessage((last) => ({ ...last, name: e.target.value }))
                }
                type="text"
                value={message.name}
              />
              <FormInput
                label="شماره همراه "
                placeholder="091200000"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMessage((last) => ({ ...last, phone: e.target.value }))
                }
                type="tel"
                value={message.phone}
              />
            </div>
            <FormTextarea
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage((last) => ({ ...last, text: e.target.value }))
              }
              value={message.text}
              formId={"contact-us"}
            />
            <FormButton />
          </form>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/contactus/agent.png"
            width={700}
            height={700}
            alt="agent"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
