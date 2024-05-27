export default function BannerFour() {
  return (
    <div className="rounded-t-[40px] absolute z-30 w-full bg-anti-flash-white pt-20 mt-[79rem]">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
        <div className="col-start-1 col-span-5">
          <div className="flex flex-row gap-4 items-center">
            <img src="/images/icon-pig.svg" alt="icon-pig" />
            <p className="text-3xl font-semibold text-dark-slate-gray">Ingresos y finanzas</p>
          </div>
        </div>

        <div className="row-start-2 col-start-1 col-span-3 mt-11">
          <h3 className="text-3xl font-semibold">Fuentes de <span className="italic text-dark-slate-gray font-normal">ingreso</span></h3>
        </div>
        <div className="row-start-2 col-start-6 col-span-7 mt-11">
          <p className="text-base">El gráfico representa proporcionalmente los tipos de ingresos que reciben las personas mayores junto con las fuentes de las cuales provienen</p>
        </div>

        <div className="row-start-3 col-start-1 col-span-6 mt-20 ml-[4.5rem]">
          <img src="/images/chart-4.svg" alt="chart-4" />
        </div>
        <div className="row-start-3 col-start-9 col-span-3 mt-[190px]">
          <img src="/images/legend-2.svg" alt="legend-2" />
        </div>

        <div className="row-start-4 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-5 col-span-3 text-base font-normal">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>

        <div className="row-start-6 col-start-1 col-span-4 mt-10">
          <h3 className="text-3xl font-semibold">Inclusión financiera, acceso a productos y <span className="italic text-dark-slate-gray font-normal">servicios financieros</span></h3>
        </div>
        <div className="row-start-6 col-start-6 col-span-7 mt-10">
          <p className="text-base">El gráfico presentado es un gráfico de barras horizontal apilado que ilustra el uso de productos financieros en las personas de 60 años o más. Los productos incluidos son: Cuenta corriente, Cuenta de ahorros, CDT, Préstamo para compra de vivienda, Préstamo para compra de vehículo, Préstamo de libre inversión, Tarjeta de crédito, Otro, Ninguno.</p>
        </div>

        <div className="row-start-7 col-start-4 col-span-8 mt-14">
          <img src="/images/ticket.svg" alt="ticket" />
        </div>

        <div className="row-start-8 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-9 col-span-3 text-base font-normal">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>
      </div>
    </div>
  )
}