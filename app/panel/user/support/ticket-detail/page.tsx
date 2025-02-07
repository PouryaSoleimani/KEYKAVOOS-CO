/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// ^ SINGLE TICKET DETAILS ===================================================================================================================================
import React, { useEffect, useState } from "react";
import TicketFields from "../add-new-ticket/components/ticket-fields";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import TicketInfoField from "./components/ticket-info-filed";
import Chat from "./components/chat";
import { Bounce, toast } from "react-toastify";
import { IoArrowBack } from "react-icons/io5";
import { getTicektDetail } from "@/utils/utils";
import app from "@/services/service";
import NotFound from "@/app/panel/admin/components/NotFound";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const moment = require("moment-jalaali");
type SenderTextItem = { childId?: number; description: string; mainDescription: string; register_user_id: string; responser_user_id: string; created_at: string; messages: []; };

// ^ COMPONENT ===================================================================================================================================
function TicketDetail() {
  const [ticketDetail, setTicketDetail] = useState({ Title: "", RelavantUnit: "", Responser: "", Sender: "", DateSend: "", DateAnswered: "", SenderText: [] as SenderTextItem[], Blocked: "", RelavantUnitId: "", });
  const [ticketDetailStatus, setTicketDetailStatus] = useState({ error: "", loading: false, });
  const [fileSelected, setFileSelected] = useState(false);
  const [textInput, setTextInput] = useState("");
  const { token, userProfile } = useSelector((state: any) => state.userData);
  const params = useSearchParams();
  const id = params.get("id");
  const router = useRouter();
  const [ticketId, setTicketId] = useState("");
  const [File, setFile] = useState<any>(null);
  const handleFileChange = (file: File) => { setFile(file); setFileSelected(true); };

  useEffect(() => { console.log("%c ID ==>", "color:hotpink", id); }, [])

  const getTicketDetail = async () => {
    try {
      setTicketDetailStatus((prevStatus) => ({ ...prevStatus, loading: true }));
      const { data } = await app.get(`/ticket/show/${id}`, { headers: { authorization: `Bearer ${token}`, }, });
      const newSenderTexts =
        data.data?.children.length === 0
          ? [
            {
              mainDescription: data.data?.description,
              register_user_id: data.data?.register_user_id,
              responser_user_id: data.data?.responser_user_id,
              created_at: data.data.created_at,
              messages: [],
            },
          ]
          : [
            {
              mainDescription: data.data?.description,
              register_user_id: data.data?.register_user_id,
              responser_user_id: data.data?.responser_user_id,
              created_at: data.data.created_at,
              messages: data.data.children.map(
                (child: {
                  id: number;
                  description: string;
                  register_user_id: string;
                  responser_user_id: string;
                  created_at: string;
                }) => ({
                  childId: child.id,
                  description: child.description,
                  register_user_id: child?.register_user_id,
                  responser_user_id: child?.responser_user_id,
                  created_at: child.created_at,
                })
              ),
            },
          ];

      setTicketDetail((last: any) => ({
        ...last,
        Title: data.data?.title,
        RelavantUnit: data.data?.department?.name_fa,
        RelavantUnitId: data.data?.department?.id,
        Responser: "ادمین",
        Sender: data.data?.register_user.name + " " + data.data?.register_user.surname,
        DateSend: moment(data.data?.created_at, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("jYYYY/jM/jD"),
        DateAnswered: "-",
        SenderText: newSenderTexts,
        Blocked: data.data?.status?.title_en,
      }));
      setTicketDetailStatus((prevStatus) => ({ ...prevStatus, loading: false, }));
      console.log("%c DATA ==>", "color:yellow", data);
    } catch (error: any) {
      console.log(error.response.data.message);
      setTicketDetailStatus({ error: "", loading: false });
    }
  };

  const sendResponseTicket = async (description: string, ticketId: number) => {
    try {
      const { data } = await app.post(`/ticket/store`, { description, register_user_id: userProfile.id, ticket_id: ticketId, }, { headers: { authorization: `Bearer ${token}`, }, });
      console.log("sent ticket", data);
      getTicketDetail();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  //* FILE UPLOAD ===============================================================================================
  // const handleFileUpload = async () => {
  //   const formData = new FormData();
  //   formData.append("file", File);
  //   try {
  //     const { data } = await app.post(`/ticket/file/upload/${id}`,
  //       { formData, uploader_user_id: id },
  //       {
  //         headers: { Authorization: `Bearer ${token}`, "Content-Type": 'multipart/form-data', },
  //       }
  //     );
  //     toast.success("آپلود فایل موفق بود.", { position: "top-right", autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
  //     console.log("%c SUCCESS ===>", "color:green", data);
  //   } catch (error: any) {
  //     toast.error("خطا در آپلود فایل، لطفا مجدد آپلود کنید.", { position: "top-right", autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
  //     console.log("%c ERROR MESSAGE ===>", "color : orangered", error.response.data.message);
  //   }
  // };

  useEffect(() => { getTicketDetail(); }, []);

  useEffect(() => {
    const childsId = ticketDetail.SenderText[0]?.messages.map(
      (child: { childId: string }) => child.childId
    )[0];
    setTicketId(childsId);
    // const prevId = childsId ? childsId : id;
    const prevId = id as string;
    setTicketId(prevId);
  }, [ticketDetail.SenderText]);

  // * FILE UPLOAD ================================================================================================================================================
  function FILEUPLOAD(id: number | string) {
    const formData = new FormData();
    formData.append("DOCUMENT", File);
    const FILE_UPLOAD_INFO = { uploader_user_id: userProfile.id, file: File }
    app.post(`/ticket/file/upload/${ticketId}`, FILE_UPLOAD_INFO, { headers: { "Content-Type": "multipart/form-data", } })
      .then(response => {
        console.log("%c SUCCESS ====>", "color : lime", response)
        toast.success("آپلود فایل موفق بود.", { position: "top-right", autoClose: 1500, hideProgressBar: true, style: { fontSize: "14px", whiteSpace: "nowrap" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      })
      .catch(error => {
        console.log("%c ERROR ===> ", "color : orangered", error.response)
        toast.error("خطا در آپلود فایل، لطفا مجدد آپلود کنید.", { position: "top-right", autoClose: 1500, hideProgressBar: true, style: { fontSize: "14px", whiteSpace: "nowrap" }, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", transition: Bounce, rtl: true, });
      })
  }

  console.log("%c TICKET ID ===>", "color : crimson", ticketId);

  //^ RETURN ======================================================================================================================================== 
  return (
    <div className="relative">
      <div className="flex justify-end w-full text-xl cursor-pointer absolute -top-12" onClick={() => router.back()}  >
        <div className="rounded-md p-2 bg-white hover:bg-[#4866CF] hover:text-white duration-300">
          <IoArrowBack />
        </div>
      </div>
      <div className="bg-white shadow mx-auto rounded-lg py-[3%] px-[3%] w-full relative grid grid-cols-1 gap-8 lg:mt-0 mt-10">
        {ticketDetailStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : ticketDetailStatus.error ? (
          <NotFound text={`${ticketDetailStatus.error}`} />
        ) : (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <TicketInfoField label="عنوان تیکت:" text={ticketDetail.Title} ticketDetailStatus={ticketDetailStatus.loading} />
            <TicketInfoField label="مسئول پاسخگویی:" text={ticketDetail.Responser} ticketDetailStatus={ticketDetailStatus.loading} />
            <TicketInfoField label="واحد مربوطه تیکت:" text={ticketDetail.RelavantUnit ? ticketDetail.RelavantUnit : "-"} ticketDetailStatus={ticketDetailStatus.loading} />
            <TicketInfoField label="فرستنده تیکت:" text={ticketDetail.Sender} ticketDetailStatus={ticketDetailStatus.loading} />
            <TicketInfoField label="تاریخ ارسال تیکت:" text={ticketDetail.DateSend} ticketDetailStatus={ticketDetailStatus.loading} />
            <TicketInfoField label="تاریخ پاسخگویی:" text={ticketDetail.DateAnswered} ticketDetailStatus={ticketDetailStatus.loading} />
          </div>
        )}
        {ticketDetailStatus.loading ? (
          <SkeletonTheme>
            <Skeleton count={1} className="p-2" baseColor="#EAEFF6" />
          </SkeletonTheme>
        ) : ticketDetailStatus.error ? (
          <NotFound text={`${ticketDetailStatus.error}`} />
        ) : (
          ticketDetail.Blocked !== "close" && (
            <div>
              <div style={{ border: "none", borderTop: "3px solid", borderImage: "linear-gradient(to right, #FFFFFF 0%, #4866CE 45% ,#4866CE 55% , #FFFFFF 100%) 1", margin: "5% 0", }}></div>
              <Chat
                senderText={ticketDetail.SenderText}
                recieverText={"this is the reciever text"}
                textInput={textInput}
                setTextInput={setTextInput}
                File={File}
                handleFileChange={handleFileChange}
                handleFileUpload={FILEUPLOAD}
                sendResponseTicket={sendResponseTicket}
                fileSelected={fileSelected}
                ticketId={ticketId}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TicketDetail;
