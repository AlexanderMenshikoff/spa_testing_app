import { IUserRoot } from '../interfaces/interface';
import { useGetCurrentUserQuery } from '../redux/cardsApi';
import { FC } from 'react';

const UserInfo:FC<IUserRoot> = ({ id }) => {
  const { data, isLoading, error } = useGetCurrentUserQuery(Number(id));

  if (isLoading) return <p className="hidden">Loading...</p>;
  if (error) return <p className="text-red-600">Error</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold rounded-xl text-right">{data.name}</h2>
    </div>
  );
};

export default UserInfo;
