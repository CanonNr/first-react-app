import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component{
    render() {
        return (<h1> {this.props.title} </h1>);
    }
}
class SubTitle extends React.Component{
    render() {
        return React.createElement("div",{className:"subTitleBOx"},
            React.createElement("form",{id:"select"},
                React.createElement("select",null,
                    React.createElement("option",{value:"test1"},"test1"),
                    React.createElement("option",{value:"test2"},"test2")
                )
            )
        )
    }

}

class Square extends React.Component {
    render(i) {
        return (
            <button className="square">
                {this.props.name}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square name={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <Title title="测试一下" />
                <SubTitle subTitle="副标题"/>
                <div className="status">{status}</div>
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
                    <ol>{/* TODO */}</ol>
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
