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
        console.log("My name is" + this.state.name);
        // console.log(event.target);

    }

    handleOnMouseOver(event) {
        console.log(event)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}
export default MyComponent;