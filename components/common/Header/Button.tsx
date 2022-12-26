import { HeaderProps } from '@/models';
import Link from 'next/link';

export default function Button({ href, btnText }: HeaderProps) {
  return (
    <Link href={href || '/'} className="w-[110px] !h-10 btn btn-dark-outline">
      {btnText}
    </Link>
  );
}
