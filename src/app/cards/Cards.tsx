'use client';
import { FC } from 'react';
import { useGetPostsQuery } from '../redux/cardsApi';
import Card from '../components/Card';
import { ICard } from '../interfaces/interface';
import Button from '../components/Button';

const Cards: FC = () => {
  const { data, isLoading, error } = useGetPostsQuery(10);
  return (
    <div>
      {isLoading && (
        <p className="text-xl text-center mb-10 mt-5">is loading...</p>
      )}
      {error && <div className="text-red-600">{error}</div>}

      {!isLoading && !error && (
        <div className="">
          {data?.map((card: ICard) => (
            <div
              className="w-xl h-65 mr-auto ml-auto mb-4 bg-blue-200 rounded-xl py-4 px-4 relative"
              key={card.id}
            >
              <Card
                title={card.title}
                body={card.body}
                id={card.id}
                userId={card.userId}
              />
              <div className="absolute bottom-0">
                <Button path={`cards/${card.id}`} btnName="Просмотр" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
