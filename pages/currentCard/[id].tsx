import Button from '@/app/components/Button';
import { useGetCurrentPostQuery } from '@/app/redux/cardsApi';
import Card from '@/app/components/Card';
import { useRouter } from 'next/router';

const CurrentCard = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data, isLoading, error } = useGetCurrentPostQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-red-600">{error.message || 'An error occurred'}</div>
    );
  if (!data) return <div>No data available</div>;

  return (
    <div>
      <Card id={data.id} title={data.title} body={data.body} />
      <Button path="/" btnName="Назад" />
    </div>
  );
};

export default CurrentCard;
