import React, { useRef, useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";

export default function InputOTP({
  setUserOTPParent,
  handleSubmit,
  isDisable,
  setIsDisable,
}) {
  const [otp, setOtp] = useState("");
  const [time, SetTime] = useState();
  const timerAnimation = useRef();
  console.log(timerAnimation);

  const handleChange = (otp) => {
    console.log(otp);
    setOtp(otp);
    setUserOTPParent(otp);
  };
  return (
    <div className="otp-input">
      <div className="title-input">Enter verification code</div>
      <OtpInput
        inputStyle={{
          width: "30px",
          height: "30px",
          margin: "0 1rem",
          fontSize: "2rem",
          borderRadius: "4px",
          border: "1px solid gray",
        }}
        containerStyle={{ display: "block" }}
        value={otp}
        onChange={handleChange}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <div className="timer">
        {/* <CountDown setIsDisable={setIsDisable} /> */}
        <CountDownAnimation setIsDisable={setIsDisable} ref={timerAnimation} />
      </div>
      <div className="action-input">
        <button
          disabled={!isDisable}
          onClick={() => {
            timerAnimation.current.reset();
            setIsDisable(false);
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            handleSubmit();
          }}
          disabled={isDisable}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
