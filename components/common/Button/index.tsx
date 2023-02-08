import clsx from 'clsx';
import Link from 'next/link';

export enum ButtonVariant {
  OUTLINED = 'outlined',
  GRADIENT = 'gradient',
}

export const btnVariantClassName: { [name in ButtonVariant]: string } = {
  [ButtonVariant.OUTLINED]: 'btn btn-outline',
  [ButtonVariant.GRADIENT]: 'btn-gradient',
};

interface ButtonProps {
  url: string;
  btnText: string;
  width?: string;
  variant: ButtonVariant;
  className?: string;
}

export function Button({ url, btnText, width, variant, className }: ButtonProps) {
  return (
    <>
      {variant === ButtonVariant.GRADIENT ? (
        <div className={clsx(className, width, btnVariantClassName[variant])}>
          <span className="layer-gradient"></span>
          <Link href={url} className="btn">
            {btnText}
          </Link>
        </div>
      ) : (
        <Link href={url} className={clsx(className, width, btnVariantClassName[variant])}>
          {btnText}
        </Link>
      )}
    </>
  );
}
