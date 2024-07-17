import React from "react";
import Button from "./components/Button.jsx";

const App = () => {
    return (
        <div className="container">
            <h1 className="title">Stales</h1>
            <div className="btn-cont">
                <Button text="Click" type="submit"/>
                <Button text="Reset" type="reset" />
            </div>
        </div>
    )
}

export default App