export interface HeaderProps {
  menu?: {
    name: string;
    href: string;
  }[];
  logo?: string;
  btnText?: string;
  href?: string;
}

export interface TitleProps {
  subtitle?: string;
  title?: string;
  content?: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'start' | 'end';
  className?: string;
}
