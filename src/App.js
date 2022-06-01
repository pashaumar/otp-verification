import React, { useEffect, useState } from "react";
import "./App.css";
import OtpContainer from "./components/otpContainer/OtpContainer";
import OtpGenerator from "./components/otpGenerator/OtpGenerator";
import Modal from "./components/modal/Modal";

function App() {
  const otpLength = 6;
  const [otpInput, setOtpInput] = useState({});
  const [otpValue, setOtpValue] = useState("");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    localStorage.removeItem("otp");
  }, []);

  useEffect(() => {
    handleResetOtp();
  }, [otpLength]);

  useEffect(() => {
    let value = "";
    Object.keys(otpInput).forEach((key) => {
      if (otpInput[key]) value += otpInput[key];
      else setOtpValue("");
    });
    if (value.length === otpLength) setOtpValue(value);
  }, [otpInput]);

  const handleResetOtp = () => {
    const inputs = {};
    new Array(otpLength).fill(1).forEach((item, index) => {
      inputs[item + index] = "";
    });
    setOtpInput({ ...inputs });
  };

  const handleOtpEnter = (key) => {
    setOtpInput((prev) => ({ ...prev, ...key }));
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal
          message="Visit Local Storage for requested otp."
          hideModal={hideModal}
        />
      )}
      <div className="content">
        <div className="otp-text">Please enter the OTP sent</div>
        <OtpContainer
          otpInput={otpInput}
          handleOtpEnter={handleOtpEnter}
          otpLength={otpLength}
        />
        <OtpGenerator
          otpValue={otpValue}
          otpLength={otpLength}
          handleResetOtp={handleResetOtp}
        />
      </div>
    </div>
  );
}

export default App;
