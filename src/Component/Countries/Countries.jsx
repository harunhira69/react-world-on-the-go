import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countryData=use(countriesPromise)
  const countries = countryData.countries;
  const[visitesCountries,setVisitedCountries] = useState([])
const handleVisitedCountries=(country)=>{
    const newVisitedCountry =[...visitesCountries,country];
    setVisitedCountries(newVisitedCountry)

  }
 
    return (
        <div >
            <h3>In The Countries:{countries.length}</h3>
            <h4>Total Country Visited:{visitesCountries.length}</h4>
           <div className='countries'>
             {countries.map(country=><Country 
             key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} >

             </Country>)}
           </div>
        </div>
    );
};

export default Countries;