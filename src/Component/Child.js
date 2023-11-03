import React from "react";

const ChildComponent = ({name}) => {

    return (<div>Child
        <p>
            this is the text from parent {name}
        </p></div>)
}

export default ChildComponent;