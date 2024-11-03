const Country = ({ country }) => {
  console.log(country);
  return (
    <div
      style={{
        border: "1px solid purple",
        borderRadius: "10px",
              margin: "15px",
        padding: "10px"
      }}
    >
      <h3>{country.name?.common}</h3>
      <img style={{height: "10rem"}} src={country.flags?.png} alt="" />
    </div>
  );
};

export default Country;
