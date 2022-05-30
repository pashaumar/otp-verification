import React, { useState, useEffect } from "react";
import classes from "./OtpContainer.module.css";

function OtpBox(props) {
  const { tabIndex, handleOtpEnter, value } = props;

  const [otp, setOtp] = useState({});

  useEffect(() => {
    handleOtpEnter(otp);
  }, [otp]);

  const handleChange = (e) => {
    const { value, nextElementSibling, tabIndex } = e.target;
    const number = parseInt(value);
    if (!number && number !== 0) {
      setOtp({ [`${tabIndex}`]: "" });
      return;
    }

    if (nextElementSibling) e.target.nextElementSibling.focus();
    setOtp({ [`${tabIndex}`]: value });
  };

  const handleKeyUp = (e) => {
    const { keyCode } = e;
    if (keyCode === 8) {
      const { tabIndex, previousElementSibling } = e.target;
      setOtp({ [`${tabIndex}`]: "" });
      if (previousElementSibling) previousElementSibling.focus();
    }
  };

  return (
    <>
      <input
        type="text"
        className={classes.otpBox}
        tabIndex={tabIndex}
        onChange={handleChange}
        maxLength={1}
        value={value[tabIndex]}
        onKeyDown={handleKeyUp}
        onPaste={(e) => {
          const { lastChild } = e.target.parentNode;
          const pastedValue = e.clipboardData.getData("text");
          if (!parseInt(pastedValue) || pastedValue.length !== 6) {
            e.preventDefault();
            return false;
          }
          const otp = {};
          for (let i = 1; i <= 6; i++) {
            otp[i] = pastedValue[i - 1];
          }
          lastChild.focus();
          handleOtpEnter(otp);
        }}
      />
    </>
  );
}

export default OtpBox;
