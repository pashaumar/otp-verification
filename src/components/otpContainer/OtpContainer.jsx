import React from "react";
import classes from "./OtpContainer.module.css";
import OtpBox from "./OtpBox";

function OtpContainer(props) {
  const { value, handleOtpEnter } = props;
  return (
    <div className={classes.otpContainer}>
      {new Array(6).fill(1).map((item, index) => (
        <OtpBox
          key={item + index}
          tabIndex={item + index}
          value={value}
          handleOtpEnter={handleOtpEnter}
        />
      ))}
    </div>
  );
}

export default OtpContainer;
