import WhyUsCard from '../atoms/WhyUsCard';
import {cardsContent} from "../../ultils/content"
import style from "./WhyUsSection.module.css"

const WhyUsSection = () => {

  return (
    <section className={style.why_us}>
      <header className={style.why_us_header}>
        <h2>Why choose us?</h2>
        <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
      </header>
      <ul className={style.why_us_cards}>
        {cardsContent.map((card, index) => (
          <WhyUsCard
            key={index}
            Image={card.image}
            header={card.header}
            content={card.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default WhyUsSection;
