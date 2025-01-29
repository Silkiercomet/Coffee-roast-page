import React from 'react';
import NumberedCard from '../atoms/NumberedCard';

interface HowItWorksItem {
  header: string;
  content: string;
}

const HowItWorksSection: React.FC = () => {
  const howItWorks: HowItWorksItem[] = [
    { header: 'Header 1', content: 'Content 1' },
    { header: 'Header 2', content: 'Content 2' },
    { header: 'Header 3', content: 'Content 3' },
  ];

  return (
    <section>
      <h3>How it works</h3>
      <ol>
        {howItWorks.map((item, index) => (
          <li key={index}>
            <NumberedCard header={item.header} content={item.content} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorksSection;
