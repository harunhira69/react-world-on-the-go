import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countryData=use(countriesPromise)
  const countries = countryData.countries;


  const[visitesCountries,setVisitedCountries] = useState([])
  const[visitedFlag,setVisitedFlag]= useState([])
  const handleFlag=(flag)=>{
    // const newVisitedFlag =[...visitedFlag,flag]
    // setVisitedFlag(newVisitedFlag)
    const newVisitedFlag = [...visitedFlag,flag];
    setVisitedFlag(newVisitedFlag)
  }


const handleVisitedCountries=(country)=>{
    const newVisitedCountry =[...visitesCountries,country];
    setVisitedCountries(newVisitedCountry)

    

  }
 
    return (
        <div >
            <h3>In The Countries:{countries.length}</h3>
            <h4>Total Country Visited:{visitesCountries.length}</h4>
            <h3>Total Flag Visited:{visitedFlag.length}</h3>
            <div className='image-container'>
              {visitedFlag.map((flag,index)=><img key={index} src={flag}></img>)}
            </div>
            <ol>
              {visitesCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>
           <div className='countries'>
             {countries.map(country=><Country 
             key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}
             handleFlag={handleFlag} >

             </Country>)}
           </div>
        </div>
    );
};

export default Countries;