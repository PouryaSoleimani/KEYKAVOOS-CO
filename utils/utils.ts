import { BrandDetailType } from "@/app/panel/admin/org_management/departments/department-detail/page";
import { BrandType } from "@/app/panel/admin/org_management/brands/page";
import {
  DepartmentFinalType,
  DepartmentType,
} from "@/app/panel/admin/org_management/departments/page";
import { ValueType } from "@/app/panel/admin/plan-management/components/value-component";
import { PlanType } from "@/app/panel/admin/plan-management/page";
import { PlanAttrType } from "@/app/panel/admin/plan-management/plan-detail/page";
import { PermissionType } from "@/app/panel/admin/view-users/permission-management/page";
import { PositionType } from "@/app/panel/admin/view-users/position-management/page";
import { RoleType } from "@/app/panel/admin/view-users/role-management/page";
import app from "@/services/service";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
import { ConsultTypes } from "@/app/panel/admin/consultations/page";
import { ConsultationDetail } from "@/app/panel/admin/consultations/consult-detail/page";
import {
  ColorType,
  PluginType,
  SimilarSiteType,
  TemplateType,
} from "@/app/panel/user/submit-order/page";

// create notification
export const createNotification = async (
  token: string,
  dept_id: number,
  brand_id: number,
  user_id: number,
  text: string
) => {
  try {
    console.log("user_id", user_id);
    // console.log("text", text);
    const { data } = await app.post(
      "/notification/store",
      {
        dept_id,
        brand_id,
        user_id,
        text,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data);
    toast.success("نوتیفیکیشن با موفقیت ارسال شد.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    toast.error("خطا در ارسال نوتیفیکیشن", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    // console.log(error.response.data.message);
  }
};
// get user notification
export const getUserNotification = async (
  token: string,
  userId: number,
  setUserNotifications: Dispatch<SetStateAction<never[]>>
) => {
  try {
    // console.log("user_id", token);
    const { data } = await app(`/notification/getUserNotification/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserNotifications(data.data);
    // console.log("notif", data);
  } catch (error: any) {
    // console.log(error.response.data.message);
  }
};
// get all notifs
export const getAllNotifications = async (token: string) => {
  try {
    const { data } = await app(`/notifications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("notifs", data);
  } catch (error: any) {
    // console.log(error.response.data.message);
  }
};
export const changeNotificationStatus = async (
  token: string,
  notif_id: number
) => {
  try {
    const { data } = await app.post(
      `/notification/change_status`,
      {
        notif_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("notifs", data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// budget seperation
export const handleBudegtChange = (value: string) => {
  const rawValue = value.replace(/,/g, "");
  const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedValue;
};
// Logout
export const logout = async () => {
  try {
    const { data } = await app.post("/v1/user/logout", {});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// send otp code
export const sendOTPCodeForRegistrationForHoghooghi = async (
  name: string,
  surname: string,
  type: string,
  mobile: string,
  password: string,
  ncode: string,
  org_name: string,
  org_registration_number: string,
  org_address: string,
  org_phone: string,
  shenase_melli: string,
  setSteps: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const data = await app.post("/registerotp", {
      name,
      surname,
      type,
      mobile,
      password,
      ncode,
      org_name,
      org_registration_number,
      org_address,
      org_phone,
      org_shenase_melli: shenase_melli,
    });
    // sendOTPCodeMain(mobile);
    setSteps(2);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const sendOTPCodeForRegistrationForHaghighi = async (
  name: string,
  surname: string,
  type: string,
  mobile: string,
  password: string,
  ncode: string,
  setSteps: React.Dispatch<React.SetStateAction<number>>
) => {
  console.log(name, surname, type, mobile, password, ncode);
  try {
    const data = await app.post(
      "/registerotp",
      {
        name,
        surname,
        type,
        mobile,
        password,
        ncode,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    // sendOTPCodeMain(mobile);
    setSteps(2);
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// send otp code for login and general
export const sendOTPCodeMain = async (
  mobile: string,
  setSteps: React.Dispatch<React.SetStateAction<number>>
) => {
  try {
    const { data } = await app.post("/loginotp", {
      mobile,
    });
    console.log(data);
    toast.success("کد با موفقیت ارسال شد.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setSteps(2);
  } catch (error: any) {
    toast.error("خطا در ارسال کد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error.response.data.message);
  }
};

// save info to local storage
export const saveToLocalStorage = (key: string, value: string) => {
  window.localStorage.setItem(`${key}`, value);
};
// show plan detail
export const showPlanAttrInfo = async (token: string, attrId: number) => {
  try {
    const { data } = await app(`/attr/show/${attrId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// getting all the users
export const getAllUsers = async (
  token: string,
  setAllUsers: React.Dispatch<any>,
  setDataStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
    }>
  >
) => {
  try {
    setDataStatus && setDataStatus((last) => ({ ...last, loading: true }));
    const { data } = await app.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.sessionStorage.setItem("users", JSON.stringify(data.data));
    setAllUsers(data.data);
    // console.log("all users data", data);
  } catch (error: any) {
    // console.log(error.response.data.message);
    setDataStatus &&
      setDataStatus((last) => ({
        ...last,
        error: "کاربری یافت نشد.",
      }));
  } finally {
    setDataStatus && setDataStatus((last) => ({ ...last, loading: false }));
  }
};
// deleting user by admin
export const deleteUser = async (
  userId: number,
  token: string,
  setAllUsers: React.Dispatch<any>,
  AllUsersData: never[]
) => {
  try {
    const { data } = await app.delete(`/user/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("کاربر با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setAllUsers(
      AllUsersData.filter((item: { id: number }) => item.id !== userId)
    );
    // getAllUsers(token, setAllUsers, setDataStatus);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف کاربر", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get all positions
export const getAllPositions = async (
  token: string,
  setPositions: React.Dispatch<React.SetStateAction<PositionType[]>>,
  setPositionsStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setPositionsStatus &&
      setPositionsStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/positions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPositions(data.data);
    console.log(data);
    window.sessionStorage.setItem("positions", JSON.stringify(data.data));
  } catch (error: any) {
    console.log(error.response.data.message);
    setPositionsStatus &&
      setPositionsStatus((last) => ({ ...last, error: "جایگاهی یافت نشد." }));
  } finally {
    setPositionsStatus &&
      setPositionsStatus((last) => ({ ...last, loading: false }));
  }
};
// update position by admin
export const updatePosition = async (
  token: string,
  positionId: number | null,
  title_en: string,
  title_fa: string,
  dept_id: number,
  user_id: number
) => {
  try {
    const { data } = await app.post(
      `/position/update/${positionId}`,
      {
        title_en,
        title_fa,
        dept_id,
        user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("موقعیت با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی موقعیت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete position by admin
export const deletePosition = async (
  positionId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/position/delete/${positionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("موقعیت با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف موقعیت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore position by admin
export const restorePosition = async (
  positionId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/position/restore/${positionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("موقعیت با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی موقعیت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get position detail
export const getPositionDetail = async (
  token: string,
  positionId: string | null,
  setPositionDetail: React.Dispatch<
    React.SetStateAction<{
      title_en: string;
      title_fa: string;
    }>
  >
) => {
  try {
    const { data } = await app.get(
      `/position/show/${positionId ? positionId : ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    setPositionDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// create position by admin
export const createNewPosition = async (
  token: string,
  title_en: string,
  title_fa: string,
  dept_id: number,
  user_id: number
) => {
  try {
    const { data } = await app.post(
      "/position/store",
      {
        title_en,
        title_fa,
        dept_id,
        user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("موقعیت با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    // console.log(data);
  } catch (error: any) {
    toast.error("خطا در ایجاد موقعیت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    // console.log(error.response.data.message);
  }
};
// get all roles
export const getAllRole = async (
  token: string,
  setRoles: React.Dispatch<React.SetStateAction<RoleType[]>>,
  setDataLoading?: Dispatch<
    SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setDataLoading && setDataLoading((last) => ({ ...last, loading: true }));
    const { data } = await app("/roles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRoles(data.data);
    window.sessionStorage.setItem("roles", JSON.stringify(data.data));
    console.log(data);
  } catch (error: any) {
    setDataLoading &&
      setDataLoading((last) => ({ ...last, error: "نقشی یافت نشد." }));
    console.log(error.response.data.message);
  } finally {
    setDataLoading && setDataLoading((last) => ({ ...last, loading: false }));
  }
};
// update role by admin
export const updateRole = async (
  token: string,
  roleId: number | null,
  name_en: string,
  name_fa: string
) => {
  try {
    const { data } = await app.post(
      `/role/update/${roleId}`,
      {
        name_en,
        name_fa,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("نقش با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی نقش", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete role by admin
export const deleteRole = async (
  roleId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/role/delete/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("نقش با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف نقش", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore role by admin
export const restoreRole = async (
  roleId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/role/restore/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("نقش با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی نقش", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get role detail
export const getRoleDetail = async (
  token: string,
  roleId: string | null,
  setRoleDetail: React.Dispatch<
    React.SetStateAction<{
      name_en: string;
      name_fa: string;
    }>
  >
) => {
  try {
    const { data } = await app.get(`/role/show/${roleId ? roleId : ""}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setRoleDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// create role by admin
export const createNewRole = async (
  token: string,
  name_en: string,
  name_fa: string
) => {
  try {
    const { data } = await app.post(
      "/role/store",
      {
        name_en,
        name_fa,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("نقش با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    toast.error("خطا در ایجاد نقش", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// get all permissions
export const getAllPermissions = async (
  token: string,
  setPermissions: React.Dispatch<React.SetStateAction<PermissionType[]>>,
  setDataStatus: Dispatch<
    SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setDataStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/permissions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPermissions(data.data);
    window.sessionStorage.setItem("permissions", JSON.stringify(data.data));
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
    if (error.response.data.message === "permission-notFound") {
      setDataStatus((last) => ({ ...last, error: "دسترسی ای یافت نشد." }));
    } else {
      setDataStatus((last) => ({ ...last, error: "خطا در دریافت اطلاعات." }));
    }
  } finally {
    setDataStatus((last) => ({ ...last, loading: false }));
  }
};
// get permission detail
export const getPermissionDetail = async (
  token: string,
  permissionId: string | null,
  setPermissionDetail: React.Dispatch<
    React.SetStateAction<{
      name_en: string;
      name_fa: string;
    }>
  >
) => {
  try {
    const { data } = await app.get(
      `/permission/show/${permissionId ? permissionId : ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    setPermissionDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// create brand by admin
export const createNewPermission = async (
  token: string,
  name_en: string,
  name_fa: string
) => {
  try {
    const { data } = await app.post(
      "/permission/store",
      {
        name_en,
        name_fa,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("دسترسی با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    toast.error("خطا در ایجاد دسترسی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// update permission by admin
export const updatePermission = async (
  token: string,
  permissionId: number | null,
  name_en: string,
  name_fa: string
) => {
  try {
    const { data } = await app.post(
      `/permission/update/${permissionId}`,
      {
        name_en,
        name_fa,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("دسترسی با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی دسترسی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete permission by admin
export const deletePermission = async (
  permissionId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/permission/delete/${permissionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data);
    toast.success("دسترسی با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    // console.log(data);
  } catch (error) {
    // console.log(error);
    toast.error("خطا در حذف دسترسی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore permission by admin
export const restorePermission = async (
  permissionId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/permission/restore/${permissionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("دسترسی با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی دسترسی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get all brands
export const getAllBrands = async (
  setBrands: React.Dispatch<React.SetStateAction<BrandType[]>>,
  setBrandStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setBrandStatus && setBrandStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/brands");
    setBrands(data.data);
    // console.log(data);
    window.sessionStorage.setItem("brands", JSON.stringify(data.data));
  } catch (error) {
    // console.log(error);
    setBrandStatus &&
      setBrandStatus((last) => ({ ...last, error: "برندی یافت نشد." }));
  } finally {
    setBrandStatus && setBrandStatus((last) => ({ ...last, loading: false }));
  }
};
// get brand details
export const getBrandDetail = async (
  brandId: string | null,
  setBrandDetail: React.Dispatch<React.SetStateAction<BrandDetailType>>,
  setBrandDetailStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setBrandDetailStatus &&
      setBrandDetailStatus((last) => ({ ...last, loading: true }));
    const { data } = await app.get(`/brand/show/${brandId ? brandId : ""}`);
    console.log("brand detail", data);
    setBrandDetail(data.data);
  } catch (error) {
    console.log(error);
    setBrandDetailStatus &&
      setBrandDetailStatus((last) => ({ ...last, error: "برندی یافت نشد." }));
  } finally {
    setBrandDetailStatus &&
      setBrandDetailStatus((last) => ({ ...last, loading: false }));
  }
};
// delete brand by admin
export const deleteBrand = async (
  brandId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/brand/delete/${brandId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("برند با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف برند", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore brand by admin
export const restoreBrand = async (
  brandId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/brand/restore/${brandId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("برند با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی برند", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// create brand by admin
export const createNewBrand = async (
  token: string,
  title: string,
  description: string
) => {
  try {
    const { data } = await app.post(
      "/brand/store",
      {
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("برند با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    toast.error("خطا در ایجاد برند", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// update brand by admin
export const updateBrand = async (
  token: string,
  brandId: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      `/brand/update/${brandId}`,
      {
        title: title || "",
        description: description || "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("برند با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی برند", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get all projects
export const getAllProjects = async (
  token: string,
  setAllProjects: React.Dispatch<React.SetStateAction<never[]>>,
  setProjectStatus: React.Dispatch<
    React.SetStateAction<{
      error: string;
      loading: boolean;
    }>
  >
) => {
  try {
    setProjectStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("all projects", data);
    setAllProjects(data.data);
  } catch (error: any) {
    // console.log(error.response.data.message);
    if (error.response.data.message === "project-notFound") {
      setProjectStatus((last) => ({ ...last, error: "پروژه ای یافت نشد." }));
    } else {
      setProjectStatus((last) => ({
        ...last,
        error: "خطا در دریافت اطلاعات.",
      }));
    }
  } finally {
    setProjectStatus((last) => ({ ...last, loading: false }));
  }
};

// file upload in project
export const uploadProjectFile = async (
  token: string,
  projectId: number,
  userId: number,
  File: File
) => {
  const formData = new FormData();
  formData.append("file", File);
  try {
    const { data } = await app.post(
      `/project/file/upload/${projectId}`,
      { formData, register_user_id: userId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("آپلود فایل موفق بود.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    toast.error("خطا در آپلود فایل، لطفا مجدد آپلود کنید.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// create new plan by admin
export const createNewplan = async (
  token: string,
  title: string,
  description: string
) => {
  try {
    const { data } = await app.post(
      "/plan/store",
      {
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("پلن با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    toast.error("خطا در ایجاد پلن", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// get all plans by admin
export const getAllPlans = async (
  token: string,
  setPlans: React.Dispatch<React.SetStateAction<PlanType[]>>,
  setPlansStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setPlansStatus && setPlansStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/plans", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPlans(data.data);
    // console.log("all plans", data);
    window.sessionStorage.setItem("plans", JSON.stringify(data.data));
  } catch (error) {
    // console.log(error);
    setPlansStatus &&
      setPlansStatus((last) => ({ ...last, error: "پلنی بافت نشد." }));
  } finally {
    setPlansStatus && setPlansStatus((last) => ({ ...last, loading: false }));
  }
};
// update a plan by admin
export const updatePlan = async (
  token: string,
  planId: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      `/plan/update/${planId}`,
      {
        title: title || "",
        description: description || "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("پلن با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی پلن", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete plan by admin
export const deletePlan = async (
  planId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>,
  setAllPlans: React.Dispatch<React.SetStateAction<PlanType[]>>
) => {
  try {
    const { data } = await app.get(`/plan/delete/${planId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("پلن با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
    getAllPlans(token, setAllPlans);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف پلن", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore plan by admin
export const restorePlan = async (
  planId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/plan/restore/${planId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("پلن با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی پلن", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get plan detail
export const getPlanDetail = async (
  planId: string | null,
  setPlanDetail: React.Dispatch<React.SetStateAction<BrandDetailType>>
) => {
  try {
    const { data } = await app.get(`/plan/show/${planId ? planId : ""}`);
    console.log("plan detail", data);
    setPlanDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// get plan attrs
export const getPlanAttrs = async (
  token: string,
  setPlanAttrs: React.Dispatch<React.SetStateAction<PlanAttrType[]>>
) => {
  try {
    const { data } = await app.get("/attrs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("plan attrs", data);
    setPlanAttrs(data.data);
  } catch (error) {
    console.log(error);
  }
};
// create new plan attribute by admin
export const createNewPlanAttr = async (
  planId: number,
  token: string,
  title: string,
  description: string,
  setPlanAttrs: React.Dispatch<React.SetStateAction<PlanAttrType[]>>
) => {
  try {
    const { data } = await app.post(
      "/attr/store",
      {
        plan_id: planId,
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("ویژگی برای پلن مدنظر با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
    getPlanAttrs(token, setPlanAttrs);
  } catch (error) {
    toast.error("خطا در ایجاد ویژگی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// delete plan attr by admin
export const deletePlanAttr = async (
  attrId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/attr/delete/${attrId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("ویژگی موردنظر با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف ویژگی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore plan attr by admin
export const restorePlanAttr = async (
  attrId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/attr/restore/${attrId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("ویژگی مدنظر با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی ویژگی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// update plan attr by admin
export const updatePlanAttr = async (
  attrId: number,
  token: string,
  planId: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      `/attr/update/${attrId}`,
      {
        plan_id: planId,
        title: title || "",
        description: description || "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("ویژگی با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی ویژگی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// create new plan value by admin
export const createNewPlanValue = async (
  attrId: number,
  planId: number,
  token: string,
  title: string,
  description: string,
  setPlanAttrs: React.Dispatch<React.SetStateAction<PlanAttrType[]>>
) => {
  try {
    console.log(attrId, planId, title, description);
    const { data } = await app.post(
      "/value/store",
      {
        attr_id: attrId,
        plan_id: planId,
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("مقدار مدنظر با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    getPlanAttrs(token, setPlanAttrs);
    // console.log(data);
  } catch (error: any) {
    toast.error("خطا در ایجاد مقدار", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    // console.log(error.response.data.message);
  }
};
// get all values of the plan
export const getPlanValues = async (
  token: string,
  setPlanValues: React.Dispatch<React.SetStateAction<ValueType[]>>
) => {
  try {
    const { data } = await app("/values", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("plan values", data);
    setPlanValues(data.data);
  } catch (error) {
    console.log(error);
  }
};
// restore plan values by admin
export const restorePlanValues = async (
  valueId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/value/restore/${valueId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("مقدار با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی مقدار", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get all values of the plan
export const getPlanValueDetail = async (
  token: string,
  setPlanValueDetail: React.Dispatch<React.SetStateAction<ValueType[]>>,
  valueId: string
) => {
  try {
    const { data } = await app(`/value/${valueId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setPlanValueDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// update plan value by admin
export const updatePlanValue = async (
  token: string,
  attrId: number,
  planId: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      `/value/update`,
      {
        title: title || "",
        description: description || "",
        plan_id: planId,
        attr_id: attrId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("مقدار با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی مقدار", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete plan value by admin
export const deletePlanValue = async (
  valueId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/value/delete/${valueId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("مقدار با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف مقدار", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// create new site type by admin
export const CreateNewSiteType = async (
  token: string,
  title: string,
  description: string
) => {
  try {
    const { data } = await app.post(
      "/type/store",
      {
        title,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("طراحی جدید با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error: any) {
    toast.error("خطا در ایجاد طراحی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error.response.data.message);
  }
};
// get all site types
export const getAllSiteTypes = async (
  token: string,
  setSiteTypes: React.Dispatch<React.SetStateAction<SimilarSiteType[]>>
) => {
  try {
    const { data } = await app("/types");
    setSiteTypes(data.data);
    // console.log(data);
    window.sessionStorage.setItem("site-types", JSON.stringify(data.data));
  } catch (error: any) {
    // console.log(error.response.data.message);
  }
};
// update site type by admin
export const updateSiteType = async (
  token: string,
  siteTypeId: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      `/type/update/${siteTypeId}`,
      {
        title: title || "",
        description: description || "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("طراحی با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی طراحی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete site type by admin
export const deleteSiteType = async (
  brandId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/type/delete/${brandId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("طراحی با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف طراحی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore site type by admin
export const restoreSiteType = async (
  siteType: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/type/restore/${siteType}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("طراحی با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی طراحی", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get newsletters
export const getAllNewsletters = async (
  token: string,
  setNewsLetters: Dispatch<SetStateAction<never[]>>,
  setNewsLetterStatus?: Dispatch<
    SetStateAction<{
      loading: boolean;
      erorr: string;
    }>
  >
) => {
  try {
    setNewsLetterStatus &&
      setNewsLetterStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/newsletters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data);
    setNewsLetters(data?.data);
  } catch (error: any) {
    // console.log(error);
    if (error.response.data.message == "newsletter-notFound") {
      setNewsLetterStatus &&
        setNewsLetterStatus((last) => ({
          ...last,
          erorr: "خبرنامه ای یافت نشد.",
        }));
    }
  } finally {
    setNewsLetterStatus &&
      setNewsLetterStatus((last) => ({ ...last, loading: false }));
  }
};
// update newsletter by admin
export const updateNewsLetter = async (
  token: string,
  newsLetterId: number,
  user_id: number | null,
  dept_id: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      `/newsletter/update/${newsLetterId}`,
      {
        title: title || "",
        description: description || "",
        user_id,
        dept_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("خبرنامه با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی خبرنامه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// create new newsletter by admin
export const createNewsLetter = async (
  token: string,
  user_id: number | null,
  dept_id: number | null,
  title: string | null,
  description: string | null
) => {
  try {
    const { data } = await app.post(
      "/newsletter/store",
      {
        title,
        description,
        user_id,
        dept_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("خبرنامه با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    // console.log(data);
  } catch (error) {
    toast.error("خطا در ایجاد خبرنامه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    // console.log(error);
  }
};
// delete newsletter by admin
export const deleteNewsLetter = async (
  token: string,
  newsletterId: number,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>,
  setNewsLetters: Dispatch<SetStateAction<never[]>>
) => {
  try {
    const { data } = await app.get(`/newsletter/delete/${newsletterId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("خبرنامه موردنظر با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    getAllNewsletters(token, setNewsLetters);
  } catch (error) {
    toast.error("خطا در حذف خبرنامه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore newsletter by admin
export const restoreNewsletter = async (
  token: string,
  newsletterId: number,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>,
  setNewsLetters: Dispatch<SetStateAction<never[]>>
) => {
  try {
    const { data } = await app.get(`/newsletter/restore/${newsletterId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("خبرنامه مدنظر با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    getAllNewsletters(token, setNewsLetters);
  } catch (error) {
    toast.error("خطا در بازگردانی خبرنامه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get newsletter detail
export const getNewsLetterDetail = async (
  token: string,
  newsletterId: string | null,
  setNewsLetterDetail: React.Dispatch<React.SetStateAction<BrandDetailType>>
) => {
  try {
    const { data } = await app.get(`/newsletter/show/${newsletterId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setNewsLetterDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// get departments
export const getAllDepartments = async (
  token: string,
  setDepartments: Dispatch<
    SetStateAction<DepartmentType[] | DepartmentFinalType[]>
  >,
  setDepartmentLoading?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setDepartmentLoading &&
      setDepartmentLoading((last) => ({ ...last, loading: true }));
    const { data } = await app("/departments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data);
    setDepartments(data.data);
    window.sessionStorage.setItem("departments", JSON.stringify(data.data));
  } catch (error: any) {
    // console.log(error.response.data.message);
    setDepartmentLoading &&
      setDepartmentLoading((last) => ({
        ...last,
        error: "دپارتمانی یافت نشد.",
      }));
  } finally {
    setDepartmentLoading &&
      setDepartmentLoading((last) => ({ ...last, loading: false }));
  }
};
// update department by admin
export const updateDepartment = async (
  token: string,
  departmentId: number,
  name_en: string,
  name_fa: string
) => {
  try {
    const { data } = await app.post(
      `/department/update/${departmentId}`,
      {
        name_en,
        name_fa,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("دپارتمان با موفقیت به روزرسانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در به روزرسانی دپارتمان", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// delete department by admin
export const deleteDepartment = async (
  departmentId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/department/delete/${departmentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("دپارتمان با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف دپارتمان", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore department by admin
export const restoreDepartment = async (
  departmentId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/department/restore/${departmentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("دپارتمان با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی دپارتمان", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get department detail
export const getDepartmentDetail = async (
  token: string,
  departmentId: string | null,
  setDepartmentDetail: React.Dispatch<React.SetStateAction<BrandDetailType>>
) => {
  try {
    const { data } = await app.get(`/department/show/${departmentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setDepartmentDetail(data.data);
  } catch (error) {
    console.log(error);
  }
};
// create new department by admin
export const createNewDepartment = async (
  token: string,
  name_en: string,
  name_fa: string
) => {
  try {
    const { data } = await app.post(
      "/department/store",
      {
        name_en,
        name_fa,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("دپارتمان با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(data);
  } catch (error) {
    toast.error("خطا در ایجاد دپارتمان", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error);
  }
};
// get all consultations
export const getAllConsultations = async (
  token: string,
  setAllConsults: React.Dispatch<React.SetStateAction<ConsultTypes[]>>,
  setConsultStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      erorr: string;
    }>
  >
) => {
  try {
    setConsultStatus &&
      setConsultStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/consults", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("all consultations", data);
    setAllConsults(data.data);
  } catch (error: any) {
    console.log(error.response.data.message);
    setConsultStatus &&
      setConsultStatus((last) => ({ ...last, erorr: "مشاوره ای یافت نشد." }));
  } finally {
    setConsultStatus &&
      setConsultStatus((last) => ({ ...last, loading: false }));
  }
};
// submit consultation
export const submitConsultation = async (
  token: string,
  title: string,
  description: string,
  date: string,
  type: string,
  register_user_id: string
) => {
  try {
    const { data } = await app.post(
      "/consult/store",
      {
        title,
        description,
        date,
        type,
        register_user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("consultation created", data);
    window.sessionStorage.setItem(
      "consultation_id",
      JSON.stringify(data.data.id)
    );
    toast.success("درخواست مشاوره با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    toast.error("خطا در ایجاد مشاوره", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error.response.data.message);
  }
};
// delete consult by admin
export const deleteConsultation = async (
  consultId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/consult/delete/${consultId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("مشاوره با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف مشاوره", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// restore consultation by admin
export const restoreConsultation = async (
  consultationId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/consult/restore/${consultationId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("مشاوره با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی مشاوره", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get consultation detail
export const getConsultationDetail = async (
  token: string,
  consultationId: string | null,
  setConsultationDetail: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      date: string;
    }>
  >,
  setConsultDetailStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      erorr: string;
    }>
  >
) => {
  try {
    setConsultDetailStatus &&
      setConsultDetailStatus((last) => ({ ...last, loading: true }));
    const { data } = await app.get(`/consult/show/${consultationId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setConsultationDetail(data.data);
  } catch (error) {
    console.log(error);
    setConsultDetailStatus &&
      setConsultDetailStatus((last) => ({
        ...last,
        error: "مشاوره ای یافت نشد.",
      }));
  } finally {
    setConsultDetailStatus &&
      setConsultDetailStatus((last) => ({ ...last, loading: false }));
  }
};
// create ticket
export const createTicket = async (
  token: string,
  title: string,
  description: string,
  status_id: number,
  priority_id: number,
  register_user_id: number,
  dept_id: number,
  ticket_id: number | null
) => {
  try {
    const { data } = await app.post(
      "/ticket/store",
      {
        title,
        description,
        status_id,
        priority_id,
        register_user_id,
        dept_id,
        ticket_id: null,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("new", data);
    toast.success("تیکت با موفقیت ایجاد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error("خطا در ایجاد تیکت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get all tickets
export const getAllTickets = async (
  token: string,
  setAllTickets: React.Dispatch<React.SetStateAction<never[]>>,
  setAllTicketsStatus: React.Dispatch<
    React.SetStateAction<{
      error: string;
      loading: boolean;
    }>
  >
) => {
  try {
    setAllTicketsStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/tickets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("tickets", data);
    setAllTickets(data.data);
  } catch (error: any) {
    console.log(error.response.data.message);
    if (error.response.data.message === "ticket-notFound") {
      setAllTicketsStatus((last) => ({ ...last, error: "تیکتی یافت نشد." }));
    }
  } finally {
    setAllTicketsStatus((last) => ({ ...last, loading: false }));
  }
};
// delete ticket
export const deleteTicket = async (
  ticketId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/ticket/delete/${ticketId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("تیکت با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف تیکت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get ticket detail
export const getTicektDetail = async (
  token: string,
  ticketId: string | null,
  setTicketDetail: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    const { data } = await app.get(`/ticket/show/${ticketId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("ticketdetail", data);
    setTicketDetail(data.data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// create new project
export const createProject = async (
  token: string,
  title: string,
  description: string,
  budget_cost: number,
  discount_code: string | null,
  priority: string,
  register_user_id: number,
  planId: number,
  consultation_id: number | null,
  lookslike: SimilarSiteType[] | null,
  org_color: ColorType[] | null,
  plugin: PluginType[] | null,
  template: TemplateType[] | null
) => {
  try {
    const { data } = await app.post(
      "/project/store",
      {
        title,
        description,
        budget_cost,
        discount_code,
        priority,
        register_user_id,
        plan_id: planId,
        consultation_id: consultation_id || null,
        lookslike: lookslike || null,
        org_color: org_color || null,
        plugin: plugin || null,
        template: template || null,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("پروژه با موفقیت ثبت شد.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    window.sessionStorage.removeItem("consultation_id");
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error("خطا در ثبت پروژه.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// create project similar site
export const createProjectSimilars = async (
  token: string,
  title: string,
  url: string,
  project_id: number | null
) => {
  try {
    const { data } = await app.post(
      "/project/like_site/store",
      {
        title,
        url,
        project_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// create project color
export const createProjectColor = async (
  token: string,
  title: string,
  color: string,
  project_id: number | null
) => {
  console.log(title, color);
  try {
    const { data } = await app.post(
      "/project/org_color/store",
      {
        title,
        color,
        project_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// create project plugin
export const createProjectPlugin = async (
  token: string,
  plugin_name: string,
  project_id: number | null
) => {
  try {
    const { data } = await app.post(
      "/project/plugin/store",
      {
        plungin_in: plugin_name,
        project_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// create project template
export const createProjectTemplate = async (
  token: string,
  template_name: string,
  project_id: number | null
) => {
  try {
    const { data } = await app.post(
      "/project/template/store",
      {
        template_name,
        project_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// get project detail
export const getProjectDetail = async (
  token: string,
  projectId: string | null,
  setProjectDetail: React.Dispatch<React.SetStateAction<any>>,
  setProjectDetailStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setProjectDetailStatus &&
      setProjectDetailStatus((last) => ({ ...last, loading: true }));
    const { data } = await app.get(`/project/show/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("project detail", data);
    setProjectDetail(data.data);
  } catch (error: any) {
    setProjectDetailStatus &&
      setProjectDetailStatus((last) => ({
        ...last,
        error: "پروژه ای یافت نشد.",
      }));
    console.log(error.response.data.message);
  } finally {
    setProjectDetailStatus &&
      setProjectDetailStatus((last) => ({ ...last, loading: false }));
  }
};
// get similar sites for project
export const getSimilarSite = async (
  token: string,
  setProjectDetail: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const { data } = await app("/project/like_sites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("similar", data);
    setProjectDetail((last) => ({ ...last, Similar_Site: data.data }));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// get colors for project
export const getColors = async (
  token: string,
  setProjectDetail: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const { data } = await app("/project/org_colors", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("colors", data);
    setProjectDetail((last) => ({ ...last, Colors: data.data }));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// get templates for project
export const getTemplates = async (
  token: string,
  setProjectDetail: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const { data } = await app("/project/templates", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("templates", data);
    setProjectDetail((last) => ({ ...last, Templates: data.data }));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// reject project
export const rejectProject = async (
  token: string,
  reason: string,
  projectId: number,
  userId: number
) => {
  try {
    const { data } = await app.post(
      `/project/reject/${projectId}`,
      {
        reason,
        user_id: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success("پروژه با موفقیت رد شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    toast.error("خطا در رد پروژه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error.response.data.message);
  }
};
// project status
export const getProjectStatus = async (token: string) => {
  try {
  } catch (error) {}
};
// orders
export const getOrders = async (
  token: string,
  setOrders: React.Dispatch<React.SetStateAction<never[]>>,
  setOrderStatus: React.Dispatch<
    React.SetStateAction<{
      error: string;
      loading: boolean;
    }>
  >
) => {
  try {
    setOrderStatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("orders", data);
    setOrders(data.data);
  } catch (error: any) {
    setOrderStatus((last) => ({ ...last, error: "سفارشی یافت نشد." }));
    console.log(error.response.data.message);
  } finally {
    setOrderStatus((last) => ({ ...last, loading: false }));
  }
};
// get all organizations
export const getOrganizations = async (
  token: string,
  setOrganizations: React.Dispatch<React.SetStateAction<never[]>>,
  setOrganizationstatus: React.Dispatch<
    React.SetStateAction<{
      error: string;
      loading: boolean;
    }>
  >
) => {
  try {
    setOrganizationstatus((last) => ({ ...last, loading: true }));
    const { data } = await app("/organizations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("organizations", data);
    setOrganizations(data.data);
  } catch (error: any) {
    setOrganizationstatus((last) => ({ ...last, error: "سازمانی یافت نشد." }));
    console.log(error.response.data.message);
  } finally {
    setOrganizationstatus((last) => ({ ...last, loading: false }));
  }
};
// restore position by admin
export const restoreOrganization = async (
  organizationId: number | null,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/organization/restore/${organizationId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("سازمان با موفقیت بازگردانی شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(false);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در بازگردانی سازمان", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// deleting organization by admin
export const deleteOrgan = async (
  organId: number,
  token: string,
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.get(`/organization/delete/${organId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    toast.success("سازمان با موفقیت حذف شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsDeleted(true);
    console.log(data);
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف سازمان", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get organization detail
export const getOrganizationDetail = async (
  token: string,
  organizationId: string | null,
  setorganizationDetail: React.Dispatch<React.SetStateAction<any>>,
  setOrgDetailStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    setOrgDetailStatus &&
      setOrgDetailStatus((last) => ({ ...last, loading: true }));
    const { data } = await app.get(
      `/organization/show/${organizationId ? organizationId : ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("org detail", data);
    setorganizationDetail(data.data);
  } catch (error: any) {
    console.log(error.response.data.message);
    setOrgDetailStatus &&
      setOrgDetailStatus((last) => ({
        ...last,
        error: "سازمانی یافت نشد.",
      }));
  } finally {
    setOrgDetailStatus &&
      setOrgDetailStatus((last) => ({ ...last, loading: false }));
  }
};
// confirm project
export const confirmProjectByAdmin = async (
  token: string,
  projectId: number
) => {
  try {
    const { data } = await app(`/project/verify/${projectId}`);
    console.log("pro verification", data);
    toast.success("پروژه با موفقیت تایید شد", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error("خطا در تایید پروژه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// change order status by admin
export const changeOrderStatus = async (
  token: string,
  orderId: number,
  statusId: number
) => {
  try {
    const { data } = await app.post(
      `/order/change_order_status/${orderId}`,
      { status_id: statusId || 1 },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("status change verification", data);
    toast.success("وضعیت پروژه با موفقیت تغییر داده شد.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error("خطا در تغییر وضعیت پروژه", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// get order detail
export const getOrderDetail = async (
  token: string,
  orderId: number,
  setOrderDetail: React.Dispatch<React.SetStateAction<never[]>>,
  seOrderDetailStatus?: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: string;
    }>
  >
) => {
  try {
    seOrderDetailStatus &&
      seOrderDetailStatus((last) => ({ ...last, loading: true }));
    const { data } = await app(`/order/show/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("order detail", data);
    setOrderDetail(data.data);
  } catch (error: any) {
    seOrderDetailStatus &&
      seOrderDetailStatus((last) => ({
        ...last,
        error: "حطا در ردیافت اطلاعات",
      }));
    console.log(error.response.data.message);
  } finally {
    seOrderDetailStatus &&
      seOrderDetailStatus((last) => ({ ...last, loading: false }));
  }
};
// get all order statuses
export const getAllOrderStatuses = async (
  token: string,
  orderId: number,
  setOrderStatuses: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    const { data } = await app(`/order/get_all_status/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("all order statuses", data);
    setOrderStatuses(data.data);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// close ticket
export const closeTicket = async (
  token: string,
  status_id: number,
  ticketId: number,
  setAllTickets: React.Dispatch<React.SetStateAction<never[]>>,
  setIsClosed: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const { data } = await app.post(
      `/ticket/update/${ticketId}`,
      {
        status_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("closed ticket", data);
    toast.success("تیکت با موفقیت بسته شد.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    setIsClosed(true);
    // setAllTickets(data.data);
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error("خطا در بستن تیکت", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  }
};
// payment file upload
export const handlePaymentFileUpload = async (
  File: File,
  token: string,
  paymentId: number
) => {
  const formData = new FormData();
  formData.append("file", File);
  try {
    const { data } = await app.post(
      `/payment/file/upload/${paymentId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("payment file", data);
    toast.success("آپلود فایل موفق بود.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
  } catch (error: any) {
    toast.error("خطا در آپلود فایل، لطفا مجدد آپلود کنید.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      rtl: true,
    });
    console.log(error.response.data.message);
  }
};
// pay
export const sendAmount = async (
  token: string,
  amount: number,
  paymentId: number,
  setUrl: React.Dispatch<React.SetStateAction<string>>
) => {
  console.log(paymentId);
  try {
    const { data } = await app.post(
      `/pay/post`,
      {
        amount,
        payment_id: paymentId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("paid", data.data.url);
    setUrl(data.data.url);
    if(data.url){
      window.location.href = data.data.url;
    }
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
