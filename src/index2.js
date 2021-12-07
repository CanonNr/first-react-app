import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step:0,
            current:true,
            winner:null,
            squares: Array(9).fill(null),
        };
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        // 是否已决出胜者
        if (this.state.winner == null){
            // 判断该位置是否已经落子
            if (squares[i] == null){
                // 落子
                const current = this.state.current;
                squares[i] = current?"○":"×";
                this.setState({squares: squares});
                // 交换选手
                this.setState({current:!current})
            }
            // 判断是否赢得比赛
            let winnerUser = calculateWinner(squares);
            if(winnerUser != null ){
                this.setState({winner:winnerUser})
            }
        }

    }
    renderSquare(i) {
            return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const stepNumber = 'step Number : ' + (this.state.step +1);
        const status = 'Next player: ' + (this.state.current?"○":"×");
        const winner = 'Winner : ' + (this.state.winner == null ? "" : (this.state.winner ? "○":"×"));
        return (
            <div>
                <div className="status">{status}</div>
                <div className="winner">{winner}</div>
                <div className="stepNumber">{stepNumber}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
