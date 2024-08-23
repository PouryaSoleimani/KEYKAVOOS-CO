"use client";
import React, { useEffect, useState } from "react";
import microsoft from "../../../public/Auth/microsoft.svg";
import github from "../../../public/Auth/github.svg";
import google from "../../../public/Auth/google.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
function LoginVia() {
  const [accessToken, setAccessToken] = useState("");
  const router = useRouter();
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => (
      setAccessToken(codeResponse.access_token), console.log(codeResponse)
    ),
    onError: (error) => console.log("Login Failed:", error),
  });

  const getUserInfo = async () => {
    try {
      if (accessToken) {
        const { data } = await axios(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        sessionStorage.setItem("name", data.name);
        setProfile(data);
        console.log("profile", profile);
        router.replace("/social-authorization");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [accessToken]);
  return (
    <div className="flex flex-col gap-5">
      <div className="relative border border-blue-700">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white px-2">
          ورود از طریق
        </p>
      </div>
      <div className="flex flex-row justify-around">
        <Image
          src={github}
          alt="github"
          onClick={() => signIn("github")}
          className="cursor-pointer"
        />
        <Image
          src={google}
          alt="google"
          onClick={() => login()}
          className="cursor-pointer"
        />
        {/* <Image
          src={microsoft}
          alt="microsoft"
          onClick={() =>
            signIn("azure-ad", { callbackUrl: "/" }, { prompt: "login" })
          }
          className="cursor-pointer"
        /> */}
      </div>
    </div>
  );
}

export default LoginVia;
