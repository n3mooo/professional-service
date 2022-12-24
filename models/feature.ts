export interface HeroProps {
  title: string;
  title2: string;
  content: string;
  content2: string;
  btnText: string;
  btnText2: string;
  image: string;
  href: string;
  href2: string;
}

export interface PartnerProps {
  subtitle: string;
  title: string;
  content: {
    image: string;
  }[];
}

export interface ServiceProps {
  heading: {
    subtitle?: string;
    title?: string;
    content?: string;
  };
  contents: {
    name: string;
    desc: string;
    image: string;
    btnText?: string;
    href: string;
  }[];
}

export interface AboutProps {
  title: string;
  image: string;
  contents: [];
  href: string;
  btnText: string;
}

export interface StatsProps {
  contents: {
    num: string;
    text: string;
  }[];
}

export interface ReferProps {
  image: string;
  contents: {
    name: string;
    desc: string;
    image: string;
  }[];
}
