import { FC } from 'react';
import { useGetPostsQuery } from '../redux/cardsApi';
import Card from './Card';
import { ICard } from '../interfaces/interface';
import Button from './Button';

const Home: FC = () => {
  const { data, isLoading, error } = useGetPostsQuery(10);
  return (
    <div>
      <div>
        <h1>Posts</h1>
      </div>

      {isLoading ? (
        'is loading...'
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div>
          {data?.map((card: ICard) => (
            <div key={card.id}>
              <Card title={card.title} body={card.body} id={card.id} />
              <Button path={`/currentCard/${card.id}`} btnName="Просмотр" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
