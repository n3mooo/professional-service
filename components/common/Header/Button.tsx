import Link from 'next/link';

interface Props {
  header: {
    btnContent: string;
    url: string;
  };
}

export default function Button({ header }: Props) {
  return (
    <Link
      href={header.url}
      className="w-[110px] inline-block text-center rounded !bg-[#00172e] mt-8 md:mt-0 py-2 px-1 text-base font-normal text-white border-2 border-transparent hover:border-[#00172e] hover:text-[#00172e] hover:!bg-white hover:font-medium transition-all"
    >
      {header.btnContent}
    </Link>
  );
}
