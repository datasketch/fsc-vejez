/* eslint-disable @next/next/no-img-element */
export default function BannerOne() {
  return (
    <>
      <div className="flex justify-center mt-11">
        <h1 className="text-6xl font-proximaNovoaA">+60 <span className="italic text-dark-slate-gray">Datos plateados</span></h1>
      </div>
      <div className="bg-banner-one-home bg-cover bg-no-repeat absolute -z-10 mt-16">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
          <div className="row-start-1 col-start-2 col-span-4 relative">
            <img src="/images/dialogue-ballon-g.svg" alt="dialogue-ballon-g" />
            <div className="absolute z-10 top-1 p-3 w-[262px]">
              <h3 className="text-xs text-white"><span className="text-xl">19.2%</span> Porcentaje de personas mayores en Colombia</h3>
            </div>
          </div>

          {/* Col-1 */}
          <div className="col-start-1 col-span-4 mt-8 w-80">
            <h3 className="text-dark-slate-gray font-semibold text-xl">Las personas mayores en Colombia</h3>
            <div className="mt-2 h-[1px] w-[60px] bg-dark-slate-gray" />
            <div className="flex flex-row gap-2 mt-5 border-black/40 border-dashed border-b-[1px] pb-5">
              <div>
                <h3 className="text-dark-slate-gray font-bold text-4xl">5.8M</h3>
              </div>
              <div>
                <h3 className="text-base font-normal">de personas de 60 años o más en Colombia</h3>
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-5">
              <img src="/images/human-figure-1.svg" alt="human-figure-1.svg" />
              <h3 className="text-dark-slate-gray text-base font-semibold">equivale al 13,2% de la población</h3>
            </div>
            <div className="mt-8">
              <h3 className="text-dark-slate-gray text-xl font-semibold">Distribución en áreas geográficas</h3>
              <div className="mt-2 h-[1px] w-[60px] bg-dark-slate-gray" />
              <div className="mt-8">
                <img src="/images/pie-chart.svg" alt="pie-chart" />
              </div>
            </div>
          </div>

          {/* Col-3 */}
          <div className="row-start-1 col-start-9 col-span-4 relative">
            <img src="/images/dialogue-ballon-t.svg" alt="dialogue-ballon-t" />
            <div className="absolute z-10 top-1 p-3">
              <h3 className="text-xs text-dark-slate-gray">
                <span className="text-xl">73 años</span> es la expectativa de vida al nacer en Colombia y a nivel mundial ha aumentado desde 1960, pero disminuyó en 2020.
              </h3>
            </div>
          </div>
          <div className="row-start-2 col-start-10 col-span-3">
            <div className="mt-8">
              <h3 className="text-dark-slate-gray font-semibold text-xl">Distribución población de 60 años o más en Colombia por sexo</h3>
              <div className="mt-2 h-[1px] w-[60px] bg-dark-slate-gray" />
              <div className="flex justify-center mt-5">
                <img src="/images/human-figure-2.svg" alt="human-figure-2" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-dark-slate-gray font-semibold text-xl">Proyecciones de la población por rangos de edad a 2050</h3>
              <div className="mt-2 h-[1px] w-[60px] bg-dark-slate-gray" />
              <div className="flex justify-center mt-5">
                <img src="/images/line-chart.svg" alt="line-chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}