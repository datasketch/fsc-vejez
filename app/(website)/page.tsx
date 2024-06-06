import HeatMapHome from "@/components/HeatMapHome";
import Map from "@/components/Map";
import SankeyHome from "@/components/SankeyHome";
import TreeMapHome from "@/components/TreeMapHome";
import WaffleHome from "@/components/WaffleHome";
import type { Metadata } from "next";
import Image from "next/image";
import tasa_de_alfabetismo from "@/data/tasa_de_alfabetismo.json";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Lorem ipsum",
};

export default function Page() {
  const literacyRateData = Object.entries(
    groupBy(tasa_de_alfabetismo, "etiqueta_rango_edad")
  ).reduce((prev: any, curr: any) => {
    const [key, value] = curr;
    const total = value[0].si + value[0].no;

    return [
      ...prev,
      {
        name: key[0] + key.slice(1).toLowerCase(),
        children: [
          {
            name: "Sí",
            loc: value[0].si,
            total,
          },
          {
            name: "No",
            loc: value[0].no,
            total,
          },
        ],
      },
    ];
  }, []);

  function groupBy(xs: any, key: string) {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  return (
    <>
      <div className="pt-16 pb-16 lg:pb-[600px] relative">
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
      <div className="lg:-mt-[500px] relative pt-12 pb-24 lg:pt-20 lg:pb-40 xl:pt-32 xl:pb-64 bg-banner-home-mobile lg:bg-banner-home bg-cover bg-center">
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
      <div className="-mt-16 lg:-mt-32 xl:-mt-56 py-20 bg-seasalt rounded-[40px] relative">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <div className="flex items-center gap-x-2.5 xl:gap-x-5">
                <Image
                  width={80}
                  height={80}
                  src="/images/home/phone.svg"
                  alt="phone"
                />
                <h2 className="text-2xl lg:text-[31px] text-dark-slate-gray font-semibold">
                  Tecnología y digitalización
                </h2>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">&nbsp;</div>
            <div className="mt-6 lg:mt-12 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Frecuencia de uso de internet y acceso a{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  dispositivos
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                El mapa muestra la distribución geográfica del acceso a internet
                por departamento en Colombia, esto con base en los datos
                suministrados por la Encuesta Nacional de Calidad de Vida 2022
                sobre frecuencia en el uso de internet desde cualquier lugar y
                dispositivo. El mapa usa una escala de colores para representar
                los rangos de cobertura. los departamentos en tonos más oscuros
                tienen una mayor proporción de hogares con acceso a internet,
                mientras que los departamentos en tonos más claros tienen una
                menor proporción.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-start-2 lg:col-end-7">
              <Map />
            </div>
            <div className="mt-4 lg:mt-20 xl:mt-24 col-span-4 lg:col-start-8 lg:col-end-13">
              <div className="flex flex-col md:flex-row gap-y-8 lg:gap-y-0 lg:flex-col gap-x-12">
                <div>
                  <Image
                    width={382}
                    height={215}
                    src="/images/home/legend.svg"
                    alt="legend"
                  />
                </div>
                <div className="hidden lg:block my-10">
                  <Image
                    width={1920}
                    height={1}
                    src="/images/home/dashed.svg"
                    alt="dashed"
                  />
                </div>
                <div>
                  <Image
                    width={491}
                    height={319}
                    src="/images/home/stadistic-map.svg"
                    alt="stadistic map"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 rounded-[40px] relative bg-anti-flash-white -mt-10">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <div className="flex items-center gap-x-2.5 xl:gap-x-5">
                <Image
                  width={80}
                  height={80}
                  src="/images/home/pig.svg"
                  alt="pig"
                />
                <h2 className="text-2xl lg:text-[31px] text-dark-slate-gray font-semibold">
                  Ingresos y finanzas
                </h2>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">&nbsp;</div>
            <div className="mt-6 lg:mt-12 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Fuentes de{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  ingreso
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                El gráfico representa proporcionalmente los tipos de ingresos
                que reciben las personas mayores junto con las fuentes de las
                cuales provienen
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <div className="h-[345px]">
                <WaffleHome
                  data={[
                    {
                      id: "cats",
                      label: "Cats",
                      value: 31.518062004545442,
                    },
                    {
                      id: "dogs",
                      label: "Dogs",
                      value: 12.851344845901973,
                    },
                    {
                      id: "rabbits",
                      label: "Rabits",
                      value: 4.677844118677385,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
            {/*  */}
            <div className="mt-12 lg:mt-20 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Inclusión financiera, acceso a productos y{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  servicios financieros
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-20 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                El gráfico presentado es un gráfico de barras horizontal apilado
                que ilustra el uso de productos financieros en las personas de
                60 años o más. Los productos incluidos son: Cuenta corriente,
                Cuenta de ahorros, CDT, Préstamo para compra de vivienda,
                Préstamo para compra de vehículo, Préstamo de libre inversión,
                Tarjeta de crédito, Otro, Ninguno.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <Image
                className="mx-auto"
                width={822}
                height={696}
                src="/images/home/ticket.svg"
                alt="ticket"
              />
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="-mt-12 py-20 bg-seasalt rounded-[40px] relative">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <div className="flex items-center gap-x-2.5 xl:gap-x-5">
                <Image
                  width={80}
                  height={80}
                  src="/images/home/health.svg"
                  alt="health"
                />
                <h2 className="text-2xl lg:text-[31px] text-dark-slate-gray font-semibold">
                  Salud y bienestar
                </h2>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">&nbsp;</div>
            <div className="mt-6 lg:mt-12 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Capacidades
              </h3>
            </div>
            <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                La gráfica describe el nivel de desarrollo que tienen las
                personas mayores para capacidades como oír aun usando audífonos
                medicados. hablar o conversar, ver aun usando lentes o gafas,
                mover el cuerpo, caminar o subir y bajar escaleras, agarrar o
                mover objetos con las manos, entender, aprender, recordar o
                tomar decisiones por sí mismo(a), comer, vestirse o bañarse por
                sí mismo(a), relacionarse o interactuar con las demás personas.
                La gráfica además de hacer un conteo por categoría, cuenta con
                una escala para indicar en qué medida se posibilita o se
                dificulta llevar a cabo cada actividad.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <div className="h-[424px]">
                <HeatMapHome
                  data={[
                    {
                      id: "Japan",
                      data: [
                        {
                          x: "Train",
                          y: -51022,
                        },
                        {
                          x: "Subway",
                          y: 6851,
                        },
                        {
                          x: "Bus",
                          y: 88758,
                        },
                        {
                          x: "Car",
                          y: 65654,
                        },
                        {
                          x: "Boat",
                          y: -51011,
                        },
                        {
                          x: "Moto",
                          y: 9945,
                        },
                        {
                          x: "Moped",
                          y: 56822,
                        },
                        {
                          x: "Bicycle",
                          y: 13495,
                        },
                        {
                          x: "Others",
                          y: -28251,
                        },
                      ],
                    },
                    {
                      id: "France",
                      data: [
                        {
                          x: "Train",
                          y: 90879,
                        },
                        {
                          x: "Subway",
                          y: 7167,
                        },
                        {
                          x: "Bus",
                          y: 32317,
                        },
                        {
                          x: "Car",
                          y: -10430,
                        },
                        {
                          x: "Boat",
                          y: 96281,
                        },
                        {
                          x: "Moto",
                          y: 91304,
                        },
                        {
                          x: "Moped",
                          y: -72151,
                        },
                        {
                          x: "Bicycle",
                          y: -86379,
                        },
                        {
                          x: "Others",
                          y: -77347,
                        },
                      ],
                    },
                    {
                      id: "US",
                      data: [
                        {
                          x: "Train",
                          y: 10570,
                        },
                        {
                          x: "Subway",
                          y: 85136,
                        },
                        {
                          x: "Bus",
                          y: -38434,
                        },
                        {
                          x: "Car",
                          y: 81353,
                        },
                        {
                          x: "Boat",
                          y: -12758,
                        },
                        {
                          x: "Moto",
                          y: -48656,
                        },
                        {
                          x: "Moped",
                          y: -58837,
                        },
                        {
                          x: "Bicycle",
                          y: -78072,
                        },
                        {
                          x: "Others",
                          y: 58203,
                        },
                      ],
                    },
                    {
                      id: "Germany",
                      data: [
                        {
                          x: "Train",
                          y: -26834,
                        },
                        {
                          x: "Subway",
                          y: -93200,
                        },
                        {
                          x: "Bus",
                          y: -36417,
                        },
                        {
                          x: "Car",
                          y: -94160,
                        },
                        {
                          x: "Boat",
                          y: -17881,
                        },
                        {
                          x: "Moto",
                          y: -10223,
                        },
                        {
                          x: "Moped",
                          y: 93531,
                        },
                        {
                          x: "Bicycle",
                          y: 87925,
                        },
                        {
                          x: "Others",
                          y: -48601,
                        },
                      ],
                    },
                    {
                      id: "Norway",
                      data: [
                        {
                          x: "Train",
                          y: -44142,
                        },
                        {
                          x: "Subway",
                          y: 58097,
                        },
                        {
                          x: "Bus",
                          y: -11473,
                        },
                        {
                          x: "Car",
                          y: 31710,
                        },
                        {
                          x: "Boat",
                          y: 48797,
                        },
                        {
                          x: "Moto",
                          y: 35472,
                        },
                        {
                          x: "Moped",
                          y: -42739,
                        },
                        {
                          x: "Bicycle",
                          y: 52177,
                        },
                        {
                          x: "Others",
                          y: 52444,
                        },
                      ],
                    },
                    {
                      id: "Iceland",
                      data: [
                        {
                          x: "Train",
                          y: -79055,
                        },
                        {
                          x: "Subway",
                          y: 29650,
                        },
                        {
                          x: "Bus",
                          y: 80669,
                        },
                        {
                          x: "Car",
                          y: -90643,
                        },
                        {
                          x: "Boat",
                          y: -40491,
                        },
                        {
                          x: "Moto",
                          y: -64208,
                        },
                        {
                          x: "Moped",
                          y: 57170,
                        },
                        {
                          x: "Bicycle",
                          y: 15406,
                        },
                        {
                          x: "Others",
                          y: -57262,
                        },
                      ],
                    },
                    {
                      id: "UK",
                      data: [
                        {
                          x: "Train",
                          y: 85414,
                        },
                        {
                          x: "Subway",
                          y: 39524,
                        },
                        {
                          x: "Bus",
                          y: 78489,
                        },
                        {
                          x: "Car",
                          y: 17512,
                        },
                        {
                          x: "Boat",
                          y: 78762,
                        },
                        {
                          x: "Moto",
                          y: -37255,
                        },
                        {
                          x: "Moped",
                          y: 91591,
                        },
                        {
                          x: "Bicycle",
                          y: 25565,
                        },
                        {
                          x: "Others",
                          y: -26899,
                        },
                      ],
                    },
                    {
                      id: "Vietnam",
                      data: [
                        {
                          x: "Train",
                          y: 73874,
                        },
                        {
                          x: "Subway",
                          y: -83296,
                        },
                        {
                          x: "Bus",
                          y: 79123,
                        },
                        {
                          x: "Car",
                          y: -45415,
                        },
                        {
                          x: "Boat",
                          y: 49712,
                        },
                        {
                          x: "Moto",
                          y: -87260,
                        },
                        {
                          x: "Moped",
                          y: -63683,
                        },
                        {
                          x: "Bicycle",
                          y: 71687,
                        },
                        {
                          x: "Others",
                          y: 89830,
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
            {/*  */}
            <div className="mt-12 lg:mt-20 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Vivienda y composición{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  del hogar
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-20 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                El gráfico está dividido en tres secciones principales, la
                primera corresponde a los grupos demográficos según sexo
                (femenino, masculino). En la segunda sección se relacionan los
                tipos de vivienda y la tercera sección se identifican las
                condiciones de tenencia de vivienda. De esta manera se
                relacionan en conjunto los datos según los respectivos cruces de
                información.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <div className="h-[527.23px]">
                <SankeyHome
                  data={{
                    nodes: [
                      {
                        id: "John",
                        nodeColor: "hsl(161, 70%, 50%)",
                      },
                      {
                        id: "Raoul",
                        nodeColor: "hsl(72, 70%, 50%)",
                      },
                      {
                        id: "Jane",
                        nodeColor: "hsl(215, 70%, 50%)",
                      },
                      {
                        id: "Marcel",
                        nodeColor: "hsl(282, 70%, 50%)",
                      },
                      {
                        id: "Ibrahim",
                        nodeColor: "hsl(177, 70%, 50%)",
                      },
                      {
                        id: "Junko",
                        nodeColor: "hsl(49, 70%, 50%)",
                      },
                    ],
                    links: [
                      {
                        source: "Marcel",
                        target: "Raoul",
                        value: 150,
                      },
                      {
                        source: "Marcel",
                        target: "John",
                        value: 77,
                      },
                      {
                        source: "Marcel",
                        target: "Jane",
                        value: 173,
                      },
                      {
                        source: "Junko",
                        target: "Jane",
                        value: 26,
                      },
                      {
                        source: "Junko",
                        target: "Raoul",
                        value: 192,
                      },
                      {
                        source: "Junko",
                        target: "John",
                        value: 105,
                      },
                      {
                        source: "Junko",
                        target: "Ibrahim",
                        value: 73,
                      },
                      {
                        source: "Jane",
                        target: "Ibrahim",
                        value: 158,
                      },
                      {
                        source: "John",
                        target: "Ibrahim",
                        value: 102,
                      },
                      {
                        source: "John",
                        target: "Raoul",
                        value: 84,
                      },
                      {
                        source: "John",
                        target: "Jane",
                        value: 19,
                      },
                      {
                        source: "Raoul",
                        target: "Ibrahim",
                        value: 33,
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="py-20 rounded-[40px] relative bg-anti-flash-white -mt-10">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <div className="flex items-center gap-x-2.5 xl:gap-x-5">
                <Image
                  width={80}
                  height={80}
                  src="/images/home/education.svg"
                  alt="education"
                />
                <h2 className="text-2xl lg:text-[31px] text-dark-slate-gray font-semibold">
                  Educación
                </h2>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">&nbsp;</div>
            <div className="mt-6 lg:mt-12 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Tasa de{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  alfabetismo
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                De acuerdo con la Gran Encuesta Integrada de Hogares - 2022,
                esta es la proporción de personas mayores que afirmaron saber
                leer y escribir, en comparación con las respuestas frente al
                mismo aspecto de las poblaciones de 14 - 26 años y 27 - 59 años.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <div className="h-[400px]">
                <TreeMapHome
                  data={{
                    name: "Tasa de alfabetismo",
                    children: literacyRateData,
                  }}
                />
              </div>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
            {/*  */}
            <div className="mt-12 lg:mt-20 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Nivel educativo{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  alcanzado
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-20 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                De acuerdo con la Gran Encuesta Integrada de Hogares - 2023, de
                las personas mayores reportadas en el archivo de datos.
                &quot;x&quot; completaron la primaria, &quot;y&quot; culminaron
                el bachillerato, &quot;z&quot; alcanzaron un título
                universitario.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-7">
              <Image
                width={1020}
                height={13}
                src="/images/home/chart-details-5.svg"
                alt="chart details 5"
              />
            </div>
            <div className="mt-8 lg:mt-10 col-span-4 lg:col-span-12">
              <Image
                className="mx-auto"
                width={1037}
                height={304}
                src="/images/home/chart-5.svg"
                alt="chart 5"
              />
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="-mt-12 py-20 bg-seasalt rounded-[40px] relative">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <div className="flex items-center gap-x-2.5 xl:gap-x-5">
                <Image
                  width={80}
                  height={80}
                  src="/images/home/mobility.svg"
                  alt="mobility"
                />
                <h2 className="text-2xl lg:text-[31px] text-dark-slate-gray font-semibold">
                  Movilidad y transporte
                </h2>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6">&nbsp;</div>
            <div className="mt-6 lg:mt-12 col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Número de viajes de grupos etarios por modalidad de{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  transporte en Bogotá
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                &quot;A Pie&quot; es la modalidad de transporte más utilizada
                entre los diferentes grupos etarios. La siguiente modalidad más
                popular varía según la edad, pero parece ser el &quot;Auto&quot;
                para los grupos de 26 años o más. Es notable que ciertas
                modalidades de transporte, como &quot;Cable&quot;,
                &quot;Transporte Escolar&quot; y &quot;Patineta&quot;, son
                utilizadas en menor medida comparativamente. Además, el grupo
                etario de &quot;Más de 60&quot; parece utilizar menos el
                transporte en comparación con otros grupos etarios, con barras
                generalmente más cortas.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-6">
              <Image
                className="mx-auto lg:mx-0"
                width={520}
                height={13}
                src="/images/home/chart-details-6.svg"
                alt="chart details 6"
              />
            </div>
            <div className="mt-4 lg:mt-12 xl:mt-16 col-span-4 lg:col-span-12">
              <Image
                className="mx-auto"
                width={1042}
                height={668}
                src="/images/home/chart-6.svg"
                alt="chart 6"
              />
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">Fuente y fecha de actualización</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="pt-20 pb-6">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4">
              <h3 className="text-2xl lg:text-[31px] font-semibold">
                Explora los{" "}
                <span className="italic font-normal text-dark-slate-gray">
                  datos
                </span>
              </h3>
            </div>
            <div className="mt-4 col-span-4 lg:col-span-12">
              <Image
                width={1267}
                height={608}
                src="/images/home/dashboard.svg"
                alt="dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
