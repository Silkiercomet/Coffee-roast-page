import WhyUsCard from '../atoms/WhyUsCard';
import {cardsContent} from "../../ultils/content"

const WhyUsSection = () => {

  return (
    <section>
      <div>
        <h2>Why choose us?</h2>
        <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
      </div>
      <ul>
        {cardsContent.map((card, index) => (
          <WhyUsCard
            key={index}
            imageRoute={card.imageRoute}
            header={card.header}
            content={card.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default WhyUsSection;
