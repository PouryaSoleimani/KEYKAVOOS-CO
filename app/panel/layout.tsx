/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import PanelNav from "@/components/panel/panel-nav";
import PanelSidebar from "@/components/panel/panel-sidebar";
import React, { useContext, useEffect, useState } from "react";
import { mainAdminSidebarOptions, userSidebarOptions } from "@/lib/data";
import { useDispatch, useSelector } from "react-redux";
import PanelNavSmall from "@/components/panel/panel-nav-small";
import PanelSidebarSmall from "@/components/panel/panel-sidebar-small";
import { deleteDataFromStorage, fetchUserProfile, getIdFromLocal, getTokenFromLocal, } from "@/redux/features/user/userSlice";
import Image from "next/image";
import nextarrow from "@/public/forwardarrow.svg";
import prevarrow from "@/public/backarrow.svg";
import DepartmentContextWrapper from "./admin/context/department-context/DepartmentContextWrapper";
import PermissionContextWrapper from "./admin/context/permission-context/PermissionContextWrapper";
import UserContextWrapper from "./admin/context/user-context/UserContextWrapper";
import { getAllDepartments, getAllPlans, getAllSiteTypes, getUserNotification, } from "@/utils/utils";
import { OrderSubmissionContext } from "./context/order-submission-contexts/OrderSubmissionContext";
import OrderSubmissionContextWrapper from "./context/order-submission-contexts/OrderSubmissionContextWrapper";
import { DepartmentContext } from "./admin/context/department-context/DepartmentContext";
import AttrIdContextWrapper from "./admin/plan-management/context/AttrIdContextWrapper";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { NotificationDetailType } from "./admin/notifications-management/notification-details/page";

// ^ COMPONENT
const PanelLayout = ({ children }: { children: React.ReactNode }) => {

  const { token, userProfile, status, numberOfAnnouncements, role, userId } = useSelector((store: any) => store.userData);
  const [localToken, setLocalToken] = useState("");
  const [userNotifications, setUserNotifications] = useState<NotificationDetailType>([]);
  const { setAllPlans, setSiteTypes } = useContext(OrderSubmissionContext);
  const { setDepartments } = useContext(DepartmentContext);
  const [showAnnouncementDropdown, setShowAnnouncementDropdown] = useState(false);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = role === "Admin" ? mainAdminSidebarOptions.slice(startIndex, endIndex) : userSidebarOptions.slice(startIndex, endIndex);

  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 < Math.ceil(userSidebarOptions.length / itemsPerPage)
        ? prevPage + 1
        : prevPage
    );
  };

  const handlePrevClick = () => { setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage)); };

  useEffect(() => {
    dispatch(getTokenFromLocal());
    dispatch<any>(fetchUserProfile());
    dispatch(getIdFromLocal());
  }, []);

  useEffect(() => {
    const token = JSON.parse(window.sessionStorage.getItem("token") as string);
    setLocalToken(token);
  }, []);

  useEffect(() => {
    Promise.all([
      getAllPlans(token, setAllPlans),
      getUserNotification(token, Number(userId), setUserNotifications),
      getAllSiteTypes(token, setSiteTypes),
      getAllDepartments(token, setDepartments),
    ]);
  }, [token, setAllPlans, setSiteTypes, setDepartments, userId, setUserNotifications,]);



  //^ RETURN
  return (
    <OrderSubmissionContextWrapper>
      <UserContextWrapper>
        <DepartmentContextWrapper>
          <PermissionContextWrapper>
            <AttrIdContextWrapper>
              <div className="font-YekanBakh flex w-full flex-row relative min-h-screen bg-white" style={{ boxShadow: "0px 0px 90px 2px rgba(0, 0, 0, 0.25)" }} dir="rtl" >
                <Toaster position="top-left" reverseOrder={true} />
                {localToken && (
                  <React.Fragment>
                    <div className="hidden lg:block">
                      <PanelSidebar sideOptions={role === "Admin" ? mainAdminSidebarOptions : userSidebarOptions} status={status} />
                    </div>
                    <div className="w-full lg:overflow-hidden">
                      <div>
                        <PanelNav userProfile={userProfile} status={status} userType={role} numberOfAnnouncements={userNotifications} setShowAnnouncementDropdown={setShowAnnouncementDropdown} showAnnouncementDropdown={showAnnouncementDropdown} />
                      </div>
                      <div className="bg-[#EAEFF6] h-full px-[5%] md:p-[5%] py-[5%]" onMouseEnter={() => setShowAnnouncementDropdown(false)} >
                        {children}
                      </div>
                      <div className="lg:hidden flex flex-row bg-[#4866CF] transition-all rounded-md w-full">
                        <Image src="/backarrow.svg" alt="" onClick={() => handlePrevClick()} className={`${currentPage === 0 ? "hidden" : "flex"}`} width={30} height={30} />
                        <PanelSidebarSmall sideOptions={displayedItems} />
                        <Image src="/forwardarrow.svg" alt="" onClick={() => handleNextClick()} width={30} height={30} className={`${currentPage + 1 === Math.ceil(userSidebarOptions.length / itemsPerPage) ? "hidden" : "flex"}`} />
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </AttrIdContextWrapper>
          </PermissionContextWrapper>
        </DepartmentContextWrapper>
      </UserContextWrapper>
    </OrderSubmissionContextWrapper>
  );
};
export default PanelLayout;
