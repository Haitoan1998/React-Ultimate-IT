import React, { useState } from "react";
import AddToDo from "./AddToDo";
import List from "./List";

export default function ToDoList() {
  const [listToDo, setToDo] = useState([
    { id: "todo1", name: "game" },
    { id: "todo2", name: "movie" },
    { id: "todo3", name: "music" },
  ]);
  const additem = (item) => {
    setToDo(item);
  };
  const deleteItems = (item1) => {
    let newArray = listToDo.filter((item) => item.id !== item1.id);
    setToDo(newArray);
  };
  console.log(listToDo);
  return (
    <div>
      <AddToDo listToDo={listToDo} additem={additem}>
        Todo
      </AddToDo>
      <br />

      <List listToDo={listToDo} deleteItems={deleteItems} />
    </div>
  );
}
