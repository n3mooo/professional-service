import { HeaderProps } from '@/models';
import Image from 'next/image';
import Link from 'next/link';

export default function Brand({ logo }: HeaderProps) {
  return (
    <Link href={'/'} className="relative w-[100px] lg:w-[110px]">
      <Image src={logo || ''} alt={'logo'} width={0} height={0} unoptimized />
    </Link>
  );
}
