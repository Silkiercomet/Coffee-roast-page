interface ListItemProps {
  header: string;
  content: string;
}

const NumberedCard = ({ header, content } : ListItemProps) => (
  <li className="ordered-list-item">
    <h3>{header}</h3>
    <p>{content}</p>
    <span aria-label="hidden"></span>
  </li>
);

export default NumberedCard