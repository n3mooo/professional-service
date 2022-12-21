export interface TitleProps {
  subtitle: string;
  title: string;
  content?: string;
}

export const Title = ({ subtitle, title, content }: TitleProps) => {
  return (
    <>
      {subtitle && <p className="font-medium">{subtitle}</p>}
      <p className="mt-2 text-2xl md:text-3xl lg:text-5xl font-medium text-[#00172e] ">{title}</p>
      {content && (
        <p className="mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl mt-2 text-sm md:text-base lg:text-lg text-gray-600 font-light leading-6 tracking-normal">
          {content}
        </p>
      )}
    </>
  );
};
