/* eslint-disable @next/next/no-img-element */
export default function BannerThree() {
    return (
        <div className="rounded-t-[40px] absolute z-20 mt-10 bg-white pt-20">
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
                <div className="col-start-1 col-span-5">
                    <div className="flex flex-row gap-4 items-center">
                        <img src="/images/icon-cellphone.svg" alt="icon-cellphone" />
                        <p className="text-3xl font-semibold text-dark-slate-gray">Tecnología y digitalización</p>
                    </div>
                </div>

                <div className="row-start-2 col-start-1 col-span-3 mt-11">
                    <h3 className="text-3xl font-semibold">Frecuencia de uso de internet y acceso a <span className="italic text-dark-slate-gray font-normal">dispositivos</span></h3>
                </div>
                <div className="row-start-2 col-start-6 col-span-7 mt-11">
                    <p className="text-base">El mapa muestra la distribución geográfica del acceso a internet por departamento en Colombia, esto con base en los datos suministrados por la Encuesta Nacional de Calidad de Vida 2022 sobre frecuencia en el uso de internet desde cualquier lugar y dispositivo. El mapa usa una escala de colores para representar los rangos de cobertura. los departamentos en tonos más oscuros tienen una mayor proporción de hogares con acceso a internet, mientras que los departamentos en tonos más claros tienen una menor proporción.</p>
                </div>

                <div className="row-start-3 col-start-2 col-span-5 mt-20">
                    <img src="/images/map-chart.svg" alt="map-chart" />
                </div>
                <div className="row-start-3 col-start-1 col-span-4 relative top-[28rem]">
                    <img src="/images/read-the-graph.svg" alt="read-the-graph" />
                </div>

                <div className="row-start-3 col-start-8 col-span-4 mt-24 border-black/40 border-dashed border-b-[1px] pb-5 h-64">
                    <img src="/images/legend.svg" alt="legend" />
                </div>

                <div className="row-start-3 col-start-8 col-span-5 relative top-[25rem]">
                    <img src="/images/chart-3.svg" alt="chart-3" />
                </div>

                <div className="row-start-4 col-span-3 text-base font-normal mt-8">
                    <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
                </div>
            </div>
        </div>
    )
}