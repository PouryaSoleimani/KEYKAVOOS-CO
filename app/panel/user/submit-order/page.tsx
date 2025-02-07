"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import PanelFields from "../../components/panel-fileds";
import SubmitOrderDropdown from "./components/submit-order-dropdown";
import SubmitOrderModalfield from "./components/submit-order-modalfield";
import SubmitOrderDescription from "./components/submit-order-description";
import OrdersubmissionModal from "./components/odersubmission-modal";
import { useSelector } from "react-redux";
import Link from "next/link";
import { CREATEPROJECT } from "@/utils/utils";
import ColorSubmissionModal from "./components/color-submission-modal";
import SubmitColorModalfield from "./components/submit-colors-modalfield";
import SubmitPluginModalfield from "./components/submit-plugin-modalfield";
import PluginSubmissionModal from "./components/plugin-submission-modal";
import TemplateSubmissionModal from "./components/template-sumission-modal";
import SubmitTemplateModalfield from "./components/submit-template-modalfield";
import { OrderSubmissionContext } from "../../context/order-submission-contexts/OrderSubmissionContext";
import { IoArrowBack } from "react-icons/io5";

export type PlanType = { plan: { id?: number | string; title: string; description: string; price: number }; };
export type SimilarSiteType = { title: string; url: string; id?: number };
export type ColorType = { title: string; color: string };
export type TemplateType = { template_name: string };
export type PluginType = { plugin_name: string };

// ^ COMPONENT
function SubmitOrder() {
  const { token, userProfile } = useSelector((state: any) => state.userData);
  const [consultationId, setConsultationId] = useState("");

  const { allPlans, setAllPlans, siteTypes, setSiteTypes } = useContext(OrderSubmissionContext);

  // GETTING PLANS AND TYPES
  useEffect(() => {
    const localPlans = JSON.parse(window.sessionStorage.getItem("plans") as string);
    const localSiteTypes = JSON.parse(window.sessionStorage.getItem("site-types") as string);
    setAllPlans(localPlans);
    setSiteTypes(localSiteTypes);
  }, []);

  const [similarSiteData, setSimilarSiteData] = useState<SimilarSiteType[]>([{ title: "", url: "" },]);
  const [similarSiteModalInputValue, setSimilarSiteModalInputValue] = useState({ title: "", url: "", });
  const [showSimilarModal, setShowSimilarModal] = useState(false);
  const [templatesData, setTemplatesData] = useState<TemplateType[]>([]);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [templateModalInputValue, setTemplateModalInputValue] = useState({ template_name: "", });
  const [showPluginModal, setShowPluginModal] = useState(false);
  const [pluginData, setPluginData] = useState<PluginType[]>([{ plugin_name: "", },]);
  const [pluginModalInputValue, setPluginModalInputValue] = useState({ plugin_name: "", });
  const [showColorsModal, setShowColorsModal] = useState(false);
  const [colorsData, setColorsData] = useState<ColorType[]>([{ title: "", color: "", },]);
  const [colorsModalInputValue, setColorsModalInputValue] = useState({ title: "", color: "", });

  const [projectFields, setProjectFields] = useState({
    title: "",
    type: "",
    plan: "فروشگاهی",
    budget: "",
    priority: "کم",
    Similar_Site: similarSiteData,
    Description: "",
    Templates: templatesData,
    Colors: colorsData,
    discount_code: "---",
  });

  // plans: ""
  // نوع پروژه(طراحی) /types
  const planTitlesAndDescs = allPlans?.filter((item) => item.plan.title.includes(projectFields.type)).map((item) => item.plan.title);

  const siteTypeTitles = siteTypes?.map((item: SimilarSiteType) => item.title);
  const plansId = allPlans?.filter((item) => projectFields.plan.includes(item.plan.title))[0]?.plan.id;
  const PLANSID = Number(allPlans?.find(item => item.plan.title.includes(projectFields.plan))?.plan.id)

  const handleBudegtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setProjectFields((last) => ({ ...last, budget: formattedValue }));
  };

  useEffect(() => {
    const consultation_id = JSON.parse(window.sessionStorage.getItem("consultation_id") as string);
    setConsultationId(consultation_id);
  }, [consultationId]);

  // const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await createProject(
  //     token,
  //     projectFields.title,
  //     projectFields.Description,
  //     Number(projectFields.budget.replaceAll(",", "")),
  //     projectFields.discount_code,
  //     projectFields.priority === "کم" ? "low" : "high",
  //     userProfile.id,
  //     Number(plansId),
  //     consultationId ? Number(consultationId) : null,
  //     similarSiteData,
  //     colorsData,
  //     pluginData,
  //     templatesData
  //   );
  //   // setProjectFields((last) => ({ ...last, budget: "", Description: "", discount_code: "", title: "", }));
  //   // setSimilarSiteData([]);
  //   // setColorsData([]);
  //   // setPluginData([]);
  //   // setTemplatesData([]);
  // };





  // ^ FORM SUBMIT HANDLER
  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    CREATEPROJECT(
      token,
      projectFields.title,
      projectFields.Description,
      Number(projectFields.budget.replaceAll(",", "")),
      projectFields.priority === "کم" ? 1 : 2,
      userProfile.id,
      Number(plansId),
      projectFields.discount_code ? Number(projectFields.discount_code) : 0,
      projectFields.type,
      consultationId ? Number(consultationId) : null,
      similarSiteData,
      colorsData,
      pluginData,
      templatesData,
    )
    console.log(plansId)
    // setProjectFields((last) => ({ ...last, budget: "", Description: "", discount_code: "", title: "", }));
    // setSimilarSiteData([]);
    // setColorsData([]);
    // setPluginData([]);
    // setTemplatesData([]);
  }

  //^ RETURN ===========================================================================================================================================================
  return (
    <div className="relative">
      <div className="flex justify-end text-xl cursor-pointer absolute -top-12 left-0">
        <Link href="/panel/user/project-management" className="bg-white  z-20 rounded-lg p-2 hover:bg-[#4866CF] hover:text-white  duration-300"  >
          <IoArrowBack />
        </Link>
      </div>
      <form onSubmit={(e) => formSubmitHandler(e)} className="py-[3%] w-[100%] shadow mx-auto bg-white rounded-xl px-[3%] grid grid-cols-1 gap-5 relative mt-10 lg:mt-0" >
        {/*^^^ MODALS ^^^^  */}
        {/* سایت مشابه مودال */}
        {showSimilarModal && (<OrdersubmissionModal showModal={showSimilarModal} data={similarSiteData} setData={setSimilarSiteData} modalInputValue={similarSiteModalInputValue} setModalInputValue={setSimilarSiteModalInputValue} setShowModal={setShowSimilarModal} />)}
        {/* تمپلیت مودال */}
        {showTemplatesModal && (<TemplateSubmissionModal showModal={showTemplatesModal} data={templatesData} setData={setTemplatesData} modalInputValue={templateModalInputValue} setModalInputValue={setTemplateModalInputValue} setShowModal={setShowTemplatesModal} />)}
        {/* رنگ سازمانی مودال */}
        {showColorsModal && (<ColorSubmissionModal showModal={showColorsModal} data={colorsData} setData={setColorsData} modalInputValue={colorsModalInputValue} setModalInputValue={setColorsModalInputValue} setShowModal={setShowColorsModal} />)}
        {/* پلاگ این مودال */}
        {showPluginModal && (<PluginSubmissionModal showModal={showPluginModal} data={pluginData} setData={setPluginData} modalInputValue={pluginModalInputValue} setModalInputValue={setPluginModalInputValue} setShowModal={setShowPluginModal} />)}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="relative pt-3">
            <PanelFields label="عنوان پروژه:" onChange={(e) => setProjectFields((last) => ({ ...last, title: e.target.value }))} value={projectFields.title} name="title" placeholder="" />
            <p className="absolute top-3 right-[5rem] text-red-800">*</p>
          </div>
          <div className="relative pt-3">
            <SubmitOrderDropdown dropDownTitle="اولویت پروژه:" dropdownItems={["کم", "زیاد"]} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProjectFields((last) => ({ ...last, priority: e.target.value, }))} value={projectFields.priority} name="priority" />
            <p className="absolute top-3 right-[6rem] text-red-800">*</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="relative pt-3">
            <SubmitOrderDropdown dropDownTitle="نوع پروژه:" dropdownItems={siteTypes?.map(item => item.title)} value={projectFields.type} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProjectFields((last) => ({ ...last, type: e.target.value }))} />
            <p className="absolute top-3 right-[4.5rem] text-red-800">*</p>
          </div>
          <div className="relative pt-3">
            <SubmitOrderDropdown dropDownTitle="پلن انتخابی:" dropdownItems={allPlans?.map(item => item.plan.title)} value={projectFields.plan}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProjectFields((last) => ({ ...last, plan: e.target.value }))} />
            <p className="absolute top-3 right-[5.5rem] text-red-800">*</p>
          </div>
        </div>

        <div className="relative pt-3">
          <PanelFields label="بودجه مورد نظر: (برحسب تومان)" onChange={handleBudegtChange} value={projectFields.budget} name="budget" placeholder="" />
          <p className="absolute top-2 right-[12.5rem] text-red-800">*</p>
        </div>
        <SubmitOrderModalfield modalFieldTitle="سایت مشابه مورد نظر شما:" setShowModal={setShowSimilarModal} data={similarSiteData} setData={setSimilarSiteData} />
        <div className="relative pt-3">
          <SubmitOrderDescription value={projectFields.Description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProjectFields((last) => ({ ...last, Description: e.target.value, }))} />
          <p className="absolute top-3 right-[7rem] text-red-800">*</p>
        </div>
        <SubmitTemplateModalfield modalFieldTitle="قالب های مورد نیاز :" setShowModal={setShowTemplatesModal} data={templatesData} setData={setTemplatesData} />
        <SubmitPluginModalfield modalFieldTitle="پلاگین های مورد نیاز : " setShowModal={setShowPluginModal} data={pluginData} setData={setPluginData} />
        <SubmitColorModalfield modalFieldTitle="رنگ سازمانی : " setShowModal={setShowColorsModal} data={colorsData} setData={setColorsData} showModal />
        <div className="flex lg:flex-row flex-col gap-5 lg:items-center lg:justify-between whitespace-nowrap space-x-2">
          <PanelFields label="کد تخفیف  :  " onChange={(e) => setProjectFields((last) => ({ ...last, discount_code: e.target.value, }))} value={projectFields.discount_code} name="discount_code" flexDirection="flex-row" placeholder="*************" />
          <div className="flex justify-end">
            <div className="flex gap-5">

              <button type={!showColorsModal && !showPluginModal && !showSimilarModal && !showTemplatesModal ? "submit" : "button"} className="bg-[#4866CE] text-white rounded-md px-24 py-3 hover:bg-blue-800 tracking-tight duration-300 w-[80px] flex justify-center items-center">
                <span>ثبت</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubmitOrder;