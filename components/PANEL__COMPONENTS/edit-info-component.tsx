"use client";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import InfoFields from "./info-fields";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const EditInfoComponent = () => {
  const [disable, setDisable] = useState(false);
  const { token } = useSelector((store: any) => store.userRole);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    newPassword: "",
    oldPassword: "",
    confirmNewPassword: "",
    username: "",
    address: "",
  });
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };

  const handleChangingPassowrd = async (
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string
  ) => {
    // console.log(token);
    try {
      const { data } = await axios.put(
        "https://keykavoos.liara.run/User/ChangePassword",
        {
          oldPassword,
          newPassword,
          confirmNewPassword,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleAvatar = async () => {
    const formData = new FormData();
    formData.append("photo", selectedFile);
    // console.log(formData);
    try {
      const { data } = await axios.post(
        "https://keykavoos.liara.run/User/UploadAvatar",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(selectedFile);
      console.log(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleUsernameChange = async (username: string) => {
  //   console.log(token);
  //   console.log(username);
  //   try {
  //     const data = await axios.put(
  //       "https://keykavoos.liara.run/User/UpdateProfile",
  //       { username },
  //       {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        info.newPassword !== "" &&
        info.oldPassword !== "" &&
        info.confirmNewPassword !== ""
      ) {
        await handleChangingPassowrd(
          info.oldPassword,
          info.newPassword,
          info.confirmNewPassword
        );
      }
      if (selectedFile) {
        await handleAvatar();
      }
      // await Promise.all([
      //   handleChangingPassowrd(
      //     info.oldPassword,
      //     info.newPassword,
      //     info.confirmNewPassword
      //   ),
      //   handleAvatar(),
      //   // handleUsernameChange(info.username),
      // ]);
      // console.log("all executing");
      console.log("2");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] mx-auto rounded-xl p-[2%] grid grid-cols-1 justify-center gap-[3%] lg:bg-profileBorderbg">
      <form
        className="bg-white w-full rounded-lg grid grid-cols-1 lg:gap-[80%] pt-[5%] pb-[15%] px-[3%] gap-[30%]"
        onSubmit={(e) => handleSubmission(e)}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[3%] gap-[8%]">
          <div className="lg:w-[200px] lg:h-[200px] rounded-full bg-[#D9D9D9] mx-auto w-[100px] h-[100px] lg:hidden"></div>
          <div className="grid grid-cols-1 lg:gap-[40%] gap-[5%]">
            <InfoFields
              title="پسورد قدیمی"
              info={info.oldPassword}
              disable={disable}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInfo((last) => ({ ...last, oldPassword: e.target.value }))
              }
              type="text"
            />
            <InfoFields
              title="پسورد جدید"
              info={info.newPassword}
              disable={disable}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInfo((last) => ({ ...last, newPassword: e.target.value }))
              }
              type="text"
            />
            <InfoFields
              title="تایید پسورد جدید"
              info={info.confirmNewPassword}
              disable={disable}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInfo((last) => ({
                  ...last,
                  confirmNewPassword: e.target.value,
                }))
              }
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 lg:gap-[40%] gap-[8%]">
            <div className="flex flex-row items-center justify-between gap-[5%]">
              <label>پروفایل:</label>
              <input
                id="fileInput"
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="fileInput"
                style={{ cursor: "pointer" }}
                className="bg-[#EDF0FB] rounded-lg p-[2%] w-full text-center"
              >
                {selectedFile ? selectedFile.name : "افزودن فایل"}
              </label>
            </div>
            {/* <InfoFields
              title="نام کاربری:"
              info={info.username}
              disable={disable}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInfo((last) => ({ ...last, username: e.target.value }))
              }
              type="text"
            /> */}
            <button
              className="bg-[#EDF0FB] text-black hidden lg:flex justify-center items-center rounded-lg py-[1%] px-[8%] self-end mx-auto lg:w-[8%] w-full"
              type="submit"
            >
              تایید
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[25%] lg:flex lg:gap-0">
          <button
            className="bg-[#EDF0FB] text-black flex justify-center mx-auto items-center rounded-lg py-[1%] px-[5%] lg:hidden"
            type="submit"
          >
            تایید
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditInfoComponent;
