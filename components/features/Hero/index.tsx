import clsx from 'clsx';
import React from 'react';
import styles from './Hero.module.scss';
import serviceImg from '@/public/images/bg-services.png';
import { Wrapper } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';

export interface HeroProps {
  title: string;
  title2: string;
  content: string;
  content2: string;
  buttonContent: string;
  image: string;
  href: string;
}

export function Hero(props: HeroProps) {
  return (
    <div>
      <div className={clsx('', styles.heroSection)}>
        <Wrapper className="absolute z-10 mt-16">
          <div className={clsx('mb-12', styles.heroContent)}>
            {/* <span className="h-4 w-4 bg-[#00172e]/90 rounded-full absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"></span> */}
            <div className="title text-center mb-4 flex items-center justify-center gap-6">
              <h1
                className={clsx(
                  `inline-block text-[6rem] leading-tight font-bold text-[#0d95d2]`,
                  styles.textGradient
                )}
              >
                Professionelle
              </h1>
              <h1 className="inline-block text-[6rem] leading-tight font-bold text-[#00172e]">
                Leistungen
              </h1>
            </div>
            <p className="mb-12 text-xl text-[#00172e] max-w-3xl mx-auto text-center">
              Mit über xy Jahren Erfahrung bieten wir Ihnen unsere Lösung zu jeglichen Problemen
              rund um Ihre IT an.
            </p>
            <div className="mb-24 heroButton max-w-md mx-auto flex items-center justify-center gap-6">
              <Link href={'#contact'} className="basis-1/2 btn btn-dark-outline">
                Erfahren Sie mehr…
              </Link>
              <div className="relative basis-1/2 btn-gradient">
                <span className="layer-gradient"></span>
                <Link href={'#contact'} className="btn">
                  Explore more
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={serviceImg}
              alt=""
              height={0}
              width={0}
              priority
              className="object-cover h-[30rem] rounded"
            ></Image>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
