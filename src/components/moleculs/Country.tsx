interface CountriesProps {
  img: string;
  country: string;
  street: string;
  city: string;
  zip: string;
  telf: string;
}

const Country: React.FC<CountriesProps> = ({ img, country, street, city, zip, telf }) => {
  return (
    <li>
      <img src={img} alt={country} />
      <h4>{country}</h4>
      <p>{street}</p>
      <p>{city}</p>
      <p>{zip}</p>
      <p>{telf}</p>
    </li>
  );
};

export default Country;
