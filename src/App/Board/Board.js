import React from 'react';

import Square from '../Square/Square';
import './Board.css';

const Board = ({ status, handleClick, squares, resetBoard }) => {
    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} onClick={handleClick} index={i} />
        );
    }

    return (
        <div className="board">
            <div className="status">{status}</div>
            <div className="board-grid">
                {squares.map((value, index) => {
                    return (
                        <div key={index}>
                            {renderSquare(index)}
                        </div>
                    )
                })}
            </div>
            <button className="button" onClick={resetBoard}>Reset Board</button>
        </div>
    )
}

export default Board;