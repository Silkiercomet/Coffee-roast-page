import CollectionCard from '../atoms/CollectionCard';
import { collection } from '../../ultils/content';
import style from './CollectionSection.module.css';
const Collection: React.FC = () => {

  return (
    <section className={style.collection}>
      <h2 className={style.collection_header}>Our Collection</h2>
      <ul className={style.collection_list}>
        {collection.map((item) => (
          <CollectionCard
            key={item.title}
            image={item.imgRoute}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Collection;
