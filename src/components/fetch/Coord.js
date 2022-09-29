import { React, useState, useEffect } from "react";
import { Links } from './Links'


//  add form validation

//incorrect fetch request bug.. when await and async are taken out, the page loads correctly//

export function Coord(props) {
    const [ coords, setCoords ] = useState(null);

    useEffect(() => {
        let url = 'https://geocode.maps.co/search?q=';
        let endpoint = `${url}${props.location}`;
        console.log('once');
        fetch(endpoint)
            .then(response => response.json())
            .then(json => `${json[0].lat},${json[0].lon}`)
            .then(parsed => {setCoords(parsed)})
    }, [props]);
    

    return (
        <div>
            {coords && <Links coords={coords} loaded={props.loaded} />}
        </div>
    )
}