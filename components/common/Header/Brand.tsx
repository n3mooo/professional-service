import Image from 'next/image';
import Link from 'next/link';

interface Props {
  header: {
    menu: {
      name: string;
      url: string;
    }[];
    logo: string;
    btnContent: string;
    url: string;
  };
}

export default function Brand({ header }: Props) {
  return (
    <Link href={'/'} className="relative w-[100px] lg:w-[110px]">
      <Image src={header.logo} alt={'logo'} width={0} height={0} unoptimized />
    </Link>
  );
}
