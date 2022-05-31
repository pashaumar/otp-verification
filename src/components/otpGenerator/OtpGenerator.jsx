import React, { useState } from "react";
import classes from "./OtpGenerator.module.css";
import Modal from "../modal/Modal";

function OtpGenerator(props) {
  const { otpValue, otpLength, handleResetOtp } = props;
  const [isRequestOtp, setIsRequestOtp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const generateOtp = () => {
    createOtp();
    setIsRequestOtp(true);
  };

  const resendOtp = () => {
    createOtp();
    handleResetOtp();
  };

  const createOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("otp", otp);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const verifyOtp = () => {
    const otp = localStorage.getItem("otp");
    if (parseInt(otp) === parseInt(otpValue)) {
      setMessage("Verified");
      setShowModal(true);
    } else {
      setMessage("Incorrect otp");
      setShowModal(true);
    }
  };

  return (
    <div className={classes.container}>
      {showModal && <Modal message={message} hideModal={hideModal} />}
      <div className={classes.verify}>
        <button disabled={!(otpLength === otpValue.length)} onClick={verifyOtp}>
          Verify
        </button>
      </div>
      <div>OR</div>
      <div className={classes.request}>
        <button disabled={isRequestOtp} onClick={generateOtp}>
          Request OTP
        </button>
      </div>
      <div className={classes.resend}>
        Not received your code? <span onClick={resendOtp}>Resend code</span>
      </div>
    </div>
  );
}

export default OtpGenerator;
