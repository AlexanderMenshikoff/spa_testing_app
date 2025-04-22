import { ICard } from '../interfaces/interface';

const Card = ({ id, title, body }: ICard) => {
  return (
    <div>
      <h2>{id}</h2>
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
