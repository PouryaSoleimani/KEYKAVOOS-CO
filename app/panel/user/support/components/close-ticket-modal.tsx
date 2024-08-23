"use client";
import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type ModalProps = {
  showModal: boolean;
  text: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAllTickets: any;
  closeTicketId: string | null;
};
function CloseTicketModal({
  showModal,
  text,
  setShowModal,
  setAllTickets,
  closeTicketId,
}: ModalProps) {
  const { localToken, localUserId } = useSelector(
    (state: any) => state.userData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIdFromLocal());
    dispatch(getTokenFromLocal());
    dispatch<any>(fetchUserProfile());
  }, []);
  const handleCloseTicket = async (ticketId: any) => {
    try {
      const { data } = await axios(
        `https://keykavoos.liara.run/Client/CloseTicket/${localUserId}/${ticketId}`,
        {
          headers: {
            authorization: `Bearer ${localToken}`,
          },
        }
      );
      console.log(data);

      // Update the Blocked property in the ticket with the matching ticketId
      setAllTickets((prevTickets: any) =>
        prevTickets.map((ticket: any) =>
          ticket._id === ticketId ? { ...ticket, Blocked: "true" } : ticket
        )
      );
      const urlWithoutId = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", urlWithoutId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal ? "block" : "hidden"
      }  absolute top-0 left-0 flex justify-center items-center w-full text-center z-50 backdrop-blur-sm h-full`}
    >
      <div className="p-4 w-full flex justify-center items-center">
        <div className="relative p-8 w-full max-w-2xl max-h-full">
          <div className="bg-white rounded-[25px] shadow border">
            <div className="md:p-5 text-black font-semibold">
              <p className="text-[20px] leading-relaxed max-w-sm mx-auto py-3">
                {text}
              </p>
            </div>

            <div className="flex items-center justify-between p-4 md:p-5 rounded-b">
              <button
                type="button"
                className="text-white bg-[#4866CF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center"
              >
                <span
                  onClick={() => (
                    handleCloseTicket(closeTicketId), setShowModal(false)
                  )}
                >
                  بستن تیکت
                </span>
              </button>
              <div>
                <button
                  type="button"
                  className={`md:py-2.5 md:px-5 ms-3 px-5 text-sm font-medium focus:outline-none rounded-lg border border-[#4866CF]`}
                  onClick={() => setShowModal(false)}
                >
                  خیر
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseTicketModal;
