import Link from 'next/link';
import { useRouter } from 'next/router';

const Button = (props) => {
  const router = useRouter();

  const handleBack = () => {
    return props.btnName === 'Назад' && router.back();
  };
  return (
    <Link href={props.path} id={props.id} scroll={false}>
      <button onClick={handleBack}>{props.btnName}</button>
    </Link>
  );
};

export default Button;
