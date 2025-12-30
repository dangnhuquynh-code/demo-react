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
    handleOnChangeInput = (event) => {
        // console.log(event, event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        alert('me')
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}, I'm {this.state.age} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default MyComponent;