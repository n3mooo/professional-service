import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Wrapper = (props: Props) => {
  return (
    <section className={clsx(`relative container py-12 md:py-24`, props.className)}>
      {props.children}
    </section>
  );
};
