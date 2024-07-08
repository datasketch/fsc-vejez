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
import DisclaimerTitle from "@/components/DisclaimerTitle";
import TechTreeMap from "@/components/TechTreeMap";

export const metadata: Metadata = {
    title: "Cifras relevantes",
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
        <div className="pt-16 pb-16 mt-[20px] relative -z-0">
            <h1 className="text-4xl lg:text-6xl font-semibold text-dark-slate-gray text-center">
                Cifras relevantes
            </h1>
            <p className="w-3/5 text-center mt-5 mx-auto">
                En esta sección encontrarás una recopilación exhaustiva de datos clave sobre temáticas de importancia para la población mayor en Colombia. La información sobre tecnología, finanzas, salud, educación y movilidad está pensada para apoyar la investigación, la formulación de políticas y el desarrollo de iniciativas que mejoren la calidad de vida de las personas mayores en Colombia.
            </p>
            <p className="w-3/5 text-center mt-1 mx-auto mb-10">
                Las cifras relevantes proporcionan una visión integral de las condiciones y tendencias de la vejez en Colombia, basándose en datos actuales y confiables. Puedes explorar estos datos en profundidad a través del tablero de visualización interactivo, diseñado para proporcionar una comprensión clara y detallada de los datos. Descubre información valiosa que puede marcar la diferencia.
            </p>
            <div
                id="tecnologia-digitalizacion"
                className="py-20 bg-seasalt rounded-[40px] relative"
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
                            <DisclaimerTitle message="Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.">
                                <h3 className="text-2xl lg:text-[31px] font-semibold inline-block">
                                    Uso de internet y acceso a{" "}
                                    <span className="italic font-normal text-dark-slate-gray">
                                        dispositivos
                                    </span>
                                </h3>
                            </DisclaimerTitle>
                        </div>
                        <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                El mapa muestra el porcentaje de personas mayores en familias
                                encuestadas que no utilizan internet en los departamentos de
                                Colombia, de acuerdo con la Encuesta Nacional de Calidad de Vida
                                2022. Esta fue la respuesta predominante ante la pregunta por la
                                frecuencia de utilización de este servicio. El porcentaje de no
                                utilización de internet es menor en los departamentos del centro
                                del país y en el Archipiélago de San Andrés, Providencia y Santa
                                Catalina. Al seleccionar un departamento, se muestra el
                                porcentaje de uso de dispositivos por las personas mayores que
                                acceden a internet, mostrando con ello que el celular es el
                                dispositivo que más se usa para tal fin.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 shadow-lg p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
                            {/* <Map /> */}
                            <TechTreeMap />
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
                            <DisclaimerTitle message="Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.">
                                <h3 className="text-2xl lg:text-[31px] font-semibold">
                                    Fuentes de{" "}
                                    <span className="italic font-normal text-dark-slate-gray">
                                        ingreso
                                    </span>
                                </h3>
                            </DisclaimerTitle>
                        </div>
                        <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                La gráfica muestra las fuentes de ingresos de las personas
                                mayores a partir de los datos de la Gran Encuesta de Hogares
                                (GEIH), (DANE, 2023). Estas fuentes se clasifican en honorarios
                                profesionales, ingresos o comisiones y salarios u honorarios.
                                Los honorarios profesionales son la remuneración por ejercer la
                                profesión de manera independiente; los ingresos o comisiones son
                                las ganancias por obra, pieza, comisión u oficio, sin
                                deducciones; y los salarios u honorarios corresponden a los
                                pagos en dinero o especie que reciben los empleados. Los
                                honorarios profesionales son una fuente principal de ingresos,
                                especialmente a medida que las personas envejecen. El promedio
                                de honorarios de personas mayores es el más alto en comparación
                                con los otros ingresos que obtienen y también respecto a los
                                ingresos de las otras etapas del ciclo de vida.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-finanzas.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
                            <WrapperChart description="La gráfica muestra los ingresos en términos de honorarios profesionales, ingresos o comisiones y salarios u honorarios a través de los grupos etarios de juventud, adultez y personas mayores. Los datos son representados en barras verticales para compararlos. En las personas mayores, los honorarios profesionales llegan a 3 millones de pesos, los salarios u honorarios a 1.5 millones y los ingresos o comisiones a 1 millón.">
                                <MultipleBarChart
                                    data={data.ingresos.data}
                                    legend={data.ingresos.legend}
                                />
                            </WrapperChart>
                        </div>
                        <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
                            <a
                                className="underline"
                                target="_blank"
                                href="https://microdatos.dane.gov.co/index.php/catalog/782/get-microdata"
                            >
                                <p className="text-davys-gray">
                                    Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
                                </p>
                            </a>
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
                                El gráfico de barra apilada ilustra el uso de productos
                                financieros en los hogares con personas de 60 años o más según
                                los datos obtenidos por la Gran Encuesta de Hogares (GEIH),
                                (DANE,2023). La cuenta de ahorros es el producto más común,
                                representando más de la mitad de las respuestas (53.06%). Un
                                porcentaje significativo (27.95%) de las personas respondieron
                                no tener ningún producto financiero.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-finanzas2.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
                            <WrapperChart description="La gráfica de barra apilada tiene la forma de un billete de $50.000, con la efigie del escritor Gabriel García Márquez, representando a una persona mayor. Cada barra tiene un tamaño y un color diferente, correspondiente a los productos financieros que usan las personas mayores con su respectivo porcentaje de uso.">
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
                            <a
                                className="underline"
                                target="_blank"
                                href="https://microdatos.dane.gov.co/index.php/catalog/782/get-microdata"
                            >
                                <p className="text-davys-gray">
                                    Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
                                </p>
                            </a>
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
                            <DisclaimerTitle message="Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.">
                                <h3 className="text-2xl lg:text-[31px] font-semibold">
                                    Capacidades
                                </h3>
                            </DisclaimerTitle>
                        </div>
                        <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                A partir de los datos presentados por la Encuesta Nacional de
                                Calidad de Vida (DANE, 2022), oír, hablar, ver, mover el cuerpo,
                                entre otras, son capacidades que ayudan a satisfacer las
                                necesidades básicas diarias, por lo que su estado de bienestar
                                influye en aspectos como el nivel de independencia de una
                                persona. Aunque la mayoría de las personas mayores manifestaron
                                no tener impedimentos en realizar las actividades, presentan
                                alguna o mucha dificultad en ver; mover el cuerpo, caminar o
                                usar escaleras y oír.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-salud.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
                            <WrapperChart description="El mapa de calor muestra el número de personas mayores con diferentes niveles de dificultad para realizar diversas actividades. Las columnas representan los niveles de dificultad: 'No puede hacerlo', 'Sí, con mucha dificultad', 'Sí, con alguna dificultad' y 'Sin dificultad'. Los colores van del verde claro al verde oscuro, indicando el número de personas para cada nivel de dificultad según la capacidad. Cuantas más personas hayan respondido en una opción, más oscuro será el verde y viceversa.">
                                <p className="xl:hidden">
                                    Para ver la gráfica completa desliza hacia los lados
                                </p>
                                <HeatMapHome data={data.capacidades} />
                            </WrapperChart>
                        </div>
                        <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
                            <a
                                className="underline"
                                target="_blank"
                                href="https://microdatos.dane.gov.co/index.php/catalog/793/get-microdata"
                            >
                                <p className="text-davys-gray">
                                    Encuesta Nacional de Calidad de Vida (ECV), 2022, DANE
                                </p>
                            </a>
                        </div>
                        {/*  */}
                        <div className="mt-12 lg:mt-20 col-span-4">
                            <DisclaimerTitle message="Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.">
                                <h3 className="text-2xl lg:text-[31px] font-semibold">
                                    Vivienda y composición{" "}
                                    <span className="italic font-normal text-dark-slate-gray">
                                        del hogar
                                    </span>
                                </h3>
                            </DisclaimerTitle>
                        </div>
                        <div className="mt-4 lg:mt-20 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                Tanto hombres como mujeres muestran patrones de vivienda
                                similares. Los apartamentos y las casas son los tipos de
                                vivienda más comunes para ambos géneros. La propiedad totalmente
                                pagada y el arriendo/subarriendo son las condiciones de tenencia
                                más comunes para los apartamentos. En cambio, las casas tienen
                                una distribución más diversa en cuanto a tenencia, pero priman
                                la propiedad totalmente pagada, en usufructo y en
                                arriendo/subarriendo. La gráfica filtra los valores
                                predominantes tomados de la Encuesta Integrada de Hogares (DANE,
                                2023). Para conocer todos los resultados, diríjase a “Explora
                                los datos”, al final de la página de inicio.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-vivienda.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
                            <WrapperChart
                                description={[
                                    "El diagrama de Sankey muestra la distribución entre el género de las personas, los tipos de vivienda en los que residen y las condiciones de tenencia de las viviendas. Los flujos están representados por bandas de colores que varían en grosor, indicando la cantidad de personas que pertenecen a cada categoría.",
                                    "Los hombres y las mujeres están ubicados en la primera columna del diagrama, los tipos de vivienda se encuentran en la segunda columna, mientras que la condición de tenencia corresponde a la tercera columna. Las bandas de colores fluyen desde las categorías de género hacia los diferentes tipos de vivienda y condiciones de tenencia, mostrando visualmente la distribución de la población según estas variables.",
                                ]}
                            >
                                <p className="xl:hidden mb-6">
                                    Para ver la gráfica completa desliza hacia los lados
                                </p>
                                <SankeyHome data={data.vivienda_composicion} />
                            </WrapperChart>
                        </div>
                        <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
                            <a
                                className="underline"
                                target="_blank"
                                href="https://microdatos.dane.gov.co/index.php/catalog/782/get-microdata"
                            >
                                <p className="text-davys-gray">
                                    Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
                                </p>
                            </a>
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
                            <DisclaimerTitle message="Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.">
                                <h3 className="text-2xl lg:text-[31px] font-semibold leading-none">
                                    Personas que saben
                                    <span className="block italic font-normal text-dark-slate-gray">
                                        leer y escribir
                                    </span>
                                </h3>
                            </DisclaimerTitle>
                        </div>
                        <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                El treemap muestra la proporción de personas mayores que
                                afirmaron saber leer y escribir según la Gran Encuesta Integrada
                                de Hogares (DANE, 2022). Los jóvenes son quienes más
                                respondieron de manera afirmativa, seguidos de los adultos y las
                                personas mayores. 11.6% de las personas de 60 años o más
                                reportaron no saben leer ni escribir.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-educacion.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="mt-4 lg:mt-16 xl:mt-20 col-span-4 lg:col-span-12">
                            <WrapperChart description="El mapa de árbol muestra tres rectángulos correspondientes a los grupos etarios (jóvenes, adultos y personas mayores) y, dentro de cada uno, dos rectángulos con la proporción de las personas que saben leer y las que no. Cada rectángulo representa una categoría y su tamaño es proporcional al porcentaje indicado. Los colores distinguen las diferentes categorías.">
                                <p className="xl:hidden mb-6">
                                    Para ver la gráfica completa desliza hacia los lados
                                </p>
                                <TreeMapHome
                                    data={{
                                        name: "Tasa de alfabetismo",
                                        children: literacyRateData,
                                    }}
                                />
                            </WrapperChart>
                        </div>
                        <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
                            <a
                                className="underline"
                                target="_blank"
                                href="https://microdatos.dane.gov.co/index.php/catalog/782/get-microdata"
                            >
                                <p className="text-davys-gray">
                                    Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
                                </p>
                            </a>
                        </div>
                        <div className="mt-12 lg:mt-20 col-span-4">
                            <DisclaimerTitle message="Precaución proveniente del DANE: estas estadísticas reflejan el número de casos encontrados en el archivo de datos. No deben ser interpretadas como un resumen estadístico del universo de interés.">
                                <h3 className="text-2xl lg:text-[31px] font-semibold">
                                    Nivel educativo{" "}
                                    <span className="italic font-normal text-dark-slate-gray">
                                        alcanzado
                                    </span>
                                </h3>
                            </DisclaimerTitle>
                        </div>
                        <div className="mt-4 lg:mt-20 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                El archivo de datos de la Gran Encuesta Integrada de Hogares
                                (DANE, 2023) brinda información del último nivel educativo
                                alcanzado. La mayor parte de las personas mayores estudió hasta
                                básica primaria, seguida de media académica y básica secundaria.
                                Salvo básica primaria, normalista y doctorado, las personas
                                mayores son la etapa del ciclo de vida con menos personas en los
                                demás niveles educativos.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-educacion2.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-span-4 lg:col-span-12">
                            <WrapperChart description="El gráfico de barras apiladas muestra el número de personas por nivel educativo alcanzado en cada barra, dividida a su vez por colores que representan diferentes etapas del ciclo vital: jóvenes, adultos y personas mayores. El tamaño del área ocupada por cada color indica la proporción de personas de un grupo etario que tienen cierto nivel educativo alcanzado. El gráfico permite la comparación entre niveles educativos alcanzados y el número de personas por grupo etario.">
                                <HorizontalStakedBarChart
                                    data={data.nivel_educativo.data}
                                    legend={data.nivel_educativo.legend}
                                />
                            </WrapperChart>
                        </div>
                        <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
                            <a
                                className="underline"
                                target="_blank"
                                href="https://microdatos.dane.gov.co/index.php/catalog/782/get-microdata"
                            >
                                <p className="text-davys-gray">
                                    Gran Encuesta Integrada de Hogares (GEIH), DANE, 2023
                                </p>
                            </a>
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
                                Número de viajes de los grupos etarios por modalidad de{" "}
                                <span className="italic font-normal text-dark-slate-gray">
                                    transporte en Bogotá
                                </span>
                            </h3>
                        </div>
                        <div className="mt-4 lg:mt-12 col-span-4 lg:col-start-6 lg:col-end-13">
                            <p>
                                El transporte público es el modo de transporte más utilizado
                                entre los diferentes grupos etarios en la ciudad de Bogotá,
                                según la Encuesta de Movilidad (Secretaría Distrital de
                                Movilidad, 2023). El siguiente modo más popular es a pie, en
                                recorridos superiores a 15 minutos. Las personas mayores (60
                                años o más) hacen un menor uso del transporte en las diferentes
                                categorías en comparación con otras etapas del ciclo de vida,
                                con barras generalmente más cortas.
                            </p>
                        </div>
                        <div className="lg:hidden w-full flex col-span-4 mt-4 gap-2 p-2">
                            <Image src="/images/icons/warning.svg" width={30} height={30} alt="warning" />
                            <p>Para ver los gráficos dinámicos, entra a esta página desde tu computador.</p>
                        </div>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-transporte.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="col-span-4 lg:col-span-12">
                            <WrapperChart description="La gráfica de barras agrupadas muestra los modos de transporte utilizados en Bogotá, Colombia, por las diferentes etapas del ciclo de vida. Cada barra representa un modo de transporte, y las barras de colores en cada grupo indican la distribución de usuarios por etapas del ciclo vital.">
                                <HorizontalBarGraph
                                    data={data.modalidad_transporte.data}
                                    legend={data.modalidad_transporte.legend}
                                    height={1000}
                                />
                            </WrapperChart>
                        </div>
                        <div className="mt-12 lg:mt-16 col-span-4 lg:col-span-12">
                            <a
                                className="underline"
                                target="_blank"
                                href="https://www.simur.gov.co/encuestas-de-movilidad"
                            >
                                <p className="text-davys-gray">
                                    Encuesta de Movilidad, Secretaría Distrital de Movilidad, 2023
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div id="explore-data" className="pt-20 pb-6">
                <div className="u-container">
                    <div className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
                        <div className="col-span-4">
                            <h2 className="text-2xl lg:text-[31px] font-semibold">
                                Explora los{" "}
                                <span className="italic font-normal text-dark-slate-gray">
                                    datos
                                </span>
                            </h2>
                        </div>
                        <p className="mt-5 col-span-4 lg:col-span-12">Conoce más de las personas mayores personalizando tu búsqueda en información sociodemográfica, tecnología, finanzas, salud, educación y transporte. Este tablero te permite interactuar al instante con los datos por grupos etarios, departamentos, países y años. </p>
                        <p className="mt-1 col-span-4 lg:col-span-12">Profundiza el análisis de tu información con apoyo del panel de detalle. Cada temática aporta datos de contexto actualizados, como el total de personas mayores en Colombia o su distribución por área geográfica y género. Impulsa tu trabajo con los datos y descárgalos en formatos de imagen o procesables.</p>
                        <div className="lg:hidden col-span-4 mt-4">
                            <Image
                                src="/images/cifras/mini-dashboard.png"
                                alt="grafico finanzas 1"
                                width={100}
                                height={100} // Estos valores son proporcionales
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div className="hidden lg:block mt-3 lg:mt-10 xl:mt-12 col-span-4 lg:col-span-12">
                            <iframe
                                className="size-full lg:aspect-video h-[80vh]"
                                src="https://services.datasketch.co/fsc-vejez-app/"
                                title="Explora los datos relacionados con la pagina"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <NavHome />
        </div>
    )
}