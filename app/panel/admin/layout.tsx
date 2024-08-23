"use client";

import {
  fetchUserProfile,
  getIdFromLocal,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
import {
  getAllBrands,
  getAllDepartments,
  getAllPermissions,
  getAllPositions,
  getAllRole,
  getAllSiteTypes,
  getAllUsers,
  getUserNotification,
} from "@/utils/utils";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderSubmissionContext } from "../context/order-submission-contexts/OrderSubmissionContext";
import { RoleContext } from "./context/role-context/RoleContext";
import { PermissionContext } from "./context/permission-context/PermissionContext";
import { PositionContext } from "./context/position-context/PositionContext";
import { DepartmentContext } from "./context/department-context/DepartmentContext";
import { UserContext } from "./context/user-context/UserContext";
import { BrandType } from "./org_management/brands/page";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { token, userId } = useSelector((store: any) => store.userData);
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [userNotifications, setUserNotifications] = useState([]);
  const { setAllPlans, setSiteTypes } = useContext(OrderSubmissionContext);
  const { setRoles, setDataLoading } = useContext(RoleContext);
  const { setPermissions, setPermissionStatus } = useContext(PermissionContext);
  const { setPositions } = useContext(PositionContext);
  const { setDepartments } = useContext(DepartmentContext);
  const { setAllUsersData, setUsersStatus } = useContext(UserContext);
  const [brands, setBrands] = useState<BrandType[]>([]);
  useEffect(() => {
    dispatch(getTokenFromLocal());
    dispatch<any>(fetchUserProfile());
    dispatch(getIdFromLocal());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localRole = JSON.parse(
        window.localStorage.getItem("role") as string
      );
      setRole(localRole);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([
        getAllUsers(token, setAllUsersData, setUsersStatus),
        getUserNotification(token, Number(userId), setUserNotifications),
        getAllPositions(token, setPositions),
        getAllPermissions(token, setPermissions, setPermissionStatus),
        getAllRole(token, setRoles, setDataLoading),
        getAllBrands(setBrands),
      ]);
    }
  }, [
    token,
    setAllPlans,
    setSiteTypes,
    setDepartments,
    setPermissions,
    setUsersStatus,
    setPositions,
    setRoles,
    setAllUsersData,
    setPermissionStatus,
  ]);
  return <div dir="rtl">{role === "Admin" && children}</div>;
};
export default AdminLayout;
