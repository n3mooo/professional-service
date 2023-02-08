import { MenuProps } from '@/models';
import clsx from 'clsx';
import Link from 'next/link';

export default function NavLinks({ name, url, activeId }: MenuProps) {
  return (
    <li>
      <Link
        href={url}
        className={clsx(
          `pt-8 pb-4 md:py-4 md:px-4 inline-block text-[#00172e] hover:text-[#27a9e1]`,
          url.substring(1) === activeId && 'text-[#27a9e1]'
        )}
      >
        {name}
      </Link>
    </li>
  );
}
