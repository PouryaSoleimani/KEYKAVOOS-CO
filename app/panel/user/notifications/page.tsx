"use client";
import Image from "next/image";
import React, { useState } from "react";

const Notifications = () => {
  const [showChat, setShowChat] = useState(false);
  const [showSingleChat, setShowSingleChat] = useState(false);

  return (
    <div className="w-[90%] mx-auto h-[80%]">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-lg pb-2">موضوع پیام</p>
        {showSingleChat && (
          <p className="font-bold text-lg pb-2 self-center w-[66%]">متن پیام</p>
        )}
      </div>
      <div
        className={`grid grid-cols-3 gap-[3%] h-full w-full ${
          showChat ? "justify-start items-start" : ""
        }`}
      >
        <div className="border flex flex-col justify-between rounded-lg text-center font-bold overflow-hidden h-[455px] col-span-1">
          <p
            className="bg-yellow-50l font-medium cursor-pointer"
            onClick={() => (setShowSingleChat(true), setShowChat(false))}
          >
            پیام
          </p>
          <button
            className="self-end border rounded-lg w-full py-2 font-extrabold"
            onClick={() => (setShowChat(true), setShowSingleChat(false))}
          >
            پیام جدید +
          </button>
        </div>
        <div className="col-span-2">
          {!showChat && !showSingleChat && (
            <div
              className="cursor-pointer w-full rounded-lg h-[80%] bg-[#E1E8FF] flex justify-center items-center"
              onClick={() => setShowChat(true)}
            >
              <div className="w-full flex flex-col items-center">
                <p>شما تا کنون پیامی ندارید</p>
                <button className="bg-[#4866CF] text-white p-[2%] rounded-lg">
                  + افزودن پیام جدید
                </button>
              </div>
            </div>
          )}
          {showChat && !showSingleChat && (
            <div className=" w-full grid grid-cols-1 border justify-center items-center gap-y-10 p-[5%] rounded-lg">
              <div className="w-full flex flex-row">
                <label>موضوع:</label>
                <input className="h-full bg-[#EDF0FB] rounded-lg" />
              </div>
              <div className="h-[210px] w-full flex flex-row">
                <label>پیام:</label>
                <textarea
                  className="rounded-lg  bg-[#EDF0FB] px-2 py-4 w-full h-full"
                  placeholder="شرح مختصری از درخواست خود را بنویسید..."
                  // onChange={onChange}
                  // value={value}
                  // form={formId}
                ></textarea>
              </div>
              <button className="bg-[#EDF0FB] text-black w-[80px] rounded-lg mr-8 flex flex-row items-center gap-2 px-[2%]">
                <span>ارسال</span>
                <Image src="/sendchat.svg" width={15} height={15} alt="send" />
              </button>
            </div>
          )}
          {showSingleChat && (
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <div className="h-[400px] border rounded-lg"></div>
                <div>
                  <div className="relative">
                    <input className="h-[50px] w-full border rounded-lg" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-3">
                      <Image
                        src="/sendchat.svg"
                        width={30}
                        height={30}
                        alt="send"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
