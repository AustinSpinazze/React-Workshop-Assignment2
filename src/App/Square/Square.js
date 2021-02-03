import React from 'react';

import './Square.css'

const Square = ({ onClick, value, index }) => {
    return (
        <button className="square" onClick={() => onClick(index)}>
            {value}
        </button>
    )
}

export default Square;