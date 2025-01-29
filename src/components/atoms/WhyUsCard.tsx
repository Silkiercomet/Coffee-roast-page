interface WhyUsCardProp {
  imageRoute: string;
  header: string;
  content: string;
}

const WhyUsCard: React.FC<WhyUsCardProp> = ({ imageRoute, header, content }) => (
  <li>
    <img src={imageRoute} alt={header} />
    <h3>{header}</h3>
    <p>{content}</p>
  </li>
);

export default WhyUsCard;
