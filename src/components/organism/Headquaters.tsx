import Country from '../moleculs/Country';
import {addressData} from "../../ultils/content"
const Headquarters = () => {

  return (
    <section>
      <h3>Our Headquarters</h3>
      <ul>
        {addressData.map((country, index) => (
          <Country
            key={index}
            img={country.image}
            country={country.country}
            street={country.street}
            city={country.city}
            zip={country.zip}
            telf={country.phone}
          />
        ))}
      </ul>
    </section>
  );
};

export default Headquarters;
