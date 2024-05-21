export default function BannerOne() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20 max-w-[1206px] mt-20">
      <div className="col-start-4 col-span-6">
        <h1 className="text-6xl font-proximaNovoaA">+60 <span className="italic text-dark-slate-gray">Datos plateados</span></h1>
      </div>
      <div className="col-start-2 col-span-3 mt-14 relative">
        <img src="/images/dialogue-ballon-g.svg" alt="dialogue-ballon-g" />
        <div className="absolute z-10 top-1 p-3 w-[262px]">
          <h3 className="text-xs text-white"><span className="text-xl">19.2%</span> Porcentaje de personas mayores en Colombia</h3>
        </div>
      </div>
      <div className="col-start-1 col-span-3 mt-8">
        <h3 className="text-dark-slate-gray font-semibold text-base">Las personas mayores en Colombia</h3>
        <div className="mt-2 h-[1px] w-[60px] bg-dark-slate-gray" />
        <div className="flex flex-row gap-2 mt-5 border-black/40 border-dashed border-b-[1px] pb-5">
          <div>
            <h3 className="text-dark-slate-gray font-bold text-4xl">5.8M</h3>
          </div>
          <div>
            <h3 className="text-base font-normal">de personas de 60 años o más en Colombia</h3>
          </div>
        </div>
      </div>
      <div className="col-start-5 col-span-4"></div>
      <img src="/images/Elemtnos gráficos.svg" alt="Elemtnos gráficos" />
      <div className="col-start-10 col-span-3"></div>
    </div>
  )
}