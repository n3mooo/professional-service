import { Wrapper } from '@/components/common';
import security from '@/public/images/security-light.svg';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Refer.module.scss';
import { ReferProps } from '@/models';

export function Refer({ image, contents }: ReferProps) {
  return (
    <Wrapper className="max-w-[1080px]">
      <div className={clsx(styles.referSection)}>
        <main className="md:w-fit md:mx-auto w-full">
          {contents.map((item, index) => (
            <div key={index} className={clsx(`mb-12`, styles.referCard)}>
              <div className={clsx(styles.referCardIcon)}>
                <CircleStackIcon color="#007EF0" height={24} />
              </div>
              <div>
                <p className="text-black font-semibold text-xl leading-6 mb-2">{item.name}</p>
                <p className="text-[#666] text-sm font-normal leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </main>
        <div className="relative w-full lg:w-auto">
          <Image src={image} alt="" width={0} height={0} className={'rounded'} />
        </div>
      </div>
    </Wrapper>
  );
}
