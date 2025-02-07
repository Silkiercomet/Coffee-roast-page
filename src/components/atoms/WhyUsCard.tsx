import style from "./WhyUsCard.module.css"
interface WhyUsCardProp {
  Image: JSX.Element;
  header: string;
  content: string;
}

const WhyUsCard: React.FC<WhyUsCardProp> = ({ Image, header, content }) => (
  <li className={style.card}>
    {Image}
    <h3 className={style.card_header}>{header}</h3>
    <p className={style.card_content}>{content}</p>
  </li>
);

export default WhyUsCard;
