"use client";
import React, { useActionState } from "react";
import HomeNavigator from "../components/HomeNavigator";
import toast from "react-hot-toast";
import ContactService from "../services/ContactService";

const ContactForm = () => {
  const registerUser = async (prevState, formData) => {
    try {
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      await ContactService.saveFormInfo(data);

      toast.success("Form submitted Successfully!");
    } catch (error) {
      toast.error("Sorry something went wrong!");
      console.error(error);
    }
  };

  const [state, formAction, isPending] = useActionState(registerUser, {
    status: "INITIAL",
    error: "",
  });

  return (
    <div className="pt-[60px] pb-[30px] px-3 xl:px-36">
      <HomeNavigator />
      <div className="md:grid-cols-[1fr_1fr] md:gap-[24px] xl:gap-[80px] md:grid max-w-[1200px] mx-auto">
        <div className="font-medium leading-[1.2] text-black md:self-center text-center md:text-left mb-6 md:mb-0 md:max-w-[300px] xl:max-w-[500px]">
          <h2 className="text-[32px] mb-4 md:mb-0 md:text-center">
            Contact Us
          </h2>
        </div>

        <form action={formAction} className="p-[24px] max-w-[600px]">
          <input
            name="name"
            id="name"
            required
            placeholder="Name"
            className="p-2 border w-full rounded-xl mb-4 bg-[rgba(255, 255, 255, 0.1)] "
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="p-2 border rounded-xl w-full mb-4 bg-[rgba(255, 255, 255, 0.1)] "
          />
          <textarea
            name="message"
            id="message"
            required
            placeholder="Message"
            className="p-2 border rounded-xl w-full h-[100px] mb-4 bg-[rgba(255, 255, 255, 0.1)] "
          />
          <button
            type="submit"
            className="text-center w-full  bg-[black] text-white p-2 rounded-xl cursor-pointer
            hover:bg-[#7d7b7d] transition-all delay-100 font-medium
            "
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Contact Us"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
