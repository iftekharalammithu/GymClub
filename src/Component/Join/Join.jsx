import React, { useRef } from "react";
import "./Join.css";
import "../../App.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_soutdz7", "template_jzvx98u", form.current, {
        publicKey: "4Na6xJEsJFcchjvZP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="strock-text">ready to</span>
          <span>level up</span>
        </div>
        <div className="with-us">
          <span>your body</span>
          <span className="strock-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="user-email"
            placeholder="Enter Your Email Address"
          />
          <button className=" btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
