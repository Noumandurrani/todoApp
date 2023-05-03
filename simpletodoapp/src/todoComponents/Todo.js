import React from "react";
import Form from "./Form";

function Todo() {
  return (
    <div
      className="card overflow-hidden"
      style={{
        width: 500,
        height: 350,
        marginTop: 50,
        left: 400,
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
      }}
    >
      <div className="col-lg-12">
        <Form></Form>
      </div>
    </div>
  );
}

export default Todo;
