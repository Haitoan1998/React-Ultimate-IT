import React, { useState } from "react";

export default function GenerateOTP({ setOrgOTPParent }) {
  const [orgOTP, setOrgOTP] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          let randomOTP = Math.floor(100000 + Math.random() * 900000);
          setOrgOTP(randomOTP);
          setOrgOTPParent(randomOTP);
        }}
      >
        Generate OTP
      </button>
      <div>Your OTP: {orgOTP}</div>
    </div>
  );
}
