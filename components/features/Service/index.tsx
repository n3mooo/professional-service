import { Title, Wrapper } from '@/components/common';
import { ServiceProps } from '@/models';
import { Splide, SplideProps, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export function Service({ heading, contents }: ServiceProps) {
  const optionSplide: SplideProps = {
    options: {
      type: 'slide',
      rewind: true,
      drag: 'free',
      arrows: false,
      pagination: false,
      perPage: 3,
      perMove: 1,
      gap: '2rem',
      focus: 'center',
      breakpoints: {
        767: { perPage: 1, type: 'loop' },
        1200: { perPage: 2, pagination: true },
      },
      autoplay: true,
      interval: 5000,
    },
  };
  return (
    <div className="overflow-hidden relative" id="service">
      <Wrapper className="isolate">
        <Title
          subtitle={heading?.subtitle}
          title={heading?.title}
          content={heading?.content}
          textAlign="center"
        />

        <Splide {...optionSplide} hasTrack={false}>
          <SplideTrack className="!p-7 !-m-7">
            {contents.map((item, index) => (
              <SplideSlide key={index}>
                <div className="card">
                  <Link href={item.href} className={clsx(`item`)}>
                    <div className="box p-5 md:p-8 lg:p-10">
                      <div>
                        <div className="relative w-10 md:w-12 mb-2 md:mb-4">
                          <Image
                            src={item.image}
                            alt=""
                            width={0}
                            height={0}
                            className="w-full h-full"
                          />
                        </div>

                        <h6 className="text-[#00172e] font-semibold text-lg md:text-2xl mb-2 md:mb-4">
                          {item.name}
                        </h6>
                      </div>

                      <div className="">
                        <p className="text-sm md:text-base text-[#666] font-normal text-desc h-[75px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </Wrapper>
    </div>
  );
}
