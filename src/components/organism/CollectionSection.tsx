import CollectionCard from '../atoms/CollectionCard';

interface CollectionItem {
  imgRoute: string;
  title: string;
  description: string;
}

const Collection: React.FC = () => {
  const collection: CollectionItem[] = [
    { imgRoute: '/image1.jpg', title: 'Title 1', description: 'Description 1' },
    { imgRoute: '/image2.jpg', title: 'Title 2', description: 'Description 2' },
    { imgRoute: '/image3.jpg', title: 'Title 3', description: 'Description 3' },
    { imgRoute: '/image4.jpg', title: 'Title 4', description: 'Description 4' },
  ]


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
