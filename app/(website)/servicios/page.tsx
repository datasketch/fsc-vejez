import ServicesClient from "@/components/ServicesClient";
import StackedBarChart from "@/components/StackedBarChart";
import TabSections from "@/components/TabSections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Lorem ipsum",
};

export default function Page() {
  return (
    <>
      <div className="py-16">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-start-2 lg:col-end-12">
              <div className="lg:text-center">
                <h1 className="text-4xl lg:text-5xl xl:text-[61px] lg:leading-[67.1px]">
                  <span className="font-semibold">
                    Servicios digitales para
                  </span>{" "}
                  <span className="text-dark-slate-gray italic">
                    Personas mayores
                  </span>
                </h1>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Iaculis at erat pellentesque adipiscing commodo elit at
                  imperdiet. Arcu cursus euismod quis viverra nibh cras pulvinar
                  mattis. Vitae semper quis lectus nulla at volutpat diam ut.
                  Mattis aliquam faucibus purus in massa tempor nec feugiat.
                </p>
              </div>
            </div>
            <div className="mt-6 col-span-4 lg:col-span-12">
              <div className="lg:text-center">
                <h3 className="font-semibold text-xl">
                  Referentes de servicios digitales para personas mayores
                  alrededor del mundo
                </h3>
              </div>
              <Image
                className="mt-6 mx-auto"
                src="/images/servicios/map.svg"
                alt="map servicios"
                width={1042}
                height={520}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="mt-6 col-span-4 lg:col-span-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-2.5">
                <div className="lg:flex-shrink-0">
                  <p className="text-davys-gray">
                    Fuente y fecha de actualización
                  </p>
                </div>
                <div className="w-full max-w-[797px]">
                  <p className="p-3 border border-eerie-black/10 rounded-[5px]">
                    El mapa muestra información obtenida de Socialab, Tsunami
                    LATAM y BID Lab. Los datos presentados son específicos y no
                    deben interpretarse como representativos de tendencias
                    globales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-seasalt py-16 rounded-[40px]">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-start-1 lg:col-end-5">
              <h2 className="text-2xl lg:text-[31px] font-semibold">
                Países que ofrecen soluciones tecnológicas para{" "}
                <span className="italic text-dark-slate-gray">
                  personas mayores
                </span>
              </h2>
            </div>
            <div className="mt-2 lg:mt-0 col-span-4 lg:col-start-6 lg:col-end-13 lg:-translate-x-5">
              <p>
                Mientras que en Latinoamerica hay una especialización por los
                servicios de E-Learning y la Telemedicina; España y Estados
                Unidos han desarrollado servicios en realidad virtual,
                inteligencia artificial, wearable, pero no cuentan con ningún
                aporte desde la Telemedicina a diferencia de Latinoamerica. De
                igual forma, la mayor cantidad de servicios de E-Learning en la
                totalidad de países comparados registra en Estados Unidos.
              </p>
            </div>
            <div className="mt-10 col-span-4 lg:col-span-12">
              <div className="text-center">
                <h3 className="font-semibold text-xl">
                  Distribución de Servicios Tecnologícos por País
                </h3>
              </div>
              <div className="mt-6">
                <StackedBarChart />
              </div>
            </div>
            <div className="mt-6 col-span-4 lg:col-span-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-2.5">
                <div className="lg:flex-shrink-0">
                  <p className="text-davys-gray">
                    Fuente y fecha de actualización
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 xl:mt-16 col-span-4 lg:col-start-1 lg:col-end-5">
              <h2 className="text-2xl lg:text-[31px] font-semibold">
                Servicios tecnológicos diseñados para
                <span className="italic text-dark-slate-gray">
                  personas mayores
                </span>
              </h2>
            </div>
            <div className="mt-4 lg:mt-12 xl:mt-16 col-span-4 lg:col-start-6 lg:col-end-13 lg:-translate-x-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 xl:mt-16 col-span-4 lg:col-span-12">
              <TabSections
                sections={[
                  {
                    title: "Salud y bienestar",
                    srcImage: "/images/servicios/words.svg",
                  },
                  {
                    title: "Educación",
                    srcImage: "/images/servicios/words.svg",
                  },
                  {
                    title: "Ingresos y finanzas",
                    srcImage: "/images/servicios/words.svg",
                  },
                  {
                    title: "Tecnología y digitalización",
                    srcImage: "/images/servicios/words.svg",
                  },
                ]}
              />
            </div>
            <div className="mt-6 col-span-4 lg:col-span-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-2.5">
                <div className="lg:flex-shrink-0">
                  <p className="text-davys-gray">
                    Fuente y fecha de actualización
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesClient />
      <div className="u-container border-t border-t-dark-slate-gray pt-16">
        <div className="bg-banner-services bg-cover bg-center rounded-[20px] p-8 md:p-10 lg:p-12 xl:p-[60px]">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-12">
              <div className="flex flex-col gap-y-8 md:flex-row">
                <div className="lg:w-7/12">
                  <h3 className="text-seasalt font-bold leading-[42.9px] text-3xl lg:text-[39px]">
                    ¿Quieres añadir tu servicio digital para persona mayor?
                  </h3>
                  <Link
                    href="/"
                    className="mt-4 lg:mt-6 inline-block py-2 px-5 rounded-[20px] bg-white text-dark-slate-gray font-semibold text-lg lg:text-xl"
                  >
                    Envíanos tu información
                  </Link>
                </div>
                <div className="lg:w-5/12">
                  <Image
                    width={342}
                    height={214}
                    src="/images/servicios/ilustration.svg"
                    alt="ilustration image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
