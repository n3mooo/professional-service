import { Title, Wrapper } from '@/components/common';
import { AboutProps } from '@/models';
import Image from 'next/image';
import Link from 'next/link';

export function About({ title, image, contents, href, btnText }: AboutProps) {
  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12">
        <main className="pr-8">
          <Title title={title} textAlign="left" />
          <div className="content font-normal text-base md:text-lg lg:text-xl text-[#666] lg:max-w-xl xl:max-w-2xl flex flex-col gap-4 mb-8">
            {contents?.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <Link href={href} className="basis-full sm:basis-1/2 btn btn-dark-outline">
            {btnText}
          </Link>
        </main>
        <div className="relative w-full lg:w-auto">
          <Image src={image} alt="" width={0} height={0} className={'rounded'} />
        </div>
      </div>
    </Wrapper>
  );
}
