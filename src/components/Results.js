//import { testFormat } from "./fetch/getHourly.js";
import { React, useEffect, useState } from 'react';
//import { testData } from './testData'
import { Day } from './Day'

export function Results (props) {
    const [ results, setResults ] = useState();

    const refine = (hour) => {
        const start = new Date(hour.startTime);
        const obj = {
            "number": hour.number,
            "isDay": hour.isDaytime ? 'Day' : 'Night',
            "condition": hour.shortForecast,
            "icon": hour.icon,
            "date": start.toDateString(),
            "time": start.toLocaleTimeString().replace(":00:00", ""),
            "temperature": hour.temperature + '˚ ' + hour.temperatureUnit,
            "wind": hour.windSpeed + ' ' + hour.windDirection
        }
        return obj;
    }

    console.log('run2')

    const groupByDate = (total, hour) => {
        total[hour.date] = total[hour.date] || [];
        total[hour.date].push(hour);
        return total;
    }
    
    const pushToDayComponent = (result, i) => {
        return <Day key={i} hourly={result} />
    }

    useEffect(()=>{
        let unsorted = props.hourly.map(refine);
        let sortedObj = unsorted.reduce(groupByDate);
        //console.log(sevenDayResults);
        let sortedArr = Object.entries(sortedObj);
        let sevenDayResults = sortedArr.filter(arr => Array.isArray(arr[1]));
        props.loaded();
        setResults(sevenDayResults);
        
    }, [props])

    
    return(
        <ol id="results">
            {results && results.map(pushToDayComponent)}
        </ol>
    )
}