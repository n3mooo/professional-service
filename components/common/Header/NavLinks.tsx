import { HeaderProps } from '@/models';
import Link from 'next/link';

export default function NavLinks({ menu }: HeaderProps) {
  return (
    <>
      {menu?.map((menu, index) => {
        return (
          <li key={index}>
            <Link
              href={menu.url}
              className="pt-8 pb-4 md:py-4 md:px-4 inline-block text-[#00172e] hover:text-[#27a9e1]"
            >
              {menu.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
