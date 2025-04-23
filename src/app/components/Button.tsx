"use client"
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IButtonData } from '../interfaces/interface';

const Button: FC<IButtonData> = ({ btnName, path }) => {
  const router = useRouter();

  const handleBack = () => {
    return btnName === 'Назад' && router.back();
  };
  return (
    <Link href={path} scroll={false}>
      <div className="absolute bottom-5 py-2 px-5 bg-black text-white rounded-xl">
        <button className="cursor-pointer" onClick={handleBack}>
          {btnName}
        </button>
      </div>
    </Link>
  );
};

export default Button;
