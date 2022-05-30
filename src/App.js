import React, { useEffect, useState } from "react";
import "./App.css";
import OtpContainer from "./components/otpContainer/OtpContainer";

function App() {
  const [value, setValue] = useState({
    value: "",
  });
  const [otpLength, setOtpLength] = useState(6);

  useEffect(() => {
    const value = {};
    new Array(otpLength).fill(1).forEach((item, index) => {
      value[item + index] = "";
    });
    setValue({ value: "", ...value });
  }, [otpLength]);

  const handleOtpEnter = (key) => {
    setValue((prev) => ({ ...prev, ...key }));
  };
  return (
    <div className="App">
      <OtpContainer
        value={value}
        handleOtpEnter={handleOtpEnter}
        otpLength={otpLength}
      />
    </div>
  );
}

export default App;
