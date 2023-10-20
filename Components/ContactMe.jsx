import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

function ContactMe() {
  const form = useRef();
  const lan = useSelector((state) => state.Language);
  const [formdata, setformdata] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [formsErrors, setFormErrors] = useState({});
  const HandleInputChanges = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  const EmailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const FormValidation = () => {
    const errors = {};

    if (!formdata.user_name) {
      errors.user_name = "Name is required";
    }
    if (!formdata.user_email) {
      errors.user_email = "Email is required";
    } else if (!EmailPattern.test(formdata.user_email)) {
      errors.user_email = "Enter Valid Email";
    }
    if (!formdata.message) {
      errors.message = "Description is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const HandlerSubmit = (e) => {
    e.preventDefault();
    if (FormValidation()) {
      console.log("====================================");
      console.log("Done");
      console.log("====================================");
    } else {
      console.log("====================================");
      console.log("Faild");
      console.log("====================================");
    }
  };
  return (
    <div
      id="Contact Me"
      className="px-5 md:px-16   pt-16 lg:py-28  relative w-full min-h-screen"
    >
      <div className="max-w-[1240px]  text-center mx-auto flex flex-col justify-center items-center">
        <h1
          className={`text-4xl mb-5 tracking-wide  block text-neutral-800 ${
            lan === "FA"
              ? "font-Iransansblack tracking-wider"
              : "font-RubikSemiBold"
          }`}
        >
          Contact Me
        </h1>
        <span className="relative w-60 inline-block lines">
          <i className="Square"></i>
          <i className="Square"></i>
          <i className="Square"></i>
        </span>
      </div>
      <div className="w-full  flex items-center justify-center mt-10">
        <form
          className="w-full max-w-[720px]"
          ref={form}
          onSubmit={HandlerSubmit}
        >
          <div className="w-full flex-col lg:flex-row items-start flex gap-4">
            <div className="flex  justify-between w-full items-start gap-1 flex-col">
              <label className="font-semibold text-neutral-600">Name</label>
              <input
                type="text"
                className="px-4 py-3 border border-neutral-200 focus:border-neutral-600 hover:border-neutral-400 duration-150 placeholder:text-neutral-300 rounded-md outline-none w-full"
                name="user_name"
                value={formdata.user_name}
                onChange={HandleInputChanges}
                placeholder="Enter your name"
              />
              {formsErrors.user_name && (
                <span className="text-sm text-red-500">
                  {formsErrors.user_name}
                </span>
              )}
            </div>
            <div className="w-full flex items-start gap-1 flex-col">
              <label className="font-semibold text-neutral-600">Email</label>
              <input
                type="email"
                name="user_email"
                className="px-4 py-3 border border-neutral-200 focus:border-neutral-600 hover:border-neutral-400 duration-150 placeholder:text-neutral-300 rounded-md outline-none w-full"
                placeholder="Enter your Email"
                value={formdata.user_email}
                onChange={HandleInputChanges}
              />
              {formsErrors.user_email && (
                <span className="text-sm text-red-500">
                  {formsErrors.user_email}
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex items-start gap-1 flex-col mt-6">
            <label className="font-semibold text-neutral-600">Message</label>
            <textarea
              value={formdata.message}
              onChange={HandleInputChanges}
              name="message"
              className="w-full min-h-[200px] px-4 py-2 border border-neutral-200 focus:border-neutral-600 hover:border-neutral-400 duration-150 placeholder:text-neutral-300 rounded-md outline-none"
              placeholder="Describe about your Self"
            />
            {formsErrors.message && (
              <span className="text-sm text-red-500">
                {formsErrors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full border border-black font-semibold p-4 rounded-md hover:bg-black hover:text-white duration-200 mt-6"
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
