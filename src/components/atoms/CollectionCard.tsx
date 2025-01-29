interface Props {
  image: string;
  title: string;
  description: string;
}

const CollectionCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default CollectionCard;
