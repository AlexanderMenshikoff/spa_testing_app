'use client';

import Button from '@/app/components/Button';
import { useGetCurrentPostQuery } from '@/app/redux/cardsApi';
import UserInfo from '@/app/components/UserInfo';
import { useEffect, useState } from 'react';

const CurrentCard = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [slug, setSlug] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    fetchParams();
  }, [params]);

  const postId = slug ? Number(slug) : undefined;

  const { data, isLoading, error } = useGetCurrentPostQuery(postId, {
    skip: postId === undefined, // Пропускаем запрос, если postId не валиден
  });

  if (isLoading)
    return <p className="text-xl text-center ml-5 mt-5">is loading...</p>;
  if (error) return <p className="text-red-600">Error</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="flex justify-center h-dvh">
      <div className="bg-blue-200 rounded-xl py-10 px-10 relative max-w-5xl">
        <UserInfo id={Number(data.userId)} />
        <div>
          <div>
            <p className="text-4xl mb-5 mt-10 font-bold">{data.title}</p>
            <p className="text-2xl overflow-visible text-clip whitespace-normal">
              {data.body}
            </p>
          </div>
        </div>

        <div className="py-2 px-8 mt-10">
          <Button path="/" btnName="Назад" />
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
