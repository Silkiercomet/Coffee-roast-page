interface Props {
  title: string;
  content: string;
  img: string;
  inverse: boolean;
}

const SecondaryBanner: React.FC<Props> = ({ title, content, img, inverse }) => {
  return (
    <section className={inverse ? 'inverse' : ''}>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <img src={img} alt={title} />
    </section>
  );
};

export default SecondaryBanner;
