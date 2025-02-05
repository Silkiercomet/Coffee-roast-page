import CollectionCard from '../atoms/CollectionCard';
import { collection } from '../../ultils/content';

const Collection: React.FC = () => {

  return (
    <section>
      <h2>Our Collection</h2>
      <ul>
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
