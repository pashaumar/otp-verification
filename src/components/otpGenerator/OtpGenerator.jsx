import React from "react";
import classes from "./OtpGenerator.module.css";

function OtpGenerator(props) {
  const { otpValue, otpLength, handleResetOtp } = props;

  const generateOtp = () => {
    createOtp();
  };

  const resendOtp = () => {
    createOtp();
    handleResetOtp();
  };

  const createOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("otp", otp);
  };

  const verifyOtp = () => {
    const otp = localStorage.getItem("otp");
    if (parseInt(otp) === parseInt(otpValue)) {
      alert("otp is correct");
    } else {
      alert("Incorrect otp");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.verify}>
        <button disabled={!(otpLength === otpValue.length)} onClick={verifyOtp}>
          Verify
        </button>
      </div>
      <div className={classes.or}>OR</div>
      <div className={classes.request}>
        <button disabled={localStorage.getItem("otp")} onClick={generateOtp}>
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
