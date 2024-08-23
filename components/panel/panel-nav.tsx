"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import notification from "../../public/Panel/notif.svg";
import maleicon from "../../public/maleicon.svg";
import exit from "../../public/Panel/exit.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { changeNotificationStatus } from "@/utils/utils";
type NavProps = {
  userProfile: any;
  status: string;
  userType: string;
  numberOfAnnouncements: any;
  setShowAnnouncementDropdown: Dispatch<SetStateAction<boolean>>;
  showAnnouncementDropdown: boolean;
};

const PanelNav = ({
  userProfile,
  status,
  numberOfAnnouncements,
  setShowAnnouncementDropdown,
  showAnnouncementDropdown,
}: NavProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isRead, setIsRead] = useState(null);
  const { token } = useSelector((state: any) => state.userData);
  const clickHandler = (notif_id: number, read_at: string | null) => {
    if (read_at === null) {
      setIsRead(read_at);
      changeNotificationStatus(token, notif_id);
    }
  };

  return (
    <div
      className="flex flex-col items-end relative justify-center"
      dir="rtl"
      onMouseLeave={() => setShowAnnouncementDropdown(false)}
    >
      <div className="flex justify-center lg:justify-end items-center font-YekanBakh font-bold w-full p-3 px-9 border-b-2 border-r-[0.3px] overflow-hidden rounded-lt-lg ">
        <div className="flex flex-row gap-3 items-center py-1">
          <div>
            <div className="rounded-full bg-[#EAEFF6] flex justify-center items-center p-2 relative">
              <Image
                src={notification}
                alt="notification-bell"
                width={42}
                className="cursor-pointer"
                onMouseEnter={() => setShowAnnouncementDropdown(true)}
              />
              <p className="bg-[#4866CF] font-faNum text-white p-2 rounded-full flex items-center justify-center w-[20px] h-[20px] absolute top-0 right-0">
                <span>{numberOfAnnouncements.length}</span>
              </p>
            </div>
            {showAnnouncementDropdown && (
              <div
                className={`absolute ${
                  numberOfAnnouncements.length !== 0
                    ? "-bottom-[2.5rem] p-1"
                    : "-bottom-[1.25rem]"
                }  bg-white w-[200px] rounded-[4px]`}
                onMouseLeave={() => setShowAnnouncementDropdown(false)}
              >
                {numberOfAnnouncements.length === 0
                  ? "اعلانی وجود ندارد."
                  : numberOfAnnouncements.map(
                      (announce: {
                        text: string;
                        id: number;
                        read_at: string | null;
                      }) => (
                        <div
                          key={announce.id}
                          className="flex justify-between p-3"
                        >
                          <p>{announce.text}</p>
                          <div>
                            <p
                              className={`w-[20px] h-[20px] rounded-full ${
                                announce.read_at
                                  ? "bg-green-800 cursor-default"
                                  : "bg-red-800 cursor-pointer"
                              }`}
                              onClick={() =>
                                clickHandler(announce.id, announce.read_at)
                              }
                            ></p>
                          </div>
                        </div>
                      )
                    )}
              </div>
            )}
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <div className="flex justify-center items-center gap-4">
              {status !== "success" ? (
                <SkeletonTheme borderRadius="100%">
                  <Skeleton width={60} height={60} baseColor="#EAEFF6" />
                </SkeletonTheme>
              ) : userProfile.pic_path ? (
                <div className="bg-[#EAEFF6] p-2 rounded-full">
                  <img
                    alt="profile"
                    src={`http://localhost:8000/storage/${userProfile.pic_path}`}
                    className="rounded-full w-[45px] h-[45px]"
                  />
                </div>
              ) : (
                <Image src={maleicon} alt="default-pic" />
              )}
              <div
                className="rounded-full bg-[#EAEFF6] flex justify-center items-center p-3 cursor-pointer"
                onClick={() => (dispatch(logoutUser()), router.replace("/"))}
              >
                <Image src={exit} alt="exit" width={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanelNav;
