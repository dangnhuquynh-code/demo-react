import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Như Quỳnh',
        address: 'HCM',
        age: 22
    };
    handleOnChangeInput = (event) => {
        // console.log(event, event.target.value);
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        // console.log(event, event.target.value);
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div> My name is {this.state.name}, I'm {this.state.age} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                    ></input>
                    <label>Your Age: </label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    ></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}
export default UserInfo;