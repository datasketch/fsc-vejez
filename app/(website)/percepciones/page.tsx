import type { Metadata } from "next";
import data from "@/data/percepciones.json";
import BarChart2 from "@/components/Barchart";
import HorizontalBarGraph from "@/components/HorizontalBarGraph";
import TabSections from "@/components/TabSections";
import WrapperChart from "@/components/WrapperChart";
import Image from "next/image";
import WordCloud from "@/components/WordCloud";
import manizalesWordsData from "@/data/perception/manizales.json";
import cartagenaWordsData from "@/data/perception/cartagena.json";
import medellinWordsData from "@/data/perception/medellin.json";
import pereiraWordsData from "@/data/perception/pereira.json";
import armeniaWordsData from "@/data/perception/armenia.json";
import barranquillaWordsData from "@/data/perception/barranquilla.json";
import bogotaWordsData from "@/data/perception/bogota.json";
import caliWordsData from "@/data/perception/cali.json";

export const metadata: Metadata = {
  title: "Percepciones",
  description: "Lorem ipsum",
};

export default function Page() {
  return (
    <>
      <div className="u-container font-proxima-nova mt-20">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Percepciones sobre las <br /> personas mayores{" "}
          <i className="font-normal text-dark-slate-gray">en Colombia</i>
        </h1>
        <div className="lg:grid grid-cols-12 gap-5 mt-24">
          <div className="col-span-3">
            <h3 className="text-2xl font-semibold text-dark-slate-gray mb-1">
              Ciudades Cómo Vamos
            </h3>
            <svg
              width="60"
              height="1"
              viewBox="0 0 60 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="60" y2="0.5" stroke="#1D5556" />
            </svg>
            <p className="text-eerie-black mt-5">
              Este programa evalúa la calidad de vida desde la Encuesta de
              Percepción Ciudadana actualizada en 2022, con participación de
              adultos de todos los niveles socioeconómicos en los municipios
              encuestados.
            </p>
            <h4 className="text-xl font-semibold text-dark-slate-gray mt-14">
              Muestra de Ciudades Cómo Vamos
            </h4>
            <p className="text-3xl font-bold text-dark-slate-gray mt-1">
              17.255 habitantes
            </p>
            <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px] mb-5">
              Proporción de los participantes en la encuesta por rangos de edad
              y sexo
            </h4>
            <BarChart2 data={data.ciudades_como_vamos.data_etario} />
          </div>
          <div className="col-span-6 flex justify-center my-20 lg:my-0 mx-3">
            <Image
              width={488.5}
              height={569}
              src="/images/mapa-percepciones-1.svg"
              alt="map1"
            />
          </div>
          <div className="col-span-3 lg:text-right ">
            <h3 className="text-2xl font-semibold text-dark-slate-gray mb-1">
              Misión Colombia Envejece
            </h3>
            <div className="flex lg:justify-end">
              <svg
                width="60"
                height="1"
                viewBox="0 0 60 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="60" y2="0.5" stroke="#1D5556" />
              </svg>
            </div>
            <p className="text-eerie-black mt-5">
              Este estudio busca transformar los imaginarios sobre el
              envejecimiento en Colombia. Se desarrollaron grupos focales con
              personas mayores y entrevistas a profundidad a 12 expertos en 7
              ciudades.
            </p>
            <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px] mb-7">
              Porcentaje de grupos focales según el rango de edad de sus
              participantes
            </h4>
            <div className="flex lg:justify-end">
              <Image
                width={287}
                height={149}
                src="/images/percepciones/icon-grupos-focales.svg"
                alt="focales"
              />
            </div>
            <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px]">
              Distribución geográfica de los participantes
            </h4>
            <div className="grid grid-cols-4 gap-3 mt-7 mx-auto">
              {data.mision_colombia_envejece.distribucion_geografica.map(
                (item: any, i) => {
                  return (
                    <div key={i} className="text-left">
                      <p className="text-xl text-dark-slate-gray font-semibold">
                        {item.value}
                      </p>
                      <p className="text-sm">{item.place}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className="mt-16 lg:w-1/2">
          <a
            className="underline"
            target="_blank"
            href="https://www.saldarriagaconcha.org/mision-colombia-envejece-una-investigacion-viva/"
          >
            <p className="text-vampire-gray">
              Misión Colombia Envejece; Fedesarrollo, Fundación Saldarriaga
              Concha, PROESA y DANE, 2023
            </p>
          </a>
          <a
            className="underline"
            target="_blank"
            href="https://redcomovamos.org/biblioteca-rccv/"
          >
            <p className="text-vampire-gray mt-4">
              Encuesta de Percepción Ciudadana, Red de Ciudades Cómo Vamos, 2022
            </p>
          </a>
        </div>
      </div>
      <div className="bg-white w-full rounded-[40px] my-10">
        <div className="u-container font-proxima-nova pb-10">
          <h2 className="text-center text-2xl lg:text-4xl  text-dark-slate-gray font-semibold pt-10">
            Percepciones Ciudades Cómo Vamos
          </h2>
          <div className="lg:grid grid-cols-12 gap-5 mt-20">
            <div className="col-span-5">
              <h3 className="text-2xl lg:text-4xl font-semibold">
                Percepciones sobre{" "}
                <i className="font-normal text-dark-slate-gray">la vejez</i>
              </h3>
            </div>
            <div className="col-span-7 mt-5 lg:mt-0">
              <p>
                Los participantes de la Encuesta Ciudades Cómo Vamos
                describieron en una palabra aquello en lo que piensan cuando
                escuchan “vejez”. Las respuestas de las personas mayores se
                presentan en la siguiente nube de palabras.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center mt-16">
            <div className="w-full">
              <WrapperChart description="Esta nube de palabras circular se conforma de diferentes palabras que describen la percepción de los encuestados sobre la vejez. Estas palabras varían su tamaño según la frecuencia de las respuestas.">
                <TabSections
                  sections={[
                    {
                      title: "Manizales",
                      wordCloud: <WordCloud words={manizalesWordsData} />,
                    },
                    {
                      title: "Cartagena",
                      wordCloud: <WordCloud words={cartagenaWordsData} />,
                    },
                    {
                      title: "Medellín",
                      wordCloud: <WordCloud words={medellinWordsData} />,
                    },
                    {
                      title: "Pereira",
                      wordCloud: <WordCloud words={pereiraWordsData} />,
                    },
                    {
                      title: "Armenia",
                      wordCloud: <WordCloud words={armeniaWordsData} />,
                    },
                    {
                      title: "Barranquilla",
                      wordCloud: <WordCloud words={barranquillaWordsData} />,
                    },
                    {
                      title: "Bogotá",
                      wordCloud: <WordCloud words={bogotaWordsData} />,
                    },
                    {
                      title: "Cali",
                      wordCloud: <WordCloud words={caliWordsData} />,
                    },
                  ]}
                />
              </WrapperChart>
            </div>
          </div>
          <a
            className="underline"
            target="_blank"
            href="https://redcomovamos.org/biblioteca-rccv/"
          >
            <p className="text-vampire-gray mt-16 ">
              Encuesta de Percepción Ciudadana, Red de Ciudades Cómo Vamos, 2022
            </p>
          </a>
          <div className="lg:grid grid-cols-12 gap-5 mt-20">
            <div className="col-span-5">
              <h3 className="text-2xl lg:text-4xl font-semibold">
                Preparación económica y financiera para{" "}
                <i className="font-normal text-dark-slate-gray">la vejez</i>
              </h3>
            </div>
            <div className="col-span-7 mt-5 lg:mt-0">
              <p>
                La mayoría de las personas de las ciudades encuestadas están
                totalmente en desacuerdo con estar preparadas económica y
                financieramente para su vejez.
              </p>
            </div>
          </div>
          <WrapperChart description="La gráfica de barras clasifica en su eje vertical los diferentes ciclos de vida y muestra, mediante barras de colores, las respuestas de los encuestados sobre su nivel de acuerdo o desacuerdo respecto a su preparación financiera para la vejez. El eje horizontal de la gráfica permite conocer el número de personas que contestaron para cada una de las opciones de respuesta.">
            <HorizontalBarGraph
              data={data.ciudades_como_vamos.data_finanzas.data}
              legend={data.ciudades_como_vamos.data_finanzas.legend}
            />
          </WrapperChart>
          <a
            className="underline"
            target="_blank"
            href="https://redcomovamos.org/biblioteca-rccv/"
          >
            <p className="text-vampire-gray mt-16 ">
              Encuesta de Percepción Ciudadana, Red de Ciudades Cómo Vamos, 2022
            </p>
          </a>
        </div>
      </div>
      <div className="u-container mt-20 font-proxima-nova">
        <h3 className="text-4xl font-semibold">
          Cruza{" "}
          <i className="font-normal text-dark-slate-gray">la información</i>
        </h3>
        <p className="mt-5">Explora los datos de la encuesta {'"'}Ciudades Cómo Vamos{'"'} sobre la percepción ciudadana de la vejez en Colombia. El tablero ofrece una experiencia interactiva y a la medida. Con solo unos clics, podrás filtrar y cruzar información según tus intereses, obteniendo una visión detallada de cada ciudad encuestada.</p>
        <p className="mt-1">Analiza las percepciones sobre los espacios públicos, los servicios más importantes y los factores de vulnerabilidad que impactan el consumo. Además, podrás descargar los datos en múltiples formatos de imagen o procesables para sacarles provecho. ¡Transforma la información en conocimiento y toma decisiones informadas!</p>
        <div className="mt-3 lg:mt-10 xl:mt-12">
          <iframe
            className="size-full aspect-video"
            src="https://services.datasketch.co/fsc-app-questions/"
            title="Dashboard para poder cruzar informacion"
          />
        </div>
      </div>
      <div className="bg-white w-full rounded-[40px] my-10 pt-10">
        <div className="u-container font-proxima-nova pb-10">
          <h2 className="text-center text-4xl  text-dark-slate-gray font-semibold ">
            Percepciones Misión Colombia Envejece
          </h2>
          <div className="flex w-full justify-center mt-16">
            <div className="w-full">
              <WrapperChart
                description="Estas descripciones corresponden con algunos de los hallazgos que surgieron del Informe Misión Colombia Envejece liderado por la Fundación Saldarriaga Concha. Cada uno de los hallazgos están clasificados en las temáticas de Salud y Bienestar, Educación, Ingresos y finanzas, Tecnología y digitalización; haga uso de la barra disponible para conocer esta información temática. Este contenido se construyó con base a las preguntas relevantes que estructuraron la conversación en los grupos focales, metodología llevada a cabo en la Misión."
                type="content"
              >
                <TabSections
                  sections={[
                    {
                      title: "Salud y bienestar",
                      image: { src: "/images/home/health.svg", alt: "health image" },
                      wordContent: (
                        <div className="space-y-6 max-w-[1002px] mx-auto">
                          <p>
                            Las personas mayores definen tener buena salud como
                            la capacidad de ser independientes, moverse
                            libremente y realizar actividades diarias sin
                            restricciones. Para ellos, buena salud significa ser
                            funcional, productivo y sentirse bien en su vida
                            diaria, incluso si tienen condiciones de salud
                            subyacentes.
                          </p>
                          <div className="relative pl-8 space-y-2 before:content-[''] before:absolute before:top-1.5 before:left-0 before:w-5 before:h-[3px] before:bg-[#1D5556]">
                            <p className="font-semibold">
                              &quot;Tener buena salud es estar funcional, ser
                              productivo, sentirme bien en mi diario, con
                              trabajo, con mis amigos, con mi familia. Entonces,
                              a pesar de que tengo unas condiciones de salud de
                              base, yo siento que tengo una buena salud porque
                              funciono bien, para mí&quot;
                            </p>
                            <p>
                              GF, hombres y mujeres, intergeneracional, estratos
                              5 y 6, Manizales; Fundación Saldarriaga Concha,
                              Fedesarrollo, PROESA y DANE, 2023, p. 35
                            </p>
                          </div>
                          <p>
                            La percepción de buena salud incluye tanto la salud
                            física como la mental, considerando que una buena
                            salud mental implica estabilidad emocional,
                            resiliencia, compartir con familiares y manejar
                            retos diarios. La pandemia afectó su salud
                            especialmente en términos de acceso a servicios de
                            salud y ha exacerbado sentimientos de aislamiento y
                            ansiedad.
                          </p>
                          <p>
                            Estas percepciones subrayan la importancia de una
                            visión holística de la salud en la vejez, donde la
                            salud mental y física son componentes
                            interdependientes. Los hallazgos sugieren que deben
                            considerarse programas integrales que aborden tanto
                            las necesidades físicas como emocionales, destacando
                            la capacidad de autosuficiencia como un pilar del
                            bienestar.
                          </p>
                          <div className="relative pl-8 space-y-2 before:content-[''] before:absolute before:top-1.5 before:left-0 before:w-5 before:h-[3px] before:bg-[#1D5556]">
                            <p className="font-semibold">
                              &quot;La gran mayoría (70%) de las personas
                              mayores que necesitan cuidados reciben cuidado no
                              remunerado por parte de otro miembro del
                              hogar&quot;
                            </p>
                            <p>
                              Fundación Saldarriaga Concha, Fedesarrollo, PROESA
                              y DANE, 2023, p. 331
                            </p>
                          </div>
                          <p>
                            Además, es crucial articular a los cuidadores,
                            mayormente familiares, en estos procesos, dado su
                            impacto en la salud integral de las personas
                            mayores. Mejorar el acceso a servicios de salud,
                            incluyendo la telemedicina, puede ser una respuesta
                            efectiva a las barreras actuales para acceder a
                            estos servicios.
                          </p>
                        </div>
                      ),
                    },
                    {
                      title: "Educación",
                      image: { src: "/images/home/education.svg", alt: "education image" },
                      wordContent: (
                        <div className="space-y-6 max-w-[1002px] mx-auto">
                          <p>
                            Las personas mayores muestran un fuerte interés en
                            aprender cosas nuevas para mantenerse cognitivamente
                            activos y socialmente integrados, lo cual se
                            relaciona con la capacidad de autosuficiencia que
                            destacan en los aspectos de su bienestar. La
                            educación se convierte en un factor clave para la
                            salud integral, forjando una apreciación
                            intergeneracional alrededor de las personas mayores.
                            Estos espacios educativos les brindan un sentido de
                            propósito y contribución, y a su vez, las diferentes
                            generaciones se benefician de sus enseñanzas.
                          </p>
                          <div className="relative pl-8 space-y-2 before:content-[''] before:absolute before:top-1.5 before:left-0 before:w-5 before:h-[3px] before:bg-[#1D5556]">
                            <p className="font-semibold">
                              &quot;A mí me gustaría aprender (...) cómo
                              administrar el negocio, aprender algo más que
                              podamos hacer (...) ahora las cosas se manejan muy
                              distintas; las ventas, el manejo, aprender todo
                              eso para traer beneficios a la fundación, que nos
                              podamos modernizar&quot;
                            </p>
                            <p>
                              GF, mujeres mayores de 60 años, estratos 3 y 4,
                              Manizales; Fundación Saldarriaga Concha,
                              Fedesarrollo, PROESA y DANE, 2023, p. 224
                            </p>
                          </div>
                          <p>
                            Se han identificado varias barreras para acceder a
                            la educación, incluyendo el desconocimiento de los
                            programas disponibles y la falta de acceso a
                            tecnologías digitales necesarias para participar en
                            ofertas educativas en línea. La participación en
                            procesos de alfabetización y otras formas de
                            educación continua es vista como una oportunidad
                            para mejorar la calidad de vida y la autoestima. Se
                            debe enfatizar en la apertura de programas
                            específicos adaptados a sus necesidades, así como
                            mejorar su promoción para lograr mayor
                            participación. El interés de las personas mayores en
                            la educación subraya la necesidad de promover y
                            desarrollar programas educativos adaptados a sus
                            necesidades. Las barreras identificadas sugieren que
                            los esfuerzos deben centrarse en mejorar la
                            accesibilidad y la divulgación de las ofertas
                            educativas, destacando la capacitación en
                            habilidades digitales como crucial para permitir su
                            participación plena en la educación continua.
                          </p>
                        </div>
                      ),
                    },
                    {
                      title: "Ingresos y finanzas",
                      image: { src: "/images/home/pig.svg", alt: "pig image" },
                      wordContent: (
                        <div className="space-y-6 max-w-[1002px] mx-auto">
                          <p>
                            Las principales fuentes de ingreso para las personas
                            mayores incluyen pensiones, subsidios y, en algunos
                            casos, trabajos remunerados. Aunque las pensiones y
                            subsidios son cruciales para afrontar las diferentes
                            situaciones de las personas mayores, a menudo no son
                            suficientes para cubrir todas las necesidades
                            básicas, generando incertidumbre y falta de
                            confianza en el sistema de pensiones colombiano. El
                            ahorro para la vejez es una preocupación constante,
                            con muchos ahorrando de manera informal debido a la
                            falta de acceso a instrumentos financieros formales
                            y bajos ingresos. La pandemia intensificó la
                            percepción de la importancia del ahorro, pero
                            también reveló las dificultades para mantener
                            ahorros suficientes debido al aumento del costo de
                            vida.
                          </p>
                          <p>
                            Los hallazgos indican una necesidad urgente de
                            mejorar la seguridad económica de las personas
                            mayores, optando por mejorar la cobertura y la
                            cantidad de pensiones y subsidios.
                          </p>
                          <div className="relative pl-8 space-y-2 before:content-[''] before:absolute before:top-1.5 before:left-0 before:w-5 before:h-[3px] before:bg-[#1D5556]">
                            <p className="font-semibold">
                              &quot;El subsidio no contributivo de Colombia
                              Mayor tiene una cobertura limitada ({"<"} 30% de
                              la población mayor) y un monto bajo (entre $80.000
                              y $120.000 mensuales)&quot;
                            </p>
                            <p>
                              Fundación Saldarriaga Concha, Fedesarrollo, PROESA
                              y DANE, 2023, p.437
                            </p>
                          </div>
                          <p>
                            Además, se deben promover instrumentos financieros
                            accesibles y programas de educación financiera para
                            ayudar a las personas mayores a gestionar sus
                            recursos de manera más efectiva. El bienestar está
                            ligado a los ingresos desde diferentes perspectivas;
                            algunas personas mayores continúan trabajando luego
                            de su jubilación para mantenerse activos, mientras
                            que otros deben hacerlo para sostener económicamente
                            a sus familias debido a la falta de pensión.
                          </p>
                          <div className="relative pl-8 space-y-2 before:content-[''] before:absolute before:top-1.5 before:left-0 before:w-5 before:h-[3px] before:bg-[#1D5556]">
                            <p className="font-semibold">
                              &quot;Los hijos colaboran, pero eso no es lo mismo
                              que tener uno su capital (…) después de los 60 no
                              lo están recibiendo a uno en ningún lado&quot;
                            </p>
                            <p>
                              GF, hombres y mujeres, mayores de 60 años,
                              estratos 1 y 2, Tunja; Fundación Saldarriaga
                              Concha, Fedesarrollo, PROESA y DANE, 2023, p.481
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      title: "Tecnología y digitalización",
                      image: { src: "/images/home/phone.svg", alt: "phone image" },
                      wordContent: (
                        <div className="space-y-6 max-w-[1002px] mx-auto">
                          <p>
                            Las personas mayores reconocen la importancia de las
                            nuevas tecnologías para mejorar su calidad de vida y
                            acceso a servicios. Sin embargo, muchos enfrentan
                            dificultades para utilizarlas debido a la falta de
                            habilidades digitales, aunque reconocen haber
                            desarrollado algunas de forma básica
                          </p>
                          <div className="relative pl-8 space-y-2 before:content-[''] before:absolute before:top-1.5 before:left-0 before:w-5 before:h-[3px] before:bg-[#1D5556]">
                            <p className="font-semibold">
                              &quot;Hay muchas barreras en el momento porque
                              ahora lo que manda es la tecnología, y a nosotros
                              nos atropella la tecnología, porque yo veo que
                              ahora hasta el más pequeño maneja celulares y
                              nosotros apenas para chatear, contestar y
                              llamar&quot;
                            </p>
                            <p>
                              GF, Mujeres mayores de 60 años, estratos 1 y 2,
                              Manizales; Fundación Saldarriaga Concha,
                              Fedesarrollo, PROESA y DANE, 2023, p.231
                            </p>
                          </div>
                          <p>
                            Hay un interés por aprender a usar tecnologías
                            digitales, pero las personas mayores necesitan apoyo
                            y capacitación, lo que los hace autopercibirse en
                            una posición de desventaja frente a otras
                            generaciones más inmersas en este entorno digital.
                          </p>
                          <p>
                            A pesar de estas dificultades, la pandemia obligó a
                            las personas mayores a familiarizarse con las redes
                            sociales para mantenerse en contacto con sus seres
                            queridos, logrando que algunos se adaptaran a estos
                            cambios. La inclusión digital y el sentido de
                            independencia que buscan fortalecer son
                            fundamentales para su participación plena en la
                            sociedad actual. Este escenario facilita un mejor
                            alcance de sus proyectos personales y capacidades de
                            autogestión en la cotidianidad. Por tanto, deben
                            priorizarse los programas de alfabetización digital
                            mediante iniciativas intergeneracionales, con un
                            enfoque en la autonomía y la promoción asertiva del
                            bienestar.
                          </p>
                        </div>
                      ),
                    },
                  ]}
                />
              </WrapperChart>
            </div>
          </div>
          <a
            className="underline"
            target="_blank"
            href="https://www.saldarriagaconcha.org/mision-colombia-envejece-una-investigacion-viva/"
          >
            <p className="text-vampire-gray mt-16 ">
              Misión Colombia Envejece; Fedesarrollo, Fundación Saldarriaga
              Concha, PROESA y DANE, 2023
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
