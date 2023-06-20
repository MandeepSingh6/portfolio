import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-[70vw] md:w-[60vw] lg:w-[50vw] mx-auto min-h-screen mt-12 lg:mt-24 pt-[2.4rem]"
    >
      <form
        method="POST"
        action="https://getform.io/f/62841c3b-8234-4d76-89dc-6f5d05d497d6"
      >
        <div className="">
          <div className="">
            <p className="text-4xl text-center text-white">CONTACT</p>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <input
              required
              className="pl-2 rounded-sm"
              placeholder="Name"
              type="text"
              name="name"
              id=""
            />
            <input
              required
              className="pl-2 rounded-sm"
              placeholder="Email"
              type="email"
              name="email"
              id=""
            />
            <textarea
              required
              className="pl-2 rounded-sm"
              placeholder="Message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="w-ful mx-auto text-center mt-10">
            <button className="p-1 px-4 border-2 text-white hover:scale-110 duration-300 hover:bg-white hover:text-blue-600">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
