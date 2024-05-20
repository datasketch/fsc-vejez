import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Percepciones",
    description: "Lorem ipsum",
};

export default function Page() {
    return (
        <div className="u-container font-proxima-nova">
            <h1 className="text-6xl font-semibold">Percepciones sobre las <br /> personas mayores <i className="font-normal text-dark-slate-gray">en Colombia</i></h1>
            <div className="grid grid-cols-12 gap-5 mt-24">
                <div className="col-span-3">
                    <h3 className="text-2xl font-semibold text-dark-slate-gray mb-1">Ciudades Cómo Vamos</h3>
                    <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="60" y2="0.5" stroke="#1D5556" />
                    </svg>
                    <p className="text-eerie-black mt-5">
                        El programa evalúa la calidad de vida con la Encuesta de Percepción Ciudadana, actualizada en 2022 con participación de adultos de todos los niveles socioeconómicos en los municipios encuestados.
                    </p>
                    <h4 className="text-xl font-semibold text-dark-slate-gray mt-14">Muestra de Ciudades Cómo Vamos</h4>
                    <p className="text-3xl font-bold text-dark-slate-gray mt-1">17.255 habitantes</p>
                    <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px]">Proporción de los participantes de 60 años o más en la encuesta por sexo</h4>
                </div>
                <div className="col-span-6 flex justify-center">
                    <img src="/images/mapa-percepciones-1.png" alt="map1" />
                </div>
                <div className="col-span-3 text-right ">
                    <h3 className="text-2xl font-semibold text-dark-slate-gray mb-1">Misión Colombia Envejece</h3>
                    <div className="flex justify-end">
                        <svg width="60" height="1" viewBox="0 0 60 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="60" y2="0.5" stroke="#1D5556" />
                        </svg>
                    </div>
                    <p className="text-eerie-black mt-5">
                        Este estudio busca transformar los imaginarios sobre el envejecimiento en Colombia. Se desarrollaron grupos focales con personas mayores y entrevistas a profundidad a 12 expertos en 7 ciudades.
                    </p>
                    <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px]">Grupos focales por género de participantes</h4>
                    <h4 className="text-xl font-semibold text-dark-slate-gray mt-14 leading-[22px]">Distribución geográfica de los participantes</h4>
                </div>
            </div>
        </div>
    );
}