import app from "@/services/service";
import { Bounce, toast } from "react-toastify";

// role be permission(che role hayi felan dastresi to dashte bashan)
export const giveRolePermission = async (
  token: string,
  roleId: number,
  permissionId: number
) => {
  try {
    const { data } = await app(
      `/permission/attach_role/${permissionId}/${roleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success(`دسترسی با موفقیت داده شد.`, {
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
// remove role permission
export const removeRolePermission = async (
  token: string,
  roleId: number,
  permissionId: number
) => {
  try {
    const { data } = await app(
      `/permission/detach_role/${permissionId}/${roleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success(`دسترسی با موفقیت گرفته شد.`, {
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
  } catch (error) {
    toast.error("خطا در گرفتن دسترسی", {
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
// sync role and permission
export const syncRolePermission = async (
  token: string,
  roleId: number,
  permissionId: number
) => {
  try {
    const { data } = await app.post(
      `/permission/sync_roles/${permissionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success(`دسترسی با موفقیت گرفته شد.`, {
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
  } catch (error) {
    toast.error("خطا در گرفتن دسترسی", {
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
// permission to position
export const givePositionPermission = async (
  token: string,
  positionId: number,
  permissionId: number
) => {
  try {
    const { data } = await app(
      `/permission/attach_role/${permissionId}/${positionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success(`دسترسی با موفقیت داده شد.`, {
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
// remove position permission
export const removePositionPermission = async (
  token: string,
  positionId: number,
  permissionId: number
) => {
  try {
    const { data } = await app(
      `/permission/detach_role/${permissionId}/${positionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success(`دسترسی با موفقیت گرفته شد.`, {
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
  } catch (error) {
    toast.error("خطا در گرفتن دسترسی", {
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
// sync positions and permission
export const syncPermissionPermission = async (
  token: string,
  roleId: number,
  permissionId: number
) => {
  try {
    const { data } = await app.post(
      `/permission/sync_position/${permissionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    toast.success(`دسترسی با موفقیت گرفته شد.`, {
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
  } catch (error) {
    toast.error("خطا در گرفتن دسترسی", {
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
// permission be role(che dastresi hayi be felan role dade beshe)
// export const giveRolePermission = async (
//   token: string,
//   roleId: number,
//   permissionId: number
// ) => {
//   try {
//     const { data } = await app(
//       `/permission/attach_role/${permissionId}/${roleId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     console.log(data);
//     toast.success(`دسترسی با موفقیت داده شد.`, {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//       rtl: true,
//     });
//   } catch (error) {
//     toast.error("خطا در ایجاد دسترسی", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//       rtl: true,
//     });
//     console.log(error);
//   }
// };