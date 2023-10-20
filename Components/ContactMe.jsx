import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import Succses from "./alert/Succses";
import Error from "./alert/Error";

function ContactMe() {
  const form = useRef();
  const lan = useSelector((state) => state.Language);
  const [formdata, setformdata] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState({
    result: false,
    error: false,
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
      setloading(true);

      emailjs
        .sendForm(
          "service_cpbyooo",
          "template_lw4ch51",
          form.current,
          "rN-L5Bjx5bu-lo-3e"
        )
        .then((res) => {
          console.log(res);
          setresult({ result: true, error: false });
          setformdata({
            message: "",
            user_email: "",
            user_name: "",
          });
          setTimeout(() => {
            setresult({ result: false, error: false });
          }, 4000);
          setloading(false);
        }),
        (error) => {
          console.log(error);
          setresult({ result: true, error: true });
          setTimeout(() => {
            setresult({ result: false, error: false });
          }, 4000);
          setloading(false);
        };
    } else {
      return;
    }
  };

  return (
    <div
      id="Contact Me"
      className="px-5 md:px-16 flex items-center justify-center flex-col  pt-16 lg:py-28  relative w-full min-h-screen"
    >
      {result.error && result.result ? (
        <Error Massage={"Uknown Error"} status={result.result} />
      ) : (
        <Succses
          Massage={"You will get in touch with the person as soon as possible"}
          status={result.result}
        />
      )}

      <div className="max-w-[1240px]  text-center mx-auto flex flex-col justify-center items-center">
        <h1
          className={`text-4xl mb-5 tracking-wide  block text-neutral-800 ${
            lan === "FA"
              ? "font-Iransansblack tracking-wider"
              : "font-RubikSemiBold"
          }`}
        >
          {lan === "FA" ? "ارتبات با من" : " Contact Me"}
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
            disabled={loading}
            className="w-full border border-black font-semibold p-4 rounded-md flex items-center justify-center hover:bg-black hover:text-white duration-200 mt-6 disabled:cursor-progress"
            value="Send"
          >
            {loading ? (
              <div aria-label="Loading...">
                <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-white"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path
                    className="fill-black"
                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
