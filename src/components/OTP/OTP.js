import React, { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import CountDownAnimation from "./CountDownAnimation";

export default function OTP() {
  const [orgOTPParent, setOrgOTPParent] = useState("");
  const [userOTPParent, setUserOTPParent] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const handleSubmit = () => {
    if (!orgOTPParent) {
      alert("Chưa có OTP");
      return;
    }
    if (!userOTPParent) {
      alert("Chưa nhập OTP");
      return;
    }
    +orgOTPParent === +userOTPParent ? alert("ok") : alert("looix");
  };
  return (
    <div className="otp">
      <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
      <InputOTP
        setUserOTPParent={setUserOTPParent}
        handleSubmit={handleSubmit}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />
    </div>
  );
}
