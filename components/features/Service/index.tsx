import { Title, Wrapper } from '@/components/common';
import { ServiceProps } from '@/models';
import { Splide, SplideProps, SplideSlide } from '@splidejs/react-splide';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export function Service({ heading, contents }: ServiceProps) {
  const optionSplide: SplideProps = {
    options: {
      type: 'slide',
      drag: 'free',
      arrows: false,
      pagination: true,
      perPage: 3,
      perMove: 1,
      gap: 30,
      breakpoints: {
        767: { perPage: 1 },
        1200: { perPage: 2 },
      },
      autoplay: true,
      interval: 2000,
    },
  };
  return (
    <div className="overflow-hidden relative">
      <Wrapper className="isolate">
        <Title subtitle={heading?.subtitle} title={heading?.title} content={heading?.content} />

        <Splide {...optionSplide} className="h-fit">
          {contents.map((item, index) => (
            <SplideSlide key={index} className="h-auto">
              <Link
                href={item.url}
                className={clsx(
                  `relative inline-flex flex-col justify-between h-full p-5 md:p-8 lg:p-10 bg-[#fafafa] hover:bg-white border rounded transition-all`
                )}
              >
                <div>
                  <div className="relative w-10 md:w-12 mb-2 md:mb-4">
                    <Image src={item.image} alt="" width={0} height={0} className="w-full h-full" />
                  </div>

                  <h6 className="text-[#00172e] font-semibold text-lg md:text-2xl mb-2 md:mb-4">
                    {item.name}
                  </h6>
                </div>

                <div className="">
                  <p className="mb-4 2xl:mb-6 text-sm md:text-base text-[#666] font-normal text-desc h-[75px]">
                    {item.description}
                  </p>

                  <Link href={item.url} className="" legacyBehavior>
                    <div className="inline-flex items-center text-sm md:text-base text-[#666] hover:text-[#666]/[0.70] hover:decoration-current">
                      <span>{item.buttonContent}</span>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.36664 9.99129C3.03385 10.0371 2.77734 10.3266 2.77734 10.6769C2.77734 11.0591 3.0826 11.3688 3.45916 11.3688H15.444L11.1146 15.7448L11.0484 15.8223C10.8498 16.0927 10.871 16.4772 11.1126 16.7233C11.3783 16.9941 11.81 16.995 12.0768 16.7254L17.5671 11.1766C17.5998 11.1448 17.6294 11.1098 17.6554 11.072C17.8412 10.8018 17.815 10.4269 17.5768 10.1862L12.0768 4.62861L12.0002 4.56178C11.7328 4.36138 11.3541 4.38454 11.1126 4.63072C10.8469 4.90152 10.8478 5.33962 11.1146 5.60926L15.445 9.98498H3.45916L3.36664 9.99129Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}
