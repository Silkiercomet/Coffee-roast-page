import style from "./CollectionCard.module.css"
interface Props {
  image: string;
  title: string;
  description: string;
}

const CollectionCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <li className={style.card}>
      <img src={image} alt={title} />
      <div className={style.card_text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default CollectionCard;
