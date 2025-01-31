import react, { useState } from "react";
import "./app.css";

function TicTacToe() {
  const [result, setResult] = useState(Array(9).fill(null));
  const [cond, setCond] = useState(false);

  console.log(result);

  function handleClick(index) {
    if (result[index]) {
      return;
    }
    const data = [...result];
    data[index] = cond ? "X" : "O";
    setResult(data);
    setCond((cond) => !cond);
  }

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (var i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (result[a] && result[a] === result[b] && result[a] === result[c]) {
        return result[a];
      }
    }
    return null;
  };
  const winner = checkWinner();

  function handleReset() {
    const value = Array(9).fill(null);
    setResult(value);
  }
  return (
    <>
      <div className="container">
        <h1>TicTacToe</h1>
        <p>
          {winner
            ? `winner : ${winner}`
            : result.includes(null)
            ? `Next Player ${cond ? "X" : "O"}`
            : "it is draw"}
        </p>
        <div className="result">
          {result.map((item, index) => {
            return (
              <button
                className="item"
                onClick={() => handleClick(index)}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <button className="reset" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </>
  );
}
export default TicTacToe;
