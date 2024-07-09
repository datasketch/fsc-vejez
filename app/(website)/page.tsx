import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "+60 Datos plateados es una plataforma de información sobre necesidades y oportunidades de la población de 60 años o más en distintas temáticas. Los datos que proporcionamos buscan enriquecer la toma de decisiones en contextos de participación, investigación, programas y servicios dirigidos a las personas mayores.",
};

export default function Page() {
  return (
    <>
      <div className="pt-16 pb-16 lg:pb-[600px] relative -z-0">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-12 order-1">
              <div className="lg:hidden w-full flex col-span-4 mb-4 gap-2 p-2  shadow-lg">
                <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
              </div>
              <div className="lg:text-center">
                <h1 className="text-[49px] lg:text-5xl xl:text-[61px] font-semibold leading-[50px]">
                  +60{" "}
                  <span className="-mt-2 lg:mt-0 block lg:inline-block text-[39px] lg:text-5xl xl:text-[61px] italic text-dark-slate-gray font-normal">
                    Datos plateados
                  </span>
                </h1>
                <p className="lg:w-4/5 mt-5 mx-auto">
                  +60 Datos Plateados es una plataforma de visualización de <Link className="text-dark-slate-gray underline" href="/documents/Anexo%20t%C3%A9cnico%20%2B60%20Datos%20Plateados.pdf">datos</Link> sobre personas mayores (de 60 años o más), desarrollada sobre diversas fuentes de información provenientes de organizaciones y aliados. Esta plataforma busca fortalecer el ecosistema de la economía plateada, o economía silver, promoviendo la creación de programas y servicios dirigidos a este grupo etario.
                </p>
                <p className="lg:w-4/5 mt-2 mx-auto">
                  En +60 Datos Plateados, encontrarás información demográfica sobre envejecimiento y vejez, y <Link className="text-dark-slate-gray underline" href="/cifras-relevantes">cifras relevantes</Link> de salud, educación, finanzas y tecnología. Además, incluye resultados de estudios sobre la <Link className="text-dark-slate-gray underline" href="/percepciones">percepción</Link> de la vejez, un <Link className="text-dark-slate-gray underline" href="/repositorio-de-servicios">directorio de servicios</Link> disponibles para personas mayores en Colombia y el mundo, y <Link className="text-dark-slate-gray underline" href="/recursos">recursos</Link> como reportes, conjuntos de datos y políticas públicas.
                </p>
                <p className="lg:w-4/5 mt-2 mx-auto">
                  Manteniéndose a la vanguardia, +60 Datos Plateados ofrece diversos formatos de visualización y herramientas interactivas, asegurando una actualización constante de la información. Explora esta plataforma para conocer más sobre las personas mayores y contribuir al desarrollo de la economía plateada.
                </p>
              </div>
            </div>
            <div className="mt-14 lg:mt-32 col-span-4 md:col-span-2 lg:col-span-4 relative z-20 order-3 lg:order-2">
              <h2 className="relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                Las personas mayores en Colombia
              </h2>
              <div className="mt-4 flex gap-x-2.5">
                <p className="text-dark-slate-gray font-bold text-[39px] leading-none">
                  7,8M
                </p>
                <p>
                  de personas de 60 años o más <br /> en 2024
                </p>
              </div>
              <div className="my-4">
                <Image
                  width={1920}
                  height={1}
                  src="/images/home/dashed.svg"
                  alt="dashed"
                />
              </div>
              <div className="flex gap-x-2.5 group">
                <div className="w-7/12">
                  <Image
                    className="lg:group-hover:scale-110 duration-300"
                    width={1920}
                    height={32}
                    src="/images/home/human-figure.svg"
                    alt="Íconos que representan 10 personas, de los cuales 1,5 están coloreados. Esto indica que cerca del 15% de los colombianos son personas mayores"
                  />
                </div>
                <div className="w-5/12">
                  <p className="font-semibold text-dark-slate-gray lg:group-hover:translate-x-5 lg:group-hover:scale-110 duration-300">
                    equivale al 14,9% de la población
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-12">
                <h2 className="relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                  Distribución en áreas geográficas
                </h2>
                <div className="mt-6">
                  <Image
                    className="lg:hover:scale-110 duration-300"
                    width={363}
                    height={283}
                    src="/images/home/pie-chart.svg"
                    alt="Gráfico circular dividido en dos secciones: una porción verde oscuro que representa el 76,6% de personas mayores en cabeceras municipales y una porción roja que representa el 23,3% de quienes viven en centro poblado y rural disperso"
                    aria-label="Gráfico circular dividido en dos secciones: una porción verde oscuro que representa el 76,6% de personas mayores en cabeceras municipales y una porción roja que representa el 23,3% de quienes viven en centro poblado y rural disperso"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 col-span-4 lg:mt-20 relative order-2 lg:order-3 z-10">
              <div className="relative z-20">
                <div className="relative z-10">
                  <Image
                    className="mx-auto"
                    width={427.99}
                    height={648}
                    src="/images/home/people.svg"
                    alt="Dos personas mayores caminando y conversando, una mujer y un hombre, que representan la interacción social y la vitalidad de las personas de 60 años en adelante"
                    aria-label="Dos personas mayores caminando y conversando, una mujer y un hombre, que representan la interacción social y la vitalidad de las personas de 60 años en adelante"
                  />
                </div>
                <div className="absolute left-0 top-1/3 lg:top-9 lg:-left-20">
                  <Image
                    width={246.06}
                    height={101.94}
                    src="/images/home/cloud-1.svg"
                    alt="cloud 1"
                  />
                </div>
                <div className="absolute right-0 top-2/3 lg:-top-16 lg:-right-44">
                  <Image
                    width={339.1}
                    height={140.45}
                    src="/images/home/cloud-2.svg"
                    alt="cloud 2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-14 lg:mt-48 col-span-4 md:col-span-2 lg:col-span-4 relative z-20 order-4">
              <h2 className="relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                Distribución población de 60 años o más en Colombia por sexo
              </h2>
              <div className="mt-5">
                <Image
                  className="mx-auto lg:hover:scale-110 duration-300"
                  width={250}
                  height={120}
                  src="/images/home/human-figure-2.svg"
                  alt="Gráfico de ícono de una persona dividida en dos colores para los porcentajes 55,53%, de mujeres, y 44,47%, de hombres, representando la distribución de la población mayor por género"
                  aria-label="Gráfico de ícono de una persona dividida en dos colores para los porcentajes 55,53%, de mujeres, y 44,47%, de hombres, representando la distribución de la población mayor por género"
                />
              </div>
              <h2 className="mt-14 relative font-semibold text-xl text-dark-slate-gray after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-dark-slate-gray">
                Proyecciones de la población por grupos etarios a 2050
              </h2>
              <div className="mt-5">
                <Image
                  width={387}
                  height={310}
                  className="w-full lg:hover:scale-110 duration-300"
                  src="/images/home/line-chart.svg"
                  alt="Gráfico de barras mostrando proyecciones de población a 2050: menores de 14 años son el 13,7%, jóvenes 14-26 años son el 14,8%, adultos 27-59 años son el 45,5% y mayores de 60 años son el 25,8%"
                  aria-label="Gráfico de barras mostrando proyecciones de población a 2050: menores de 14 años son el 13,7%, jóvenes 14-26 años son el 14,8%, adultos 27-59 años son el 45,5% y mayores de 60 años son el 25,8%"
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
      <div className="lg:-mt-[500px] relative pt-12 pb-24 lg:pt-20 xl:pt-32 bg-banner-home-mobile lg:bg-banner-home 2xl:bg-banner-big bg-cover bg-center">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 lg:gap-x-11">
            <div className="mt-14 lg:mt-0 col-span-4 md:col-span-2 lg:col-span-6 flex flex-col justify-between">
              <h2 className="relative font-semibold text-xl text-seasalt after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-seasalt leading-tight">
                Distribución de la población en Colombia por grupo de edad en
                2024 (post COVID-19)
              </h2>
              <div className="mt-6">
                <Image
                  className="hover:scale-110 duration-300"
                  width={1920}
                  height={314}
                  src="/images/home/demo-chart-1.svg"
                  alt="Pirámide poblacional mostrando la distribución de la población mayor de 60 años por género y por edades, según la proyección para el año 2024 del Censo Nacional de Población y Vivienda del DANE, 2018"
                  aria-label="Pirámide poblacional mostrando la distribución de la población mayor de 60 años por género y por edades, según la proyección para el año 2024 del Censo Nacional de Población y Vivienda del DANE, 2018"
                />
              </div>
            </div>
            <div className="mt-14 lg:mt-0 col-span-4 md:col-span-2 lg:col-span-6">
              <h2 className="relative font-semibold text-xl text-seasalt after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-[60px] after:h-[1px] after:bg-seasalt">
                Departamentos con más personas mayores
              </h2>
              <p className="mt-5 text-seasalt">
                De acuerdo con las Proyecciones del Censo Nacional de Población
                y Vivienda (DANE, 2018), dos departamentos en el Pacífico (Valle
                del Cauca y Cauca) y dos de la región Andina (Santander y
                Antioquia) tienen mayor porcentaje de personas mayores en
                Colombia.
              </p>
              <div className="mt-6">
                <Image
                  className="hover:scale-110 duration-300"
                  width={1920}
                  height={263}
                  src="/images/home/demo-chart-2.svg"
                  alt="Gráfico de barras que muestra los departamentos de Colombia con el mayor porcentaje de personas mayores según el Censo Nacional de Población y Vivienda del DANE, 2018"
                  aria-label="Gráfico de barras que muestra los departamentos de Colombia con el mayor porcentaje de personas mayores según el Censo Nacional de Población y Vivienda del DANE, 2018"
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <a
                className="inline-block underline decoration-white"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1Ob7FwsSr5r8p_pop5VEIiK2bFiyUm7xQ/edit#gid=2017683106"
              >
                <p className="text-seasalt">
                  Proyecciones del Censo Nacional de Población y Vivienda para
                  2024 (CNPV), 2018, DANE
                </p>
              </a>
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
