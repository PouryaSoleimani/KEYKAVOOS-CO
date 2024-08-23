"use client";
import React from "react";

type TemplateSubmissionModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: { template_name: string }[];
  setData: React.Dispatch<
    React.SetStateAction<
      {
        template_name: string;
      }[]
    >
  >;
  modalInputValue: {
    template_name: string;
  };
  setModalInputValue: React.Dispatch<
    React.SetStateAction<{
      template_name: string;
    }>
  >;
};
function TemplateSubmissionModal({
  showModal,
  setShowModal,
  data,
  setData,
  modalInputValue,
  setModalInputValue,
}: TemplateSubmissionModalProps) {
  const handleSave = () => {
    if (modalInputValue.template_name.trim() !== "") {
      setData([...data, modalInputValue]);
    }
    setModalInputValue({ template_name: "" });
  };
  // console.log(data);
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        showModal ? "block" : "hidden"
      }  absolute w-full text-center z-50 h-full backdrop-blur-sm`}
    >
      <div className="p-4 w-full flex justify-center">
        <div className="relative p-8 w-full max-w-2xl max-h-full">
          <div className="bg-white rounded-[25px] shadow border">
            <div className="md:p-5 text-black font-semibold">
              <input
                type="text"
                className="bg-[#EAEFF6] w-full rounded-[4px] p-2 outline-none"
                autoFocus={true}
                value={modalInputValue.template_name}
                onChange={(e) =>
                  setModalInputValue((last) => ({
                    ...last,
                    template_name: e.target.value,
                  }))
                }
                placeholder="نام تمپلیت"
              />
            </div>
            <div className="flex flex-row-reverse gap-5 md:p-5">
              {data.map((item) => (
                <p
                  key={item.template_name}
                  className={`bg-[#EAEFF6] rounded-[4px] px-2 ${
                    item.template_name ? "inline-block" : "hidden"
                  }`}
                >
                  {item.template_name}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-between p-4 md:p-5 rounded-b">
              <button
                type="button"
                className="text-white bg-[#4866CF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-5 md:py-2.5 text-center"
                onClick={() => handleSave()}
              >
                ذخیره
              </button>
              <div>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  type="button"
                  className={`md:py-2.5 md:px-5 ms-3 px-5 text-sm font-medium focus:outline-none rounded-lg border border-[#4866CF]  bg-white text-[#4866CF]`}
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateSubmissionModal;
