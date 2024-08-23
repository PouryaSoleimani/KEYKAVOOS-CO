import Nav from "@/components/home-components/nav";
import React from "react";
import Informatik from "./components/informatik";
import FinanceCert from "./components/finance-cert";
import FianaceAuthorizationCert from "./components/finance-authorization-cert";
import SenfiCert from "./components/senfi-cert";
import styles from "./certificates.module.css";
import CertificatesSlider from "./components/certificate-slider";
import Footer from "@/components/home-components/Footer/Footer";
const Certificates = () => {
  return (
    <div>
      <Nav />
      <div dir="rtl" className="font-YekanBakh">
        <div className={`${styles.container} pt-[3%]`}>
          <Informatik />
        </div>
        <div className={`${styles.certContainer} py-[5%]`}>
          <FinanceCert
            altText="سازمان مدیریت و برنامه تهران"
            rightText="گواهینامه اخذ شده از سازمان برنامه و بودجه"
            middleText="
            شرکت های انفورماتیکی به شرکت هایی گفته می شود که موضوع فعالیت های آن
            صرفا خدمات انفورماتیکی می باشد."
            logoSrc="/certificates/modiriyat-va-barnameh.svg"
          />
        </div>
        <div className={`${styles.container}`}>
          <FianaceAuthorizationCert />
        </div>
        <div className={`${styles.certContainer2} py-[5%]`}>
          <FinanceCert
            altText=""
            logoSrc="/certificates/modiriyat-va-barnameh.svg"
            rightText="
          گواهینامه اخذ شده از سازمان بودجه"
            middleText="رتبه بندی شرکتهای انفورماتیک در واقع یک تقسیم ‌بندی  در عرصه فناوری اطلاعات و ارتباطات کشور می باشد که در احراز صلاحیت شرکت‌ها برای تمامی پروژه‌های کامپیوتری از طریق شورای عالی انفورماتیک کشور یا معاونت برنامه ریزی و نظارت راهبردی رئیس جمهور برای شرکت های انفورماتیکی صادر می گردد."
          />
        </div>
        <div className={`${styles.container}`}>
          <SenfiCert />
        </div>
        <div className={`${styles.certContainer2} pt-[5%]`}>
          <FinanceCert
            middleText="نظام صنفی رایانه ای مرجعی جهت مدیریت بخش خصوصی، دولتی و مشتریان می باشد."
            rightText="گواهینامه اخذ شده از نظام صنفی"
            logoSrc="/certificates/senfi.svg"
            altText="گواهینامه نظام صنفی"
          />
        </div>
        <div className={`${styles.container}`}>
          <CertificatesSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Certificates;
