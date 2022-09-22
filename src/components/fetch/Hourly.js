//import { testData } from './testData.js';
import { Results } from '../Results'
import { React, useState, useEffect } from 'react';

export const Hourly = (props) => {
    const [ hourly, setHourly ] = useState(null);

    useEffect(()=>{
        fetch(props.url)
            .then(response => response.json())
            .then(jsonResponse => jsonResponse.properties.periods)
            .then(hourly => setHourly(hourly))
    }, [])

    return (
        <div>
            {hourly && <Results hourly={hourly} loaded={props.loaded} />}
        </div>
    )
}

/* //for testing
export const testFormat = () => {
    return testData.properties.periods.map(map);
} */