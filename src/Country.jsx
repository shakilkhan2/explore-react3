const Country = ({ country }) => {
    console.log(country);
    return (
        <div style={{border: "1px solid purple", borderRadius: "10px", margin:"15px", backgroundColor: "purple"}}>
            
            <h3>{country.name?.common}</h3>
            <img src={country.flags?.png} alt="" />
        </div>
    );
};

export default Country;