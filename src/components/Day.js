import React from "react";
import { Hour } from "./Hour"

export const Day = (props) => {

    const render = (item, i) => {
        return <Hour key={i} result={item} />
    }

    return (
        <div className="day">
            <h2>{props.hourly[0]}</h2>
            {props.hourly[1].map(render)}
        </div>
    )
}