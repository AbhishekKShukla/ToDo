import React, { useState } from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";

function Todos(props) {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [id, setId] = useState("");
  const [setEdit,setEditTodo]=useState(null);

  function deleteItem(key) {
    const updateList = list.filter((item) => item.id !== key);
    setList(updateList);
  }
  function updateItem(key,value) {
    debugger;
    //const findTodo=list.find((item)=>item.id===id);
    //setEditTodo(item=>item.map(item=>(item.id===key?value :item)));
    setUserInput(item=>item.map(item=>(item.id===key?value :item)));

    //setUserInput(value);
    //  const updateListItem = list.map((item) => {
    //   if(item.id == key)  
    //   {
    //    item.value="value";
    //   }
    //   return item;
    // });
    // setList(updateListItem);

    // const updateListItem = list.map((item) => {
    //   if(item.id == key)  
    //   {
    //    item.value="Abhishek";
    //   }
    //   return item;
    // });
   // setList(updateListItem);
  }
  function addTodo(todo) {
    const newList = [...list];
    const todoItem = {
      id: Math.random(),
      value: todo,
    };
    newList.push(todoItem);
    //setUserInput("");
    setList(newList);
  }
  return (
    <div>
      <AddTodo addTodo={addTodo} value={userInput} />
      <TodoList items={list} deleteItems={deleteItem} updateItem={updateItem} />
    </div>
  );
}
export default Todos;
