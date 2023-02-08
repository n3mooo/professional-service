export interface MenuProps {
  name: string;
  url: string;
  activeId: string;
}

export interface HeaderProps {
  menu: MenuProps[];
  logo: string;
  btnText: string;
  url: string;
}

export interface FooterProps {
  contact: {
    title: string;
    contents: string;
    url: string;
    btnText: string;
  };
  image: string;
  description: string;
  license: string;
  contents: {
    title: string;
    linkList: {
      link: string;
      url: string;
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
