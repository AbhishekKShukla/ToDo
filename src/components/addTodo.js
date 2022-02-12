import React, { useEffect, useState } from "react";

function AddTodo(props) {
  const [userInput, setUserInput] = useState("");
//   useEffect(()=>{
//       if(todo.value)
//       {
//           setUserInput(todo.value)
//       }
//   },[props.todo]);
  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function addItem() {
    if (userInput !== "") {
        // const todoItem = {
        //     id: Math.random(),
        //     value: userInput,
        //   };
        //   setUserInput("");
      props.addTodo(userInput);
    }
  }

  return (
    <div align="center">
      <input type="text" value={userInput} onChange={handleChange} />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </div>
  );
}
export default AddTodo;
