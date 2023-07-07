import React, {useState} from 'react';
import './App.css';
import {Board} from "./components/Board";
import { toBeChecked } from '@testing-library/jest-dom/matchers';

function App() {
  const WIN_PARAMS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXplaying] = useState(true);

  const handleBoxClick = (boxI) => {
    const updateBoard = board.map((value, i) =>{
      if (i === boxI) {
        return xPlaying === true ? "X" : "O";
      }else {
        return value;
      }
    })
    toBeChecked ()
    setBoard(updateBoard);
    setXplaying(!xPlaying);
  }

  const checkWinner = (board) => {
  for (let i = 0; i < WIN_PARAMS.length; i++) {
  const [x,y,z] = WIN_PARAMS[i];

  if (board[x] === board[y] && board[y] === board[z]){
    console.log(board[x])
    return board[x];
  }
  }
}
  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick}/>
   
    </div>
  );
}

export default App;
