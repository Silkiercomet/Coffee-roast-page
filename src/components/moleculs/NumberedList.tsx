import NumberedCard from '../atoms/NumberedCard';

interface Element {
  header: string;
  content: string;
}

interface NumberedListProps {
  elements: Element[];
}

const NumberedList = ({ elements }: NumberedListProps) => (
  <ol>
    {elements.map((element, index) => (
      <NumberedCard key={index} header={element.header} content={element.content} />
    ))}
  </ol>
);

export default NumberedList;
