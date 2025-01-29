import React from 'react';
import WhyUsCard from '../atoms/WhyUsCard';

interface CardContent {
  imageRoute: string;
  header: string;
  content: string;
}

const WhyUsSection: React.FC = () => {
  const cardsContent: CardContent[] = [
    { imageRoute: 'imageRoute1.jpg', header: 'Header 1', content: 'Content 1' },
    { imageRoute: 'imageRoute2.jpg', header: 'Header 2', content: 'Content 2' },
    { imageRoute: 'imageRoute3.jpg', header: 'Header 3', content: 'Content 3' },
];

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
