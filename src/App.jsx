import { useState } from 'react'
import Header from './components/header';
import './index.css';

function Square({value, onSqrClick}){
    return (
        <button className="square" onClick={onSqrClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsTrue, setXIsTrue] = useState(true);

    function handleClick(i){
        if (squares[i] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[i] = xIsTrue ? "X" : "O";
        setSquares(newSquares);
        setXIsTrue(!xIsTrue);
    }

    const winner = calculateWinner(squares);
    let status = "";
    if (winner) {
        status = "Winner: " + winner + "!";
    }
    else {
        status = "Next round: " + (xIsTrue ? "X" : "O");
    }

    return (
        <>
            <div className='round'>
                {status}
            </div>
            <div className='board'>
                <Square value={squares[0]} onSqrClick={() => handleClick(0)} />
                <Square value={squares[1]} onSqrClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSqrClick={() => handleClick(2)}/>
                <Square value={squares[3]} onSqrClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSqrClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSqrClick={() => handleClick(5)}/>
                <Square value={squares[6]} onSqrClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSqrClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSqrClick={() => handleClick(8)}/>
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],        
    ];

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] == squares[b] && squares[b] == squares[c]){
            return squares[a];
        }

    }
    return false;
}
