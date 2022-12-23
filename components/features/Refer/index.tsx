import { Wrapper } from '@/components/common';
import security from '@/public/images/security-light.svg';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Refer.module.scss';

export interface ReferProps {}

export function Refer(props: ReferProps) {
  return (
    <Wrapper className="max-w-[960px]">
      <div className={clsx(styles.referSection)}>
        <main className="max-w-[#384px] w-full">
          <div className={clsx(`mb-12`, styles.referCard)}>
            <div className={clsx(styles.referCardIcon)}>
              <CircleStackIcon color="#007EF0" height={24} />
            </div>
            <div>
              <p className="text-black font-semibold text-xl leading-6 mb-2">Faster build times</p>
              <p className="text-[#666] text-sm font-normal leading-5">
                Generate pages on-demand instead of waiting for the entire site at build time.
              </p>
            </div>
          </div>
          <div className={clsx(`mb-12`, styles.referCard)}>
            <div className={clsx(styles.referCardIcon)}>
              <CircleStackIcon color="#007EF0" height={24} />
            </div>
            <div>
              <p className="text-black font-semibold text-xl leading-6 mb-2">Faster build times</p>
              <p className="text-[#666] text-sm font-normal leading-5">
                Generate pages on-demand instead of waiting for the entire site at build time.
              </p>
            </div>
          </div>
          <div className={clsx(styles.referCard)}>
            <div className={clsx(styles.referCardIcon)}>
              <CircleStackIcon color="#007EF0" height={24} />
            </div>
            <div>
              <p className="text-black font-semibold text-xl leading-6 mb-2">Faster build times</p>
              <p className="text-[#666] text-sm font-normal leading-5">
                Generate pages on-demand instead of waiting for the entire site at build time.
              </p>
            </div>
          </div>
        </main>
        <div className="relative w-full lg:w-auto">
          <Image src={security} alt="" width={0} height={0} className={'rounded'} />
        </div>
      </div>
    </Wrapper>
  );
}
