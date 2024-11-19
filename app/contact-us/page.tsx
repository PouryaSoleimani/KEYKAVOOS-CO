import Nav from "@/components/home-components/nav";
import React from "react";
import ContactHeading from "./components/contact-heading";
import Options from "./components/options/options";
import Form from "./components/form/form";
import Map from "./components/map/map";
import Footer from "@/components/home-components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <section className="overflow-x-hidden">
      <Nav />
      <Toaster position="top-right" reverseOrder={true} />
      <div dir="rtl" className="flex flex-col gap-14 font-YekanBakh">
        <ContactHeading />
        <Options />
        <Form />
        <Map />
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
