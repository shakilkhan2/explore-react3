import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setcountries(data));
    }, [])

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            
            {
                countries.map(country => <Country key={country} country={country}/>)
            }
        </div>
    );
};

export default Countries;