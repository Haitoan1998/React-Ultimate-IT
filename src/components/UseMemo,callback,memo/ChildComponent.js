import React, { memo } from "react";

function ChildComponent({ SetSTATE, y }) {
  console.log("child render");
  return (
    <div>
      child
      <div
        onClick={() => {
          SetSTATE();
        }}
      >
        click Z
      </div>
      <div>{y}</div>
    </div>
  );
}
export default memo(ChildComponent);
