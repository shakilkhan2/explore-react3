import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setcountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountries(data));
  }, []);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    
  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <div>
              <h2>Visited Countrier: { visitedCountries.length}</h2>
        <ul>{visitedCountries}</ul>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
