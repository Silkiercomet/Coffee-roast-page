import Country from '../moleculs/Country';

const Headquarters = () => {
  const countries = [
    { img: 'img1.jpg', country: 'Mexico', street: 'Av. Siempre Viva', city: 'Springfield', zip: '12345', telf: '555-1234' },
    { img: 'img2.jpg', country: 'USA', street: 'Easy Street', city: 'Springfield', zip: '67890', telf: '555-5678' },
    { img: 'img3.jpg', country: 'Canada', street: 'Maple Drive', city: 'Toronto', zip: '13579', telf: '555-9012' },
  ];

  return (
    <section>
      <h3>Our Headquarters</h3>
      <ul>
        {countries.map((country, index) => (
          <Country
            key={index}
            img={country.img}
            country={country.country}
            street={country.street}
            city={country.city}
            zip={country.zip}
            telf={country.telf}
          />
        ))}
      </ul>
    </section>
  );
};

export default Headquarters;
