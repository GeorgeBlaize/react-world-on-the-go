import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {

    const [visiedCountries,setVisitedCountries] =useState([]);
    
    const countries =use(countriesPromise);

    const handleVisitedCountries = (country) =>{
        console.log('country visited clicked to be added',country);
    }

    

    return (
        <div >
             <h1>Travling Countries: {countries.length}</h1>
             <h3>Traveled so far: </h3>
           <div className='countries'>
          
            {
                countries.map(country =><Country key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;