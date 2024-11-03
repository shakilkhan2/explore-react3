const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
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
          <button style={{backgroundColor: "purple"}}>Visited</button>
    </div>
  );
};

export default Country;
