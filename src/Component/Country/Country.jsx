import React from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    return (
        <div className='country'>
          <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
          <h3>Name:{country.name.common}</h3>
          <p>Population:{country.population.population}</p>
          <h3>Region:{country.region.region}</h3>
          <h3>Capital:{country.capital.capital}</h3>
          <h3>Continents:{country.continents.continents}</h3>
         

        </div>
    );
};

export default Country;