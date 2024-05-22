/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-[60px] pb-10 relative z-10">
        <div className="mx-[30px] xl:mx-20 max-w-[1206px]">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-5 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <Image
                className="mx-auto lg:mx-0"
                src="/images/logo.svg"
                width={184}
                height={54.315}
                alt="logo FSC"
              />
              <p className="mt-5 lg:mt-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ed amet e incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud eu exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col-span-4 lg:col-start-10 lg:col-end-13">
              <div className="flex justify-center lg:justify-end">
                <Link
                  className="inline-flex py-3 px-5 gap-x-2 text-dark-slate-gray font-semibold bg-asparagus/40 rounded-[20px]"
                  href="/"
                >
                  <p className="text-nowrap">Formulario de contacto</p>
                  <Image
                    src="/images/icons/arrow-link.svg"
                    alt="arrow link icon"
                    width={11}
                    height={11}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-48 lg:-mt-32 xl:-mt-60">
        <div className="relative">
          <img
            className="hidden lg:block w-full"
            src="/images/banner-footer.svg"
            alt="banner footer"
          />
          <img
            className="lg:hidden w-full h-[500px]"
            src="/images/banner-footer-mobile.svg"
            alt="banner footer"
          />
          <div className="absolute bottom-6 lg:bottom-10 w-full">
            <div className="flex flex-col gap-y-2.5 lg:flex-row justify-center text-white items-center gap-x-4">
              <p className="text-nowrap">Elaborado por</p>
              <Image
                src="/images/logo-white.svg"
                alt="logo white"
                width={101.63}
                height={30}
              />
              <p className="text-nowrap">y desarrollo tecnológico por</p>
              <Image
                src="/images/logo-datasketch.svg"
                alt="logo white"
                width={128.42}
                height={20}
              />
            </div>
          </div>
          <div className="absolute bottom-40 lg:bottom-0 left-0">
            <img src="/images/plants-1.svg" alt="plants 1" />
          </div>
          <div className="absolute bottom-40 lg:bottom-0 right-0">
            <img src="/images/plants-2.svg" alt="plants 2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
