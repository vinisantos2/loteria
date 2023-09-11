import React, { useState } from 'react'
import './Button.css'
import * as ReactDOM from 'react-dom';





export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''


    const [style, setStyle] = useState("button");

    function Mudacor() {

        if (props.array) {
            const array = props.array
            if (array.includes(props.label)) {
                setStyle("ativo");

            } else {
                setStyle("button");
            }

        }


        console.log("you just clicked");

    }

    function click(e) {
        props.click && props.click(props.label)
        Mudacor()
    }




    return (
        <button
            onClick={e => click(e)}
            className={classes + style}>
            {props.label}
        </button>
    )
}