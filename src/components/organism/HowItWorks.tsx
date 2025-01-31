import NumberedCard from "../atoms/NumberedCard";

interface HowItWorksItem {
  header: string;
  content: string;
}
interface SectionProps {
  header: string;
  array: HowItWorksItem[];
}

const HowItWorksSection = ({ header, array }: SectionProps) => {
  return (
    <section>
      <h3>{header}</h3>
      <ol>
        {array.map((item, index) => (
          <NumberedCard
            key={index}
            header={item.header}
            content={item.content}
          />
        ))}
      </ol>
    </section>
  );
};

export default HowItWorksSection;
