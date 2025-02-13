import Country from '../moleculs/Country';
import {addressData} from "../../ultils/content"
import style from "./Headquaters.module.css"
const Headquarters = () => {

  return (
    <section className={style.headquarters}>
      <h3 className={style.headquarters_header}>Our Headquarters</h3>
      <ul className={style.headquarters_list}>
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
