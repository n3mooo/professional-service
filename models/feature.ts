export interface HeroProps {
  title: string;
  title2: string;
  content: string;
  content2: string;
  buttonContent: string;
  buttonContent2: string;
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
    description: string;
    image: string;
    buttonContent?: string;
    url: string;
  }[];
}
