import React from "react";
import {Box } from "./Box";
import "./Board.css";

export const Board = ({board, onClick}) => {
    return (
<div className="board">
    {board.map((value, i) => {
        return <Box value ={value} onClick ={() => onClick(i)} />
    })}
</div>
    )
};