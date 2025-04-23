import { ICard } from '../interfaces/interface';
import { FC } from 'react';

const Card:FC<ICard> = ({ id, title, body }) => {
  return (
    <div>
      <h2 className="text-xl bg-white rounded-2xl w-7 flex justify-center mb-4 ">
        {id}
      </h2>
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl truncate mt-2">{body}</p>
      </div>
    </div>
  );
};

export default Card;
