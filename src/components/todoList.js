import React from "react";
import Todos from "./todos";

function TodoList(props) {
  const list = props.items;
  //const list = props.item;
  

  return (
    <div>
      {" "}
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <input type="text" value={item.value} onChange={(event)=>event.preventDefault()}></input>
            {/* <span>{item.value}</span> */}
            <button type="button" onClick={() => props.updateItem(item.id,item.value)} >
              Update
            </button>
            <button type="button" onClick={() => props.deleteItems(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
