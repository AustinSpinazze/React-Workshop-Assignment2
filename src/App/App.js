import React, { useState, useEffect, Fragment } from 'react';

import Board from './Board/Board';
import { calculateWinner } from '../shared/utils';
import { DEFAULT_BOARD } from '../shared/constants';
import './App.css';

const App = () => {
    const {squares, xIsNext, status, moves} = DEFAULT_BOARD;
    const [state, setState] = useState({ squares, xIsNext, status, moves });

    useEffect(() => {
        setState((prevState) => {
            const winner = calculateWinner(prevState.squares);
            let tempStatus = ""
            if (winner) {
                tempStatus = 'Winner ' + winner + "!";
            }
            else if (prevState.moves >= 9) {
                tempStatus = "Its a draw!";
            }
            else {
                tempStatus = 'Next player: ' + (prevState.xIsNext ? 'X' : 'O')
            }
            return ({
                ...prevState,
                status: tempStatus
            });
        });
    }, [state.squares, state.moves, state.xIsNext]);

    const resetBoard = () => {
        setState(DEFAULT_BOARD);
    }

    const handleClick = (i) => {
        setState((prevState) => {
            const tempSquares = prevState.squares.slice();
            if (calculateWinner(tempSquares) || tempSquares[i]) {
                return ({ ...prevState });
            }
            tempSquares[i] = prevState.xIsNext ? 'X' : 'O';
            return ({
                ...prevState,
                xIsNext: !prevState.xIsNext,
                moves: prevState.moves + 1,
                squares: tempSquares
            })
        });
    }

    return (
        <Fragment>
            {state ?
                <div className="game">
                    <Board handleClick={handleClick} status={state.status} squares={state.squares} resetBoard={resetBoard} />
                </div> : null
            }
        </Fragment>
    );
}

export default App;