import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_ld17n79", "template_n90bqeb", data, "GqgIvXegqeInil3ul")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting your Query!");
    document.getElementById("queryForm").reset();
  };
  const fullwidth = "w-full";
  const inputcss =
    "w-full h-[57px] border border-solid border-[rgba(255,255,255,0.2)] rounded-md bg-transparent outline-0 py-2 px-5 text-white text-lg font-normal leading-6 focus:border-white";
  const msgerrors = "text-white text-base leading-6 ";
  return (
    <div className="query-form w-full md:w-[calc(100%-375px)] md:ml-5">
      <ToastContainer />
      <form
        id="queryForm"
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid md:grid-cols-2 md:gap-4 mt-[-10] flex flex-col"
      >
        <div className="input-field  mt-3 ">
          <input
            className={inputcss}
            type="text"
            name="from_name"
            placeholder="Name"
            {...register("from_name", {
              required: "Name is required",
            })}
          />
          {errors.from_name?.message && (
            <p className={msgerrors}>{errors.from_name?.message}</p>
          )}
        </div>

        <div className="input-field  mt-3">
          <input
            className={inputcss}
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className={msgerrors}>{errors.reply_to?.message}</p>
          )}
        </div>

        <div className="input-field  mt-3">
          <input
            className={inputcss}
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone number is required",
              minLength: {
                value: 8,
                message: "Phone number is not valid",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className={msgerrors}>{errors.phone_number?.message}</p>
          )}
        </div>

        <div className="input-field  mt-3">
          <input
            className={inputcss}
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
          />
          {errors.subject?.message && (
            <p className={msgerrors}>{errors.subject?.message}</p>
          )}
        </div>

        <div className={`input-field ${fullwidth}    mt-3 col-span-2`}>
          <textarea
            className="textarea w-full h-[120px] border border-solid border-[rgba(255,255,255,0.2)] bg-transparent outline-0 py-2 px-5 text-white text-lg font-normal leading-6 focus:border-white resize-none"
            name="message"
            placeholder="Your message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 20 characters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed",
              },
            })}
          />
          {errors.message?.message && (
            <p className={msgerrors}>{errors.message?.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="outline-0 border-0 w-24 h-12 bg-white text-xl font-normal leading-6 rounded-md ml-[10px] mt-[10px] cursor-pointer hover:bg-yellow-500 transition-all duration-400 hover:text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
