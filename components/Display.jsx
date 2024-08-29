import React from "react"

/*
Props:
displayText: the text that should be displayed when a drumpad is clicked
or key pressed
*/
export default function Display(props) {
    return (
        <h3 id = "display">{props.displayText}</h3>
    )
}