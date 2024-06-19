import ServicesClient from "@/components/ServicesClient";
import StackedBarChart from "@/components/StackedBarChart";
import TabSections from "@/components/TabSections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/servicios.json";
import WrapperChart from "@/components/WrapperChart";
import healthWordsData from "@/data/service/health.json";
import educationWordsData from "@/data/service/education.json";
import financeWordsData from "@/data/service/finances.json";
import WordCloud from "@/components/WordCloud";

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
                  Esta sección destaca servicios digitales especializados para
                  personas de 60 años o más. Aquí encontrará ejemplos e
                  información sobre los avances en soluciones tecnológicas a
                  nivel global dirigidos a este grupo demográfico. También
                  incluye un recurso de búsqueda para explorar fácilmente estos
                  servicios. La recopilación de información es un ejercicio en
                  construcción, que se complementará constantemente para
                  presentar más servicios de acuerdo con las temáticas de
                  interés y de más países.
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
                    Socialab, 2023; Tsunami LATAM, 2022; BID Lab, 2021
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
                Mientras que en Latinoamérica hay una especialización por los
                servicios tecnológicos enfocados en brindar soluciones
                educativas y de salud, España y Estados Unidos han diversificado
                su oferta consiguiendo que las soluciones tecnológicas
                involucren a las necesidades financieras de las personas
                mayores.
              </p>
            </div>
            <div className="mt-10 col-span-4 lg:col-span-12">
              <div className="text-center">
                <h3 className="font-semibold text-xl">
                  Distribución de Servicios Tecnologícos por País
                </h3>
              </div>
              <div className="mt-6">
                <WrapperChart description="El gráfico muestra la cantidad de servicios tecnológicos documentados por cada uno de los países. Los diferentes colores muestran la clasificación de servicios tecnológicos según la necesidad que buscan suplir, como lo son ingresos y finanzas, salud y bienestar y educación.">
                  <StackedBarChart
                    data={data.categoria_servicio_pais.data}
                    legend={data.categoria_servicio_pais.legend}
                  />
                </WrapperChart>
              </div>
            </div>
            <div className="mt-6 col-span-4 lg:col-span-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-2.5">
                <div className="lg:flex-shrink-0">
                  <p className="text-davys-gray">
                    Socialab, 2023; Tsunami LATAM, 2022; BID Lab, 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-12 xl:mt-16 col-span-4 lg:col-start-1 lg:col-end-5">
              <h2 className="text-2xl lg:text-[31px] font-semibold">
                Servicios tecnológicos diseñados para{" "}
                <span className="italic text-dark-slate-gray">
                  personas mayores
                </span>
              </h2>
            </div>
            <div className="mt-4 lg:mt-12 xl:mt-16 col-span-4 lg:col-start-6 lg:col-end-13 lg:-translate-x-5">
              <p>
                La siguiente visualización destaca algunas palabras clave con
                las que las empresas han descrito sus servicios tecnológicos.
                Esta información está clasificada según el énfasis de los
                servicios tecnológicos en cuanto a Salud y bienestar, Educación
                e Ingresos y finanzas.
              </p>
            </div>
            <div className="mt-8 lg:mt-12 xl:mt-16 col-span-4 lg:col-span-12">
              <WrapperChart description="La siguiente visualización destaca algunas palabras clave con las que las empresas han descrito sus servicios tecnológicos. Esta información está clasificada según los tipos de servicios tecnológicos en cuanto a Salud y bienestar, Educación e Ingresos y finanzas.">
                <TabSections
                  sections={[
                    {
                      title: "Salud y bienestar",
                      wordCloud: (
                        <WordCloud
                          words={healthWordsData}
                          size={10}
                          color="#FAFAFA"
                        />
                      ),
                    },
                    {
                      title: "Educación",
                      wordCloud: (
                        <WordCloud
                          words={educationWordsData}
                          size={16}
                          color="#FAFAFA"
                        />
                      ),
                    },
                    {
                      title: "Ingresos y finanzas",
                      wordCloud: (
                        <WordCloud
                          words={financeWordsData}
                          size={16}
                          color="#FAFAFA"
                        />
                      ),
                    },
                  ]}
                />
              </WrapperChart>
            </div>
            <div className="mt-6 col-span-4 lg:col-span-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-2.5">
                <div className="lg:flex-shrink-0">
                  <p className="text-davys-gray">
                    Socialab, 2023; Tsunami LATAM, 2022; BID Lab, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesClient data={data.servicios} />
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
