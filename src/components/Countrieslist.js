import React, { useState } from "react";
import myCountries from "../countries.json"
import {NavLink} from "react-router-dom"




function Countrieslist () {
    const [countries] = useState(myCountries);

    return (

        <>
        <div className="list">
        <ul>
            {countries.map((country) => {
                return ( 
                    
                   
                    <NavLink className="list-group-item list-group-item-action countryListA" exact to={`/${country.alpha3Code}`}>
                                    <img className="countriesListImage" src = {`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt = "country flag" />
                                    <p className= "pNoMargin" >{country.name} </p>
                    </NavLink>     
                )
       
            })}
        </ul>
        </div>
       
        </>
        );
       }
       
export default Countrieslist