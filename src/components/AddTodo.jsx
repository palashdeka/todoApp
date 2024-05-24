import { useState } from "react";
import "../App.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChnage = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChnage = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClick = (event) => {
    // onNewItem(todoName, dueDate);
    // setTodoName(" ");
    // setDueDate(" ");
    console.log(event);
    event.preventDefault();
  };
  return (
    <div className="container text-center">
      <form action="" className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChnage}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChnage} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
