import { React, useState } from "react";

export function Hour (props) {
    const result = props.result;
    const { number, light, condition, icon, date, time, temperature } = result;


    
    return <li>{time} || {temperature} || {condition}</li>
}