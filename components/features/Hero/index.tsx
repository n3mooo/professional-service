import { Button, ButtonVariant, Wrapper } from '@/components/common';
import { HeroProps } from '@/models';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

export function Hero({ title, title2, content, btnText, btnText2, image, url, url2 }: HeroProps) {
  return (
    <div>
      <div className={clsx('', styles.heroSection)}>
        <Wrapper className="absolute z-10 md:mt-16">
          <div className={clsx('mb-12', styles.heroContent)}>
            <div className="title text-center mb-4 flex flex-col xl:flex-row items-center justify-center gap-2 xs:gap-3 xl:gap-6">
              <h1
                className={clsx(
                  `inline-block text-4xl xs:text-5xl md:text-7xl xl:text-[5.2rem] leading-tight font-bold text-[#0d95d2]`,
                  styles.textGradient
                )}
              >
                {title}
              </h1>
              <h1 className="inline-block text-4xl xs:text-5xl md:text-7xl xl:text-[5.2rem] leading-tight font-bold text-[#00172e]">
                {title2}
              </h1>
            </div>
            <p className="mb-12 text-base md:text-lg lg:text-xl xl:text-2xl text-[#00172e] max-w-3xl mx-auto text-center">
              {content}
            </p>
            <div className="mb-12 md:mb-24 heroButton w-full sm:max-w-md mx-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-6">
              {/* <Link href={href} className="basis-full sm:basis-1/2 btn btn-dark-outline">
                {btnText}
              </Link> */}
              <Button btnText={btnText} url={url || '/'} variant={ButtonVariant.OUTLINED} />
              <Button
                btnText={btnText2}
                url={url2 || '/'}
                variant={ButtonVariant.GRADIENT}
                width={'basis-full sm:basis-1/2'}
              />
            </div>
          </div>
          <div className="relative">
            <Image
              src={image}
              alt=""
              height={0}
              width={0}
              priority
              className="object-cover h-full md:h-[20rem] lg:h-[30rem] rounded"
            />
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
