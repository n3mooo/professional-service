import { TitleProps } from '@/models';

export const Title = ({ subtitle, title, content }: TitleProps) => {
  return (
    <div className="mb-8">
      <div className={`text-center`}>
        <h4
          className={`font-bold tracking-widest xs:tracking-[0.2rem] text-xs leading-6 text-[#666] uppercase`}
        >
          {subtitle}
        </h4>
      </div>
      <div className={`mt-2 mb-3 lg:mt-4 lg:mb-6 text-center`}>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#00172e]">{title}</h2>
      </div>
      <div className="text-center">
        <p className="mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-sm md:text-base lg:text-lg text-[#666] font-normal leading-6">
          {content}
        </p>
      </div>
    </div>
  );
};
