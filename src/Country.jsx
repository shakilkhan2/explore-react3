import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      style={{
        border: "1px solid purple",
        borderRadius: "10px",
        margin: "15px",
        padding: "10px",
      }}
    >
      <h3>{name?.common}</h3>
      <img style={{ height: "10rem" }} src={flags?.png} alt="" />
      <h4>Shortcode: {cca3}</h4>
      <h4>Area: {area}</h4>
      <h4> Population: {population}</h4>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>{" "}
      <br />
      <button
        onClick={handleVisited}
        style={{ backgroundColor: "purple" }}
        disabled={visited}
      >
        {visited ? "Visited" : "Visit"}
      </button>
    </div>
  );
};

export default Country;
