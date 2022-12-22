import { Title } from '@/components/common';
import { PartnerProps } from '@/models';
import { Splide, SplideProps, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';

export function Partner({ subtitle, content }: PartnerProps) {
  const optionSplide: SplideProps = {
    options: {
      type: 'loop',
      drag: 'free',
      arrows: false,
      pagination: false,
      perPage: 4,
      autoScroll: {
        pauseOnFocus: true,
        pauseOnHover: true,
        rewind: false,
        speed: 1,
      },
      lazyLoad: true,
      reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: 'pause',
      },
      breakpoints: {
        768: {
          perPage: 3,
        },
        425: {
          perPage: 2,
        },
      },
    },
    extensions: { AutoScroll },
  };

  return (
    <div className="container mb-12 md:mb-24">
      <Title subtitle={subtitle} />
      <Splide aria-label="Logo banner" {...optionSplide}>
        {content.map((item, index) => (
          <SplideSlide key={index} className="relative">
            <Image
              src={item.image}
              alt=""
              width={0}
              height={0}
              className="object-cover h-30 sm:h-20 w-1/2 mx-auto"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
