export interface HeaderProps {
  menu?: {
    name: string;
    href: string;
  }[];
  logo?: string;
  btnText?: string;
  href?: string;
}

export interface FooterProps {
  contact: {
    title: string;
    contents: string;
    href: string;
    btnText: string;
  };
  image: string;
  description: string;
  license: string;
  contents: {
    title: string;
    linkList: {
      link: string;
      href: string;
      icon: string;
    }[];
  }[];
}

export interface TitleProps {
  subtitle?: string;
  title?: string;
  content?: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'start' | 'end';
  className?: string;
}
