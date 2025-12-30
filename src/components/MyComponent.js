//class component
//function component

import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Như Quỳnh',
        address: 'HCM',
        age: 22
    };
    handleClick(event) {
        // console.log(">>> click me my fucntion");

        console.log("random " + Math.floor((Math.random() * 100) + 1));
        this.setState({
            name: 'Nhu Quynh',
            age: Math.floor((Math.random() * 100) + 1)
        });
        // console.log(event.target);

    }

    handleOnMouseOver(event) {
        // console.log(event)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age} and I'm from {this.state.address}
                <button onMouseOver={(event) => { this.handleOnMouseOver(event) }}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        )
    }
}
export default MyComponent;