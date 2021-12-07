import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component {
    render() {
        return (<h1> {this.props.title} </h1>);
    }
}

// class SubTitleModel1 extends React.Component {
//     render(test1, test2) {
//         return React.createElement("div", {className: "subTitleBOx"},
//             React.createElement("form", {id: "select"},
//                 React.createElement("select", null,
//                     React.createElement("option", {value: "test1"}, this.props.test1),
//                     React.createElement("option", {value: "test2"}, this.props.test2)
//                 )
//             )
//         )
//     }
// }

// class OptionModel extends React.Component{
//     render(value,title) {
//        return (
//            <option value={value}>title</option>
//        )
//     }
// }


class SubTitleModel2 extends React.Component {
    constructor(optionList) {
        super(optionList);
        this.state={

        }
        // this.state.list = this.props.optionList
    }
    render(optionList) {
        return (
            <div className="subTitleBOx">
                <form id="select">
                    <select>
                        {
                            this.props.optionList.map(function(item){
                               return (
                                   <option value={item.value}>{item.title}</option>
                               )
                           })
                        }
                    </select>
                </form>
            </div>
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
        const optionListFunc = (num) => {
            const optionList = [];
            for (let i = 0; i < num; i++) {
                optionList.push({"value":"value"+(i+1) ,"title":"title"+(i+1)})
            }
            return optionList;
        }
        return (
            <div>
                <Title title="测试一下"/>
                <SubTitleModel2  optionList={optionListFunc(6)}/>
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
                    <Board/>
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
    <Game/>,
    document.getElementById('root')
);
