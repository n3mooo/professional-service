import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { Wrapper, Title, Button, ButtonVariant } from '@/components/common';
import { FooterProps } from '@/models';

export function Footer({ contact, image, contents, description, license }: FooterProps) {
  return (
    <>
      <div className={styles.contact}>
        <Wrapper>
          <div className="max-w-4xl mx-auto">
            <Title title={contact.title} textAlign="center" />
            <div className="content font-normal text-base md:text-lg lg:text-xl text-[#666] lg:max-w-xl xl:max-w-2xl mx-auto text-center flex flex-col gap-4 mb-8">
              {contact.contents}
            </div>
            <Button
              btnText={contact.btnText}
              url={contact.url || '/'}
              variant={ButtonVariant.GRADIENT}
              width={'max-w-fit mx-auto'}
            />
          </div>
        </Wrapper>
      </div>
      <div className={styles.footer}>
        <div className="container isolate flex flex-col justify-between py-24 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-2/3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start w-32 mx-auto lg:ml-0"
            >
              <Image src={image} alt={'logo'} width={0} height={0} unoptimized priority />
            </Link>
            <p className="mx-auto lg:ml-0 font-normal text-center lg:text-start max-w-xs my-4 text-[#00172e]">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-5 gap-y-8 lg:w-2/3 sm:justify-items-center lg:justify-items-end">
            {contents.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="mb-2 text-base text-[#00172e] font-medium leading-5 tracking-wider uppercase inline-block cursor-default">
                  {item.title}
                </h3>
                <ul className="space-y-1">
                  {item.linkList.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="text-base font-normal text-[#00172e] hover:text-[#27a9e1] "
                        href={item.url || '/'}
                      >
                        {item.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-3">
              <h3 className="mb-2 text-base text-[#00172e] font-medium leading-5 tracking-wider uppercase inline-block cursor-default">
                Social
              </h3>
              <div className="flex justify-start space-x-3">
                <Link
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/dynexogmbh"
                  title="Facebook"
                  className="flex items-center p-1 text-[#00172e] hover:text-[#27a9e1]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="https://twitter.com/dynexogmbh"
                  title="Twitter"
                  className="flex items-center p-1 text-[#00172e] hover:text-[#27a9e1]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container isolate grid sm:grid-cols-2 gap-5 py-6 justify-center sm:justify-between items-center text-center sm:text-start border-t">
          <div className="text-[#00172e] cursor-default font-medium">{license}</div>
          <div className="flex flex-row flex-nowrap justify-center sm:justify-end">
            <Link
              href="https://www.dynexo.de/privacy-policy/"
              className="font-medium text-[#00172e] hover:text-[#27a9e1]"
            >
              Datenschutzerklärung
            </Link>
            <span className="px-2 text-[#00172e]">-</span>
            <Link
              href="https://www.dynexo.de/impressum/"
              className="font-medium text-[#00172e] hover:text-[#27a9e1]"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
