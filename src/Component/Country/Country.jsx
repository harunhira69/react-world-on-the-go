import React, { useState } from 'react';
import './Country.css'


const Country = ({country,handleVisitedCountries,handleFlag}) => {
 
  const[visited,setVisited] = useState(false)
  const handleVisited=()=>{
setVisited(visited?false:true)
handleVisitedCountries(country)
  
  }
    return (
        <div className={`country ${visited&&'country-visited'}`}>
          <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
          <h3>Name:{country.name.common}</h3>
          <p>Population:{country.population.population}</p>
          <h3>Region:{country.region.region}</h3>
          <h3>Capital:{country.capital.capital}</h3>
          <h3>Continents:{country.continents.continents}</h3>
          <h4>Area:{country.area.area}{country.area.area>300000?'Big Country':'Small Country'}</h4>
          <button  onClick={handleVisited}>
            {visited?'Visited':'Not Visited'}
          </button>
          <button onClick={()=>{handleFlag(country.flags.flags.png)}}>Add to Card</button>
         

        </div>
    );
};

export default Country;