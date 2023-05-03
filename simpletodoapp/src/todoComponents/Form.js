import { useState } from "react";
import List from "./List";

function Form(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setInput("");
  };
  const [inputs, setInputs] = useState([]);
  const addTodo = () => {
    {
      if (input === "") {
        alert("Enter Todo");
        return;
      }
    }
    {
      if (inputs.length === 4) {
        inputs.pop();
      }
    }
    setInputs([input, ...inputs]);
  };

  const deleteTodo = (text) => {
    const newNames = inputs.filter((input) => {
      return input != text;
    });
    setInputs(newNames);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-lg-12 d-flex">
        <div className="col-lg-9">
          <input
            className="form-control border-primary "
            type="text"
            value={input}
            placeholder="add new todo"
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <div className="col-lg-4 ">
          <button
            className="btn btn-primary px-4"
            type="submit"
            onClick={addTodo}
            style={{ marginLeft: 35 }}
          >
            Add
          </button>
        </div>
      </div>

      <List val={input} dell={deleteTodo} arr={inputs}></List>
    </form>
  );
}
export default Form;
