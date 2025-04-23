import { FC } from 'react';
import Cards from '../cards/Cards';

const Home: FC = () => {
  return (
    <div>
      <div>
        <h1 className="text-6xl text-center mb-10 mt-5">Posts</h1>
      </div>
      <Cards/>
    </div>
  );
};

export default Home;
