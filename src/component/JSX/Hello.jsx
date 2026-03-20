import React from "react"

export const Hello = () => {
    return (
        <div id="container">
            <h1>Hello Dave</h1>
        </div>
    )
}

//without jsx is messy!
export const HelloWithoutJSX = () => {
    return React.createElement(
        "div", //it means this is the element <div>
        {id: "container" }, //identifier of the element
        "Without JSX", // and the value
        /* but you can also do this instead if you want to have a multiple
        element in one div
        React.createElement(
        "h1", // element
        null, // no identifier or attributes
        "Hello Dave") // value */
        
    )
}