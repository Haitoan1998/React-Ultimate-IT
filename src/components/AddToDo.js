import React, { useState } from "react";
import _ from "lodash";

export default function AddToDo({ listToDo, additem }) {
  const [name, setName] = useState("");

  return (
    <div>
      <div>
        <label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <button
          onClick={() => {
            let currentToDoList = _.clone(listToDo);
            currentToDoList.push({ id: Math.random() * 1000, name: name });
            additem(currentToDoList);
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}
