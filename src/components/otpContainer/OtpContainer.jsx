import React from "react";
import classes from "./OtpContainer.module.css";
import OtpBox from "./OtpBox";

function OtpContainer(props) {
  const { value, handleOtpEnter, otpLength } = props;
  return (
    <div className={classes.otpContainer}>
      {new Array(otpLength).fill(1).map((item, index) => (
        <OtpBox
          key={item + index}
          tabIndex={item + index}
          value={value}
          handleOtpEnter={handleOtpEnter}
          otpLength={otpLength}
        />
      ))}
    </div>
  );
}

export default OtpContainer;
