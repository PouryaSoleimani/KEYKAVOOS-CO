"use client";
import React, { useEffect, useState } from "react";
import FinanceInput from "./components/finance-input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import app from "@/services/service";

function Finance() {
  const [amount, setAmount] = useState<string | number>("");
  const [projectsData, setProjectsData] = useState([]);
  const [totalProjectCost, setTotalProjectCost] = useState(0);
  const [remainedPay, setRemainedPay] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();
  const { localToken, userProfile, token } = useSelector(
    (state: any) => state.userData
  );

  const params = useSearchParams();
  const id = params.get("id");
  const sendAmount = async (amount: number) => {
    try {
      const { data } = await axios(
        `https://keykavoos.liara.run/pay/${amount}`,
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      router.push(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendAmount(Number(amount));
  };
  const getAllProjects = async () => {
    try {
      const { data } = await app(`/project/show/${Number(id)}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("fianace projects", data);
      setProjectsData([data.data]);
      setTotalProjectCost(data.data.final_price);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  // const calculateTotalCost = () => {
  //   let totalCost = 0;
  //   projectsData.forEach((item: any) => {
  //     const budget = parseInt(item.budget);
  //     if (!isNaN(budget)) {
  //       totalCost += budget;
  //     }
  //   });
  //   setTotalProjectCost(totalCost);
  // };

  // useEffect(() => {
  //   calculateTotalCost();
  //   console.log(totalProjectCost);
  // }, [projectsData]);

  const handleBudegtChange = (value: string) => {
    const rawValue = value.replace(/,/g, "");
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  };
  return (
    <form
      onSubmit={(e) => handleSubmission(e)}
      className="py-[3%] w-[90%] shadow mx-auto bg-white rounded-2xl px-[3%] flex flex-col gap-5"
    >
      <div className="grid grid-cols-2 gap-5">
        <FinanceInput
          label="مبلغ پروژه:"
          disable={true}
          value={`${handleBudegtChange(String(totalProjectCost))} ریال`}
          // value={`${totalProjectCost.toLocaleString()} ریال`}
        />
        <FinanceInput
          label="مبلغ باقی مانده:"
          disable={true}
          value={`${(totalProjectCost - userProfile.Paid
            ? userProfile.Paid
            : 0
          ).toLocaleString()} ریال`}
        />
        <FinanceInput
          label="مبلغ پرداخت شده:"
          disable={true}
          value={`${
            userProfile.Paid ? userProfile.Paid?.toLocaleString() : 0
          } ریال`}
        />
        <FinanceInput
          label="مبلغ پرداختی شما:"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
          setToBlue={true}
        />
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-[#4866CE] text-white p-2 rounded-[4px]">
          تایید پرداخت
        </button>
      </div>
    </form>
  );
}

export default Finance;
