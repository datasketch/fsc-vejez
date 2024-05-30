import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Lorem ipsum",
};

export default function Page() {
  return (
    <>
      <div className="pt-16 pb-[600px] relative">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-start-4 lg:col-end-10 order-1">
              <h1 className="text-[49px] lg:text-5xl xl:text-[61px] lg:font-semibold leading-none">
                +60{" "}
                <span className="-mt-2 lg:mt-0 block lg:inline-block text-[39px] lg:text-5xl xl:text-[61px] italic text-dark-slate-gray">
                  Datos plateados
                </span>
              </h1>
            </div>
            <div className="mt-14 lg:mt-40 xl:mt-48 col-span-4 md:col-span-2 lg:col-span-4 relative z-20 order-3 lg:order-2">
              <h3 className="relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                Las personas mayores en Colombia
              </h3>
              <div className="mt-4 flex gap-x-2.5">
                <p className="text-dark-slate-gray font-bold text-[39px] leading-none">
                  5.8M
                </p>
                <p>de personas de 60 años o más en Colombia</p>
              </div>
              <div className="my-4">
                <Image
                  width={1920}
                  height={1}
                  src="/images/home/dashed.svg"
                  alt="dashed"
                />
              </div>
              <div className="flex gap-x-2.5">
                <div className="w-7/12">
                  <Image
                    width={1920}
                    height={32}
                    src="/images/home/human-figure.svg"
                    alt="human figure"
                  />
                </div>
                <div className="w-5/12">
                  <p className="font-semibold text-dark-slate-gray">
                    equivale al 13,2% de la población
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-4">
                <h3 className="relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                  Distribución en áreas geográficas
                </h3>
                <div className="mt-6">
                  <Image
                    width={363}
                    height={283}
                    src="/images/home/pie-chart.svg"
                    alt="pie chart"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 col-span-4 lg:mt-36 relative order-2 lg:order-3 z-10">
              <div className="lg:hidden md:flex md:items-end md:justify-around relative z-30 space-y-2.5">
                <Image
                  className="sm:mx-auto md:mx-0 lg:w-10/12"
                  width={256}
                  height={86}
                  src="/images/home/message-1.svg"
                  alt="message 1"
                />
                <div className="pl-12 md:pl-0">
                  <Image
                    className="sm:mx-auto md:mx-0 lg:w-10/12"
                    width={280}
                    height={144}
                    src="/images/home/message-mobile-2.svg"
                    alt="message 2"
                  />
                </div>
              </div>
              <div className="relative z-20">
                <div className="relative z-10">
                  <Image
                    className="mx-auto"
                    width={427.99}
                    height={648}
                    src="/images/home/people.svg"
                    alt="people"
                  />
                </div>
                <div className="absolute top-9 -left-20">
                  <Image
                    width={246.06}
                    height={101.94}
                    src="/images/home/cloud-1.svg"
                    alt="cloud 1"
                  />
                </div>
                <div className="absolute -top-16 -right-44">
                  <Image
                    width={339.1}
                    height={140.45}
                    src="/images/home/cloud-2.svg"
                    alt="cloud 2"
                  />
                </div>
              </div>
              <div className="hidden lg:block absolute -top-20 lg:-left-40 xl:-left-60 z-20">
                <Image
                  className="lg:w-10/12 xl:w-auto"
                  width={256}
                  height={86}
                  src="/images/home/message-1.svg"
                  alt="message 1"
                />
              </div>
              <div className="hidden lg:block absolute -top-20 xl:-top-16 -right-full z-20">
                <Image
                  className="lg:w-10/12 xl:w-auto"
                  width={401}
                  height={93}
                  src="/images/home/message-2.svg"
                  alt="message 2"
                />
              </div>
            </div>
            <div className="mt-14 lg:mt-60 col-span-4 md:col-span-2 lg:col-span-4 relative z-20 order-4">
              <h3 className="relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                Distribución población de 60 años o más en Colombia por sexo
              </h3>
              <div className="mt-5">
                <Image
                  className="mx-auto"
                  width={223.14}
                  height={120}
                  src="/images/home/human-figure-2.svg"
                  alt="human figure 2"
                />
              </div>
              <h3 className="mt-14 relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                Proyecciones de la población por rangos de edad a 2050
              </h3>
              <div className="mt-5">
                <Image
                  className="mx-auto"
                  width={287}
                  height={213}
                  src="/images/home/line-chart.svg"
                  alt="line chart"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-full">
          <Image
            width={1920}
            height={754}
            src="/images/home/shape-2.svg"
            alt="shape 2"
          />
        </div>
        <div className="sm:hidden absolute bottom-0 left-0 w-full">
          <Image
            width={1920}
            height={1270}
            src="/images/home/shape-3.svg"
            alt="shape 3"
          />
        </div>
      </div>
      <div className="-mt-[500px] relative pt-12 pb-24 lg:pt-20 lg:pb-40 xl:pt-32 xl:pb-64 bg-banner-home-mobile lg:bg-banner-home bg-cover bg-center">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 md:col-span-2 lg:col-span-5">
              <h3 className="relative font-semibold text-xl text-seasalt after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-seasalt leading-tight">
                Distribución de la población en Colombia por grupo de edad en
                2024
              </h3>
              <div className="mt-6">
                <Image
                  width={1920}
                  height={314}
                  src="/images/home/demo-chart-1.svg"
                  alt="demo chart 1"
                />
              </div>
            </div>
            <div className="mt-14 lg:mt-0 col-span-4 md:col-span-2 lg:col-start-8 lg:col-end-13">
              <h3 className="relative font-semibold text-xl text-seasalt after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-seasalt">
                Departamentos con más personas mayores
              </h3>
              <p className="mt-5 text-seasalt">
                Las personas mayores se concentran en el Eje Cafetero (Quindío,
                Caldas y Risaralda), contrario a los departamentos en el
                suroriente (Vaupés, Guainía, Vichada y Amazonas).
              </p>
              <div className="mt-6">
                <Image
                  width={1920}
                  height={251}
                  src="/images/home/demo-chart-2.svg"
                  alt="demo chart 2"
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-seasalt">Fuente y fecha de actualización</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute -top-40 left-0">
          <Image
            width={129}
            height={226}
            src="/images/plants-1.svg"
            alt="plants 1"
          />
        </div>
        <div className="hidden lg:block absolute -top-24   right-0">
          <Image
            width={126}
            height={179}
            src="/images/plants-2.svg"
            alt="plants 2"
          />
        </div>
      </div>
    </>
  );
}
