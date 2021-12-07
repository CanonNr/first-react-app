import React from 'react';
import ReactDOM from 'react-dom';


class Box extends React.Component{
    render() {
        return (
            <h1>Test</h1>
        );
    }
}

// ========================================

ReactDOM.render(
    <Box />,
    document.getElementById('root')
);
