import React from "react";
import Header from "./header";
// import TodoList from "./todos-list";
import Todos from "./todos";
import Footer from "./footer";

function App(props) {
  return (
    <div>
      <Header />
      <Todos />
      <Footer/>
    </div>
  );
}
export default App;
