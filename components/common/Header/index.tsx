import header from '@/contents/header.json';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Brand from './Brand';
import Button from './Button';
import styles from './Header.module.scss';
import NavLinks from './NavLinks';
import { HeaderProps } from '@/models';

export function Header() {
  const [classSticky, setClassSticky] = useState('');
  const [open, setOpen] = useState(false);

  //Sticky navbar
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setClassSticky(styles.stickyNav) : setClassSticky('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      stickNavbar();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        stickNavbar();
      });
    };
  }, []);

  return (
    <div
      className={`${classSticky} md:absolute top-0 w-full shadow-[0_2px_15px_rgba(0,0,0,0.1)] z-50 bg-[rgba(255,255,255,0.7)] hover:bg-white transition-all`}
    >
      <div className="container flex items-center font-medium justify-between">
        <div className="z-40 py-4 md:w-auto w-full flex justify-between">
          <Brand logo={header.logo} />
          <div className="md:hidden my-auto" onClick={() => setOpen(!open)}>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-4">
          <NavLinks menu={header.menu} />
        </ul>
        <div className="md:block hidden">
          <Button href={header.href} btnText={header.btnText} />
        </div>
        {/* Mobile nav */}
        <div
          className={clsx(
            `md:hidden bg-white absolute z-30 w-full h-full bottom-0 pt-16 duration-500`,
            open ? 'left-0 right-0' : 'left-[-100%]'
          )}
        >
          <ul className={clsx(`container bg-white min-h-screen`)}>
            <NavLinks menu={header.menu} />
            <div className="py-5">
              <Button href={header.href} btnText={header.btnText} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
