import React, { useState } from "react";
import "./App.css";
import OtpContainer from "./components/otpContainer/OtpContainer";

function App() {
  const [value, setValue] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const handleOtpEnter = (key) => {
    setValue((prev) => ({ ...prev, ...key }));
  };
  return (
    <div className="App">
      <OtpContainer value={value} handleOtpEnter={handleOtpEnter} />
    </div>
  );
}

export default App;
