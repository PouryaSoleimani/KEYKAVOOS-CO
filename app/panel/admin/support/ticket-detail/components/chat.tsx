"use client";
import React, { useState } from "react";
import styles from "./chat.module.css";
import ChatFileUpload from "./chat-file-upload";
const moment = require("moment-jalaali");
type ChatProps = {
  senderText: any;
  recieverText: any;
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  File: any;
  handleFileChange: any;
  handleFileUpload: any;
  sendResponseTicket: any;
  fileSelected: boolean;
  ticketId: string;
};

function Chat({
  senderText,
  textInput,
  setTextInput,
  File,
  handleFileChange,
  handleFileUpload,
  sendResponseTicket,
  fileSelected,
  ticketId,
}: ChatProps) {
  // console.log("sender text", senderText);

  const userMsgs = senderText[0]?.messages?.filter(
    (item: any) =>
      item.register_user_id !== null && item.responser_user_id === null
  );
  const userMessages = userMsgs ? userMsgs : [];

  const adminMsgs = senderText[0]?.messages.filter(
    (item: any) => item.responser_user_id !== null
  );
  const adminMessages = adminMsgs ? adminMsgs : [];

  // console.log("user messages", userMessages);
  // console.log("admin Messages", adminMessages);
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (File && textInput) {
      Promise.all([
        await handleFileUpload(),
        await sendResponseTicket(textInput, ticketId),
      ]);
      setTextInput("");
      File.name = "";
    } else if (textInput && !File) {
      await sendResponseTicket(textInput, ticketId);
      setTextInput("");
    } else if (!textInput && File) {
      await handleFileUpload();
    }
  };

  const timestampConversion = (timestamp: number | Date | undefined) => {
    return moment(timestamp, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD");
  };
  const combinedMessages = [[...userMessages], [...adminMessages]];
  const sortedCombinedMessages = combinedMessages.flat().sort((a, b) => {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  // console.log("combined", combinedMessages);
  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1">
        <div className="flex flex-col items-end">
          <div
            className={`${
              styles.chatBubble
            } ${`${styles.sender}`} flex flex-col gap-5`}
          >
            <p className="justify-start">{senderText[0]?.mainDescription}</p>
            <span className={`flex justify-end`}>
              {timestampConversion(senderText[0]?.created_at)}
            </span>
          </div>
        </div>
        <div className={`flex flex-col gap-5`}>
          {sortedCombinedMessages.map((item, index) => (
            <div
              key={index}
              className={`${styles.chatBubble} ${
                item.responser_user_id
                  ? `${styles.receiver} items-start`
                  : styles.sender
              }`}
            >
              <p>{item.description}</p>
              <span
                className={`flex ${
                  item.responser_user_id ? "justify-end" : "justify-end"
                }`}
              >
                {timestampConversion(item.created_at)}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* user */}
      {/* <div className={`flex flex-col gap-5`}>
        <div>
          <div className={`${styles.chatBubble} ${styles.sender}`}>
            {senderText[0]?.mainDescription}
            <span
              className={`flex justify-end
          }`}
            >
              {timestampConversion(senderText[0]?.created_at)}
            </span>
          </div>
          {combinedMessages[0].map((item, index) => (
            <div
              key={index}
              className={`${styles.chatBubble} ${styles.sender}`}
            >
              <p>{item.description}</p>
              <span className={`flex justify-end`}>
                {timestampConversion(item.created_at)}
              </span>
            </div>
          ))}
        </div>
      </div> */}
      {/* admin */}
      {/* <div className={`flex flex-col gap-5`}>
        <div>
          {combinedMessages[1].map((item, index) => (
            <div
              key={index}
              className={`${styles.chatBubble} ${styles.receiver}`}
            >
              <p>{item.description}</p>
              <span className={`flex justify-start`}>
                {timestampConversion(item.created_at)}
              </span>
            </div>
          ))}
        </div>
      </div> */}
      <form
        onSubmit={(e) => handleSubmission(e)}
        className="bg-[#4866CE] rounded-[4px] flex"
      >
        <textarea
          cols={30}
          rows={4}
          className="p-[1%] text-white w-[85%] placeholder:text-[#EAEFF6A1]"
          maxLength={150}
          placeholder="متن مورد نظر خود را تایپ کنید"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></textarea>
        <span className="font-faNum flex flex-col self-end p-4 text-[#EAEFF6A1]">
          0/150
        </span>
        <div className="grid grid-cols-1 justify-center items-center w-[15%] px-3">
          <button
            className="p-2 rounded-[4px] text-[#4866CE] bg-[#EAEFF6]"
            type="submit"
          >
            ارسال پیام
          </button>
          <ChatFileUpload File={File} handleChange={handleFileChange} />
        </div>
      </form>
    </div>
  );
}

export default Chat;
