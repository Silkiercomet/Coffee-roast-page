import NumberedCard from "../atoms/NumberedCard";
import style from "./HowItWorks.module.css";
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
    <section className={style.howitworks}>
      <h3 className={style.howitworks_header}>{header}</h3>
      <ol className={style.howitworks_list}>
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
