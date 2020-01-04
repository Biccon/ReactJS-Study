import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props){
    //     super(props);
    //     this.handleIncrease = this.handleIncrease(this);
    //     this.handleDecrease = this.handleDecrease(this);
    // }

    state = {
        number : 0
    }
    
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        );
    }
    
    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;