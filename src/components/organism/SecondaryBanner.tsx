import style from "./SecondaryBanner.module.css"
interface Props {
  title: string;
  content: string;
  img: string;
  inverse: boolean;
}

const SecondaryBanner: React.FC<Props> = ({ title, content, img, inverse }) => {
  return (
    <section className={`${inverse ? style.reverse : ''} ${style.banner}`}>
      <div className={style.banner_text}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <img className={style.banner_image} src={img} alt={title} />
    </section>
  );
};

export default SecondaryBanner;
