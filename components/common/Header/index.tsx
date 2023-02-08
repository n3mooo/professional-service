import { Button, ButtonVariant } from '@/components/common';
import { HeaderProps } from '@/models';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Brand from './Brand';
import NavLinks from './NavLinks';
import styles from './Header.module.scss';
import { useScrollspy } from '@/hooks';

export function Header({ logo, menu, url, btnText }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  const ids = ['partner', 'service', 'about', 'refer'];
  const activeId = useScrollspy(ids, 75);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 0 ? setFixed(true) : setFixed(false)
    );
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [open]);

  return (
    <div
      className={clsx(
        `z-50 w-full lg:hover:bg-white transition-all h-16 flex items-center shadow-[0_2px_15px_rgba(0,0,0,0.1)] `,
        open ? 'bg-white !shadow-none' : 'bg-white/70',
        fixed ? styles.navbar.concat(' ', styles.fixed) : styles.navbar
      )}
    >
      <div className="container flex items-center font-medium justify-between">
        <div className="z-40 py-4 md:w-auto w-full flex justify-between">
          <Brand logo={logo} />
          <div className="md:hidden my-auto" onClick={() => setOpen(!open)}>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-4">
          {menu.map((menu, idxMenu) => (
            <NavLinks key={idxMenu} name={menu.name} url={menu.url || '/'} activeId={activeId} />
          ))}
        </ul>
        <div className="md:block hidden">
          <Button
            url={url || '/'}
            btnText={btnText}
            width="w-[110px] !h-10"
            variant={ButtonVariant.OUTLINED}
            className={'mt-0'}
          />
        </div>
        {/* Mobile nav */}
        <div
          className={clsx(
            `md:hidden bg-white absolute z-30 w-full h-full bottom-0 pt-16 duration-500`,
            open ? 'left-0 right-0' : 'left-[-100%]'
          )}
        >
          <ul className={clsx(`container bg-white min-h-screen`)}>
            {menu.map((menu, idxMenu) => (
              <NavLinks key={idxMenu} name={menu.name} url={menu.url || '/'} activeId={activeId} />
            ))}
            <div className="py-5">
              <Button
                url={url || '/'}
                btnText={btnText}
                width="w-[110px] !h-10"
                variant={ButtonVariant.OUTLINED}
                className={'mt-0'}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
