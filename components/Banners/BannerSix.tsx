export default function BannerSix() {
  return (
    <div className="rounded-t-[40px] absolute z-40 w-full bg-anti-flash-white pt-20">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
        <div className="col-start-1 col-span-5">
          <div className="flex flex-row gap-4 items-center">
            <img src="/images/icon-birrete.svg" alt="icon-birrete" />
            <p className="text-3xl font-semibold text-dark-slate-gray">Educación</p>
          </div>
        </div>

        <div className="row-start-2 col-start-1 col-span-4 mt-11">
          <h3 className="text-3xl font-semibold">Tasa de <span className="italic text-dark-slate-gray font-normal">alfabetismo</span></h3>
        </div>
        <div className="row-start-2 col-start-6 col-span-7 mt-11">
          <p className="text-base">De acuerdo con la Gran Encuesta Integrada de Hogares - 2022, esta es la proporción de personas mayores que afirmaron saber leer y escribir, en comparación con las respuestas frente al mismo aspecto de las poblaciones de 14 - 26 años y 27 - 59 años.</p>
        </div>

        <div className="col-start-1 col-span-10 mt-8">
          <img src="/images/legend-5.svg" alt="legend-5" />
        </div>

        <div className="col-start-3 col-span-11 mt-8">
          <img src="/images/chart-7.svg" alt="chart-7" />
        </div>

        <div className="row-start-5 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-5 col-start-1 col-span-3 text-base font-normal mt-8">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>

        {/* ---- */}

        <div className="row-start-6 col-start-1 col-span-4 mt-11">
          <h3 className="text-3xl font-semibold">Nivel educativo <span className="italic text-dark-slate-gray font-normal">alcanzado</span></h3>
        </div>
        <div className="row-start-6 col-start-6 col-span-7 mt-11">
          <p className="text-base">De acuerdo con la Gran Encuesta Integrada de Hogares - 2023, de las personas mayores reportadas en el archivo de datos. "x"  completaron la primaria, "y" culminaron el bachillerato, "z" alcanzaron un título universitario.</p>
        </div>

        <div className="col-start-1 col-span-10 mt-8">
          <img src="/images/legend-6.svg" alt="legend-6" />
        </div>

        <div className="col-start-3 col-span-11 mt-8">
          <img src="/images/chart-8.svg" alt="chart-8" />
        </div>

        <div className="row-start-9 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-9 col-start-1 col-span-3 text-base font-normal mt-8">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>
      </div>
    </div>
  )
}