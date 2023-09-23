import React, { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function UseMemoCallbackMemo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [z, setZ] = useState(10);
  const TinhToan = useMemo(() => {
    console.log("hàm reNder");
    return y * y;
  }, [y]);
  const SetSTATE = useCallback(() => {
    setZ(z + 1);
  }, []);
  console.log("cha render");

  return (
    <div>
      <div>biến x:{x}</div>
      <div>hàm tính toán:{TinhToan}</div>
      <div>biến Z:{z}</div>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        Click X
      </button>
      <button
        onClick={() => {
          setY(y + 1);
        }}
      >
        Click Y
      </button>
      <ChildComponent y={y} SetSTATE={SetSTATE} />
    </div>
  );
}
