import React, { VFC } from "react";
import ReactDOM from "react-dom";

const Index: VFC = () => {
    return <h1 className="text-red-600">Hello World</h1>;
};

export default Index;

ReactDOM.render(<Index />, document.getElementById("app"));
