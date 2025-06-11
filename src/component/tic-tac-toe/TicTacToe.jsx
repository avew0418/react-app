import { useState } from "react";
import "./tictactoe.css"; // 匯入樣式

// 單一格子元件
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// 棋盤元件
function Board({ squares, onSquareClick }) {
  // 產生 3x3 棋盤
  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
      />
    );
  }
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// 勝負判斷
function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

// 主元件
export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // 棋盤狀態
  const [xIsNext, setXIsNext] = useState(true); // 輪到誰
  const winner = calculateWinner(squares); // 判斷勝負

  // 處理格子點擊
  function handleSquareClick(i) {
    if (squares[i] || winner) return; // 已有值或已分勝負則不處理
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // 重設遊戲
  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) {
    status = "勝利者: " + winner;
  } else if (squares.every(Boolean)) {
    status = "平手！";
  } else {
    status = "下一步: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onSquareClick={handleSquareClick} />
        <div style={{ margin: "16px 0", fontWeight: "bold" }}>{status}</div>
        <button onClick={handleReset} style={{ padding: "8px 16px", borderRadius: "8px" }}>
          重新開始
        </button>
      </div>
    </div>
  );
}
