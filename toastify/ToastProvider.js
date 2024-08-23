"use client";
import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        
      />
    </>
  );
};

export default ToastProvider;
