import React, { useState } from "react";

function TodoList(props) {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    // this.setState({[name]: event.target.value});
    setUserInput(event.target.value);
  }
  function addItem() {
    if (userInput !== "") {
      const todo = {
        // Add a random id which is used to delete
        id: Math.random(),
        // Add a user value to list
        value: userInput,
      };
      // Update list
      //const newList = [...list];
      newList.push(todo);
      setUserInput("");
      setList(newList);
    }
  }
  function deleteItem(key) {
    const updateList = list.filter((item) => item.id !== key);
    setList(updateList);
  }

  return (
    <div>
      <div>
        {/* <input type="text" name='userInput' ></input> */}
        <input type="text" value={userInput} onChange={handleChange} />
        <button type="button" onClick={addItem}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.value}</span>
            <button type="button" onClick={() => deleteItem(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
