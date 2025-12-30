//class component
//function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    render() {
        // const myAge = 50;
        const myInfo = ['a', 'b', 'c'];
        return (
            <div>
                <UserInfo></UserInfo>
                <br />
                <br />
                <DisplayInfo name="Như Quỳnh" age="22"></DisplayInfo>
                <hr />
                <DisplayInfo name="Nhu Quynh" age={26} myInfo={myInfo}></DisplayInfo>
            </div>
        )
    }
}
export default MyComponent;