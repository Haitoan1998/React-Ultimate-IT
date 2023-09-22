import React from "react";

export default function List(props) {
  const listToDo = props.listToDo;
  const deleteItems = props.deleteItems;
  return (
    <div>
      {listToDo.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <button
              onClick={() => {
                deleteItems(item);
              }}
            >
              Xóa
            </button>
          </div>
        );
      })}
    </div>
  );
}
