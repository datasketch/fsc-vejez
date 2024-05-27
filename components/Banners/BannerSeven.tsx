export default function BannerSeven() {
  return (
    <div className="rounded-[40px] absolute z-50 w-full bg-anti-flash-white pt-20 pb-9">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
        <div className="col-start-1 col-span-5">
          <div className="flex flex-row gap-4 items-center">
            <img src="/images/icon-mobility.svg" alt="icon-mobility" />
            <p className="text-3xl font-semibold text-dark-slate-gray">Movilidad y transporte</p>
          </div>
        </div>

        <div className="row-start-2 col-start-1 col-span-4 mt-11">
          <h3 className="text-3xl font-semibold">Número de viajes de grupos etarios por modalidad de <span className="italic text-dark-slate-gray font-normal">transporte en Bogotá</span></h3>
        </div>
        <div className="row-start-2 col-start-6 col-span-7 mt-11">
          <p className="text-base">"A Pie" es la modalidad de transporte más utilizada entre los diferentes grupos etarios. La siguiente modalidad más popular varía según la edad, pero parece ser el "Auto" para los grupos de 26 años o más. Es notable que ciertas modalidades de transporte, como "Cable", "Transporte Escolar" y "Patineta", son utilizadas en menor medida comparativamente. Además, el grupo etario de "Más de 60" parece utilizar menos el transporte en comparación con otros grupos etarios, con barras generalmente más cortas.</p>
        </div>

        <div className="col-start-1 col-span-10 mt-8">
          <img src="/images/legend-7.svg" alt="legend-7" />
        </div>

        <div className="col-start-2 col-span-11 mt-8">
          <img src="/images/chart-9.svg" alt="chart-9" />
        </div>

        <div className="row-start-5 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-5 col-start-1 col-span-3 text-base font-normal mt-8">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>
      </div>
    </div>
  )
}