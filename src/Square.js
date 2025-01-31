import React from "react";
import "./app.css";

function Square(props) {
  return (
    <>
      <div className="block" {...props}>
        <p>{props.data}</p>
      </div>
    </>
  );
}
export default Square;
