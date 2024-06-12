import HeatMapHome from "@/components/HeatMapHome";
import Map from "@/components/Map";
import SankeyHome from "@/components/SankeyHome";
import TreeMapHome from "@/components/TreeMapHome";
import type { Metadata } from "next";
import Image from "next/image";
import tasa_de_alfabetismo from "@/data/tasa_de_alfabetismo.json";
import HorizontalBarGraph from "@/components/HorizontalBarGraph";
import data from "@/data/home.json";
import HorizontalStakedBarChart from "@/components/HorizontalStakedBarChart";
import MultipleBarChart from "@/components/MultipleBarChart";
import WrapperChart from "@/components/WrapperChart";
import NavHome from "@/components/NavHome";
import { useRef } from "react";

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
            <div className="col-span-4 lg:col-span-12 order-1">
              <div className="text-center">
                <h1 className="text-[49px] lg:text-5xl xl:text-[61px] lg:font-semibold leading-none">
                  +60{" "}
                  <span className="-mt-2 lg:mt-0 block lg:inline-block text-[39px] lg:text-5xl xl:text-[61px] italic text-dark-slate-gray font-normal">
                    Datos plateados
                  </span>
                </h1>
              </div>
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
              <div className="hidden lg:block absolute -top-24 -right-full z-20">
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
      <div className="lg:-mt-[500px] relative pt-12 pb-24 lg:pt-20 lg:pb-40 xl:pt-32 xl:pb-64 bg-banner-home-mobile lg:bg-banner-home 2xl:bg-banner-big bg-cover bg-center">
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
              <p className="text-seasalt">
                Proyecciones del Censo Nacional de Población y Vivienda (CNPV),
                2018, DANE
              </p>
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
      <div
        id="tecnologia-digitalizacion"
        className="-mt-16 lg:-mt-32 xl:-mt-56 py-20 bg-seasalt rounded-[40px] relative"
      >
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
                El mapa muestra la frecuencia de utilización de internet a cargo
                de personas mayores en los departamentos de Colombia, de acuerdo
                con la Encuesta Nacional de Calidad de Vida 2022. El mapa usa
                una escala de colores para representar los rangos de frecuencia.
                Los departamentos en tonos más oscuros tienen más frecuencia de
                uso de internet, mientras que los departamentos en tonos más
                claros tienen una menor frecuencia.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <Map />
            </div>
          </div>
        </div>
      </div>
      <div
        id="ingresos-finanzas"
        className="py-20 rounded-[40px] relative bg-anti-flash-white -mt-10"
      >
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
                Los honorarios profesionales son la remuneración por ejercer la
                profesión de manera independiente, los salarios son los pagos en
                dinero o especie que reciben los empleados y los ingresos son
                las ganancias por obra, pieza, comisión u oficio, sin
                deducciones.
              </p>
              <p className="mt-4">
                Los honorarios profesionales son una fuente principal de
                ingresos, especialmente a medida que las personas envejecen. El
                promedio de honorarios de personas mayores es el más alto en
                comparación con los otros ingresos que obtienen y respecto a los
                ingresos de los otros ciclos de vida.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <WrapperChart description="La gráfica muestra los ingresos en términos de honorarios profesionales, ingresos o comisiones y salarios u honorarios a través de los ciclos de vida de juventud, adultez y personas mayores. Los datos son representados en barras verticales. Para los jóvenes, los honorarios profesionales son la mayor fuente de ingresos con alrededor de 2 millones de pesos. Los salarios u honorarios e ingresos o comisiones son menores, con aproximadamente 1 millón y 500 mil pesos, respectivamente. Para los adultos, los honorarios profesionales alcanzan 2.5 millones, seguidos por los salarios u honorarios con 2 millones y los ingresos o comisiones con 1 millón. En las personas mayores, los honorarios profesionales llegan a 3 millones, los salarios u honorarios a 1.5 millones y los ingresos o comisiones a 1 millón.">
                <MultipleBarChart
                  data={data.ingresos.data}
                  legend={data.ingresos.legend}
                />
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
              </p>
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
                El gráfico de barras apilado ilustra el uso de productos
                financieros en las personas de 60 años o más. Los productos
                incluidos son cuenta corriente, cuenta de ahorros, CDT, préstamo
                para compra de vivienda, préstamo para compra de vehículo,
                préstamo de libre inversión, tarjeta de crédito, otro o ninguno.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <WrapperChart description="La gráfica de barra apilada tiene la forma de un billete de $50.000, con la efigie del escritor Gabriel García Márquez, representando a una persona mayor. Cada barra tiene un tamaño y color diferente, correspondiente a los productos financieros que usan las personas mayores con su respectivo porcentaje de uso.">
                <Image
                  className="mx-auto"
                  width={822}
                  height={696}
                  src="/images/home/ticket.svg"
                  alt="ticket"
                />
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        id="salud-bienestar"
        className="-mt-12 py-20 bg-seasalt rounded-[40px] relative"
      >
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
                La gráfica muestra el nivel de dificultad que tienen las
                personas mayores respecto a la satisfacción de sus necesidades
                básicas en capacidades como oír, hablar, ver, mover el cuerpo,
                entre otras.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <WrapperChart description="La gráfica de mapa de calor muestra el porcentaje de personas mayores con diferentes niveles de dificultad para realizar diversas actividades. Las columnas representan cuatro niveles de capacidad: 'No puede hacerlo', 'Sí, con mucha dificultad', 'Sí, con alguna dificultad' y 'Sin dificultad'. Los colores van del verde claro al verde oscuro, indicando el porcentaje de personas para cada nivel de capacidad: oír, aún usando audífonos medicados; hablar o conversar; ver, aun usando lentes o gafas; mover el cuerpo, caminar o subir y bajar escaleras, agarrar o mover objetos con las manos, entender, aprender, recordar o tomar decisiones por sí mismo(a); comer, vestirse o bañarse por sí mismo(a) y relacionarse o interactuar con las demás personas.">
                <div className="h-[424px]">
                  <HeatMapHome data={data.capacidades} />
                </div>
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Encuesta de Nacional de Calidad de Vida (ECV), 2022, DANE
              </p>
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
                primera corresponde a los grupos demográficos según el género.
                En la segunda sección se relacionan los tipos de vivienda, y en
                la tercera sección se identifican las condiciones de tenencia de
                vivienda. De esta manera, se relacionan en conjunto los datos
                según los respectivos cruces de información.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <WrapperChart
                description={[
                  "El diagrama de Sankey muestra la distribución entre el género de las personas, los tipos de vivienda en los que residen y las condiciones de tenencia de las viviendas. Los flujos están representados por bandas de colores que varían en grosor, indicando la cantidad de personas que pertenecen a cada categoría.",
                  "Los hombres y las mujeres están ubicados en la primera columna del diagrama, los tipos de vivienda se encuentran en la segunda columna, mientras que la condición de tenencia corresponde a la tercera columna. Las bandas de colores fluyen desde las categorías de género hacia los diferentes tipos de vivienda y condiciones de tenencia, mostrando visualmente la distribución de la población según estas variables.",
                ]}
              >
                <div className="h-[527.23px]">
                  <SankeyHome data={data.vivienda_composicion} />
                </div>
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        id="educacion"
        className="py-20 rounded-[40px] relative bg-anti-flash-white -mt-10"
      >
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
                Personas que saben
                <span className="block italic font-normal text-dark-slate-gray">
                  leer y escribir
                </span>
              </h3>
            </div>
            <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
              <p>
                El treemap muestra la proporción de personas mayores que
                afirmaron saber leer y escribir según la Gran Encuesta Integrada
                de Hogares del 2022. Los jóvenes son quienes más respondieron de
                manera afirmativa, seguidos de los adultos y las personas
                mayores. 11.6% de las personas de 60 años o más reportaron no
                saben leer ni escribir.
              </p>
            </div>
            <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
              <WrapperChart description="El mapa de árbol muestra tres rectángulos correspondientes a los ciclos vitales (jóvenes, adultos y personas mayores) y, dentro de cada uno, dos rectángulos con la proporción de las personas que saben leer y las que no. Cada rectángulo representa una categoría y su tamaño es proporcional al porcentaje indicado. Los colores distinguen las diferentes categorías.">
                <div className="h-[500px]">
                  <TreeMapHome
                    data={{
                      name: "Tasa de alfabetismo",
                      children: literacyRateData,
                    }}
                  />
                </div>
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
              </p>
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
                El archivo de datos de la Gran Encuesta Integrada de Hogares -
                2023 muestra el número de personas que completaron la primaria,
                el bachillerato o alcanzaron un título universitario.
              </p>
            </div>
            <div className="col-span-12">
              <WrapperChart description="El gráfico de barras apiladas muestra el número de personas por nivel educativo alcanzado en cada barra, dividida a su vez por colores que representan diferentes ciclos vitales: jóvenes, adultos y personas mayores. El tamaño del área ocupada por cada color indica la proporción de personas de un ciclo vital que tienen cierto nivel educativo alcanzado. El gráfico permite la comparación entre niveles educativos alcanzados y el número de personas por ciclo vital.">
                <HorizontalStakedBarChart
                  data={data.nivel_educativo.data}
                  legend={data.nivel_educativo.legend}
                />
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        id="movilidad-transporte"
        className="-mt-12 py-20 bg-seasalt rounded-[40px] relative"
      >
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
                En la ciudad de Bogotá. “Transporte Público” es la modalidad de
                transporte más utilizada entre los diferentes grupos etarios. La
                siguiente modalidad más popular es “A Pie” en recorridos
                superiores a 15 minutos. Es notable que ciertas modalidades de
                transporte, como “Informal”, “Especial Ocupado” son utilizadas
                en menor medida comparativamente. Además el grupo etario de
                Personas mayores (60 años o más), hace un menor uso del
                transporte en las diferentes categorías en comparación con otros
                grupos etarios, con barras generalmente más cortas.
              </p>
            </div>
            <div className="col-span-12">
              <WrapperChart description="La gráfica de barras apiladas muestra los modos de transporte utilizados en Bogotá, Colombia, por diferentes rangos etarios. Cada barra representa un modo de transporte, y los segmentos de colores dentro de las barras indican la distribución de usuarios por grupos de edad.">
                <HorizontalBarGraph
                  data={data.modalidad_transporte.data}
                  legend={data.modalidad_transporte.legend}
                  height={1000}
                />
              </WrapperChart>
            </div>
            <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
              <p className="text-davys-gray">
                Encuesta de Movilidad, Secretaría Distrital de Movilidad, 2023
              </p>
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
            <div className="mt-6 lg:mt-10 xl:mt-12 col-span-4 lg:col-span-12">
              <iframe
                className="size-full aspect-video"
                src="https://services.datasketch.co/fsc-vejez-app/"
              />
            </div>
          </div>
        </div>
      </div>
      <NavHome />
    </>
  );
}
