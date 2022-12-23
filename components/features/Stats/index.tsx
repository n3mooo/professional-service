import { StatsProps } from '@/models';
import clsx from 'clsx';

export function Stats({ contents }: StatsProps) {
  return (
    <div className="relative bg-[#fafafa] border-t border-b border-[#eaeaea]">
      <div className="container bg-transparent py-6">
        <div className="flex max-lg:flex-col items-center justify-center w-full mx-auto">
          {contents.map((item, index) => (
            <div
              key={index}
              className={clsx(
                `max-lg:my-5 max-lg:p-0 px-8 flex-grow text-center`,
                index !== contents.length - 1
                  ? 'max-lg:border-none border-r border-[#eaeaea]'
                  : 'border-none'
              )}
            >
              <p className="text-[calc(58px_+_(60_-_58)*((100vw_-_500px)/(1440_-_320)))] leading-[1.14em] tracking-tighter font-bold text-black">
                {item.num}
              </p>
              <span className="text-sm font-semibold tracking-widest text-[#666] uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
