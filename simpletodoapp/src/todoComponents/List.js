import React, { useState } from "react";
function List(props) {
  const itemss = props.val;
  return (
    <div className=" mt-5">
      <ul className="list-unstyled ">
        <div>
          {props.arr.map((itemss, index) => {
            return (
              <div
                className="bg-primary bg-opacity-25 rounded mb-2 col-lg-12 d-flex"
                style={{ paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}
              >
                <li
                  className="mt-2 "
                  key={index}
                  id={index}
                  style={{ width: 400, paddingLeft: 5 }}
                >
                  {itemss}
                </li>
                <button
                  className="btn btn-primary  ml-3"
                  onClick={() => {
                    props.dell(itemss);
                  }}
                  style={{}}
                >
                  <i class="fa-solid fa-trash-can text-white"></i>
                </button>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default List;
