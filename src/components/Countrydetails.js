import React, { useEffect, useState } from 'react';
import myCountries from "../countries.json"
import {NavLink} from "react-router-dom"

function Countrydetails({match}) {

  

    const [country, setCountry] = useState({})
    const [filter, setFilter] = useState("")

    //Component lifecycle
    
    //1. Mounting phase - Happens the 1st time the component is rendered
    //get information from APIs
    // useEffect hook
    useEffect(() => {
        //Code in here, Will happen one time when the component is first rendered 
        const countryId = match.params.id;
        const foundCountry = myCountries.find((country) => country.alpha3Code === countryId);
        console.log(foundCountry);
        setCountry(foundCountry);
    },  [match.params.id]); //<= Dependency Array
    
    
    //2. Update phase
    useEffect(() => {
         console.log("Call an api again with information from the input");

    }, [filter, match.params.id]);
    
    //3. Unmounting phase
    useEffect (() => {
        return () => {
            console.log("Component is unmounting")
        };
    }, []);

    return ( 
    <>
      <input
        type ="text"
        value = {filter}
        onChange={(e) => setFilter(e.target.value)}
      />
     
     <div className="col-7">
        <img src = {`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt = "country flag" />
         <p>{country.name} </p>
			<table className="table">
				<thead />
				<tbody>
					<tr>
						<td className="countryDetailTd">Capital</td>
						<td>{country.capital}</td>
					</tr>
					<tr>
						<td>Area</td>
						<td>
							{country.area} km <sup>2</sup>
						</td>
					</tr>
					<tr>
						<td>Borders</td>
						<td>
							<ul>
                                    {country.borders && country.borders.map((border) => {

                                        const borderedCountry = myCountries.find((country) => country.alpha3Code === border);

                                        
                                        return (
                                            <ul key={border}>
                                                <NavLink exact to={`/${border}`}>
                                                    <li className="linkACursor">{borderedCountry.name}</li>
                                                </NavLink>
                                            </ul>
									);
								})}
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
        </>
	);
    
}
 
    


 export default Countrydetails