import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countryData=use(countriesPromise)
  const countries = countryData.countries;
  console.log(countries)
    return (
        <div className='countries'>
            <h3>In The Countries:{countries.length}</h3>
            {countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)}
        </div>
    );
};

export default Countries;