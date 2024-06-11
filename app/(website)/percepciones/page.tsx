import type { Metadata } from "next";
/* import data from "@/static/data/percepciones.json" */
import data from "@/data/percepciones.json";
import BarChart2 from "@/components/Barchart";
import HorizontalBarGraph from "@/components/HorizontalBarGraph";
import TabSections from "@/components/TabSections";

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
              El programa evalúa la calidad de vida con la Encuesta de
              Percepción Ciudadana, actualizada en 2022 con participación de
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
              Proporción de los participantes de 60 años o más en la encuesta
              por sexo
            </h4>
            <BarChart2 data={data.ciudades_como_vamos.data_etario} />
          </div>
          <div className="col-span-6 flex justify-center my-20 lg:my-0 mx-3">
            <img src="/images/mapa-percepciones-1.png" alt="map1" />
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
            <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px]">
              Grupos focales por género de participantes
            </h4>
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
        <p className="text-vampire-gray mt-16 ">
          Fuente y fecha de actualización
        </p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex h-screen w-full justify-center mt-16">
            <div className="w-full max-w-2xl">
              <TabSections
                sections={[
                  {
                    title: "Manizales",
                    srcImage:
                      "/images/percepciones/comovamos/percepcion-manizales.png",
                  },
                  {
                    title: "Cartagena",
                    srcImage:
                      "/images/percepciones/comovamos/percepcion-cartagena.png",
                  },
                  {
                    title: "Medellín",
                    srcImage:
                      "/images/percepciones/comovamos/percepcion-medellin.png",
                  },
                  {
                    title: "Pereira",
                    srcImage:
                      "/images/percepciones/comovamos/percepcion-pereira.png",
                  },
                ]}
              />
            </div>
          </div>
          <p className="text-vampire-gray mt-16 ">
            Fuente y fecha de actualización
          </p>
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
          <HorizontalBarGraph
            data={data.ciudades_como_vamos.data_finanzas.data}
            legend={data.ciudades_como_vamos.data_finanzas.legend}
          />
          <p className="text-vampire-gray mt-16 ">
            Fuente y fecha de actualización
          </p>
        </div>
      </div>
      <div className="u-container mt-20 font-proxima-nova">
        <h3 className="text-4xl font-semibold">
          Cruza{" "}
          <i className="font-normal text-dark-slate-gray">la información</i>
        </h3>
        <div className="mt-6 lg:mt-10 xl:mt-12">
          <iframe
            className="size-full aspect-video"
            src="https://services.datasketch.co/content/2a4bce5c-cddd-4464-8e32-0f3318613bd9/"
          />
        </div>
      </div>
      <div className="bg-white w-full rounded-[40px] my-10 pt-10">
        <div className="u-container font-proxima-nova pb-10">
          <h2 className="text-center text-4xl  text-dark-slate-gray font-semibold ">
            Percepciones Misión Colombia Envejece
          </h2>
          <div className="flex h-screen w-full justify-center mt-16">
            <div className="w-full max-w-2xl">
              <TabSections
                sections={[
                  {
                    title: "Salud y bienestar",
                    srcImage: "/images/percepciones/mision/mision-health.png",
                  },
                  {
                    title: "Educación",
                    srcImage:
                      "/images/percepciones/mision/mision-education.png",
                  },
                  {
                    title: "Ingresos y finanzas",
                    srcImage: "/images/percepciones/mision/mision-finance.png",
                  },
                  {
                    title: "Tecnología y digitalización",
                    srcImage: "/images/percepciones/mision/mision-tech.png",
                  },
                ]}
              />
            </div>
          </div>
          <p className="text-vampire-gray mt-16 ">
            Fuente y fecha de actualización
          </p>
        </div>
      </div>
    </>
  );
}
