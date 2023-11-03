import React from "react";
import ChildComponent from "./Child";

const ParentComponent = () => {
    return (<div>Parent
        <ChildComponent name={"abc"}/></div>)
}

export default ParentComponent;