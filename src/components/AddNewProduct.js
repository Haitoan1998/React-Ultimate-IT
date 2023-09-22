import React, { useState } from "react";

export default function AddNewProduct({ showHider }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");

  const handleClick = () => {
    let obj = { name, price, size, color };
    if (localStorage.getItem("productList")) {
      let arr = JSON.parse(localStorage.getItem("productList"));
      arr.push(obj);
      localStorage.setItem("productList", JSON.stringify(arr));
    } else {
      localStorage.setItem("productList", JSON.stringify([]));
    }
    setName("");
  };

  // localStorage.setItem("name", "eric");
  // localStorage.setItem("chanel", "hoi dan it");
  // console.log(localStorage.getItem("name"));
  // localStorage.removeItem("name");
  // localStorage.clear();
  return (
    <>
      {" "}
      <div>
        <div>AddNewProduct</div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="text"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Add new
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          showHider();
        }}
      >
        Hide
      </button>
      <div>{localStorage.getItem("productList")}</div>
    </>
  );
}
