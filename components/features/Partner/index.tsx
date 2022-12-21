import { Wrapper } from '@/components/common';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
export interface PartnerProps {
  content: {
    image: string;
  }[];
}

export function Partner({ content }: PartnerProps) {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };

  return (
    <div className="container mb-24">
      <div className="title-small text-center mb-8">
        <h4 className="font-bold tracking-[0.2rem] text-xs leading-6 text-[#666] uppercase">
          Unsere Partner und Lieferanten
        </h4>
      </div>

      <Slider {...settings}>
        {content.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.image}
              alt=""
              width={0}
              height={0}
              className="object-cover h-20 w-1/2 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
