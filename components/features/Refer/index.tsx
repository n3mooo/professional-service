import { Wrapper } from '@/components/common';
import { ReferProps } from '@/models';
import * as animationData from '@/public/images/cybersecurity.json';
import clsx from 'clsx';
import Image from 'next/image';
import Lottie, { LottieProps } from 'react-lottie';
import styles from './Refer.module.scss';

export function Refer({ image, contents }: ReferProps) {
  const defaultOptions: LottieProps = {
    options: {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    width: '100%',
    height: '100%',
    isClickToPauseDisabled: false,
  };

  return (
    <div id="refer">
      <Wrapper className="max-w-[1080px]">
        <div className={clsx(styles.referSection)}>
          <main className="md:w-fit md:mx-auto w-full">
            {contents.map((item, index) => (
              <div key={index} className={clsx(`mb-12`, styles.referCard)}>
                <div className={clsx(styles.referCardIcon)}>
                  <Image src={item.image} alt="" height={0} width={0} className="h-6" />
                </div>
                <div>
                  <p className="text-black font-semibold text-xl leading-6 mb-2">{item.name}</p>
                  <p className="text-[#666] text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </main>
          <div className="relative w-full lg:w-auto isolate">
            <Lottie {...defaultOptions} />

            <Image
              src={image}
              alt=""
              width={0}
              height={0}
              className={'absolute inset-0 rounded select-none'}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
