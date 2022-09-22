import { Hourly } from './Hourly.js';
import { React, useState, useEffect } from 'react';

//Nashville coordinates lat,long
//let coordinates = '36.166340,-86.779068';

export const Links = (props) => {
    const coords = props.coords;
    const [ link, setLink ] = useState(null);
    
    useEffect(()=>{
        const baseURL = 'https://api.weather.gov/points/';
        const endpoint = baseURL + coords;
        fetch(endpoint)
                .then(response => response.json())
                .then(json => json.properties.forecastHourly)
                .then(parsed => setLink(parsed));
    }, []);

    return (
        <div>
            {link && <Hourly url={link} loaded={props.loaded} />}
        </div>
    )
}