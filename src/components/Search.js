import { React, useState } from "react";
import { Coord } from "./fetch/Coord.js";
//import { Route, Link } from "react-router-dom"
import { Loading } from "./Loading.js";

export function Search (props) {
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    /* function handleInvalid(){
        if(document.getElementById('city').value === null){
            return 'Please enter a city and state';
        }
    } */

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function handleStateChange(event){
        setState(event.target.value);
    }

    function loaded(){
        setIsLoading(false);
    }

    function unsubmit(){
        setIsSubmitted(false);
    }

    function handleSubmit(event){
        event.preventDefault();
        setIsSubmitted(true);
        //setTimeout(() => {setIsSubmitted(false)}, 2000)
    }



    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                    id='city' 
                    type="text" 
                    value={city}
                    onChange={handleCityChange}
                    placeholder="City" />
                <select 
                    id="state" 
                    type="text" 
                    value={state}
                    onChange={handleStateChange} 
                    placeholder="State">
                    <option>State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <br />
                <input type="submit" value="get weather" onClick={unsubmit}></input>
            </form>
            {isLoading && <Loading />}
            {isSubmitted && <Coord location={`${city}, ${state}`} loaded={loaded} />}
        </div>
    )
}