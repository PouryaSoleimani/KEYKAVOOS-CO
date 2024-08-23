"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  getTokenFromLocal,
} from "@/redux/features/user/userSlice";
function Moshavere() {
  const { localToken } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTokenFromLocal());
    // dispatch(fetchUserProfile());
  }, []);
  const getData = async () => {
  //   try {
  //     const { data } = await axios("https://keykavoos.liara.run/pay/10000", {
  //       headers: {
  //         Authorization: `Bearer ${localToken}`,
  //       },
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  };
  return <button onClick={() => getData()}>click</button>;
}

export default Moshavere;
