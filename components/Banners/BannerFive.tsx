export default function BannerFive() {
  return (
    <div className="rounded-t-[40px] absolute z-40 w-full bg-white pt-20">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
        <div className="col-start-1 col-span-5">
          <div className="flex flex-row gap-4 items-center">
            <img src="/images/icon-heart.svg" alt="icon-heart" />
            <p className="text-3xl font-semibold text-dark-slate-gray">Salud y bienestar</p>
          </div>
        </div>

        <div className="row-start-2 col-start-1 col-span-3 mt-11">
          <h3 className="text-3xl font-semibold">Capacidades</h3>
        </div>
        <div className="row-start-2 col-start-6 col-span-7 mt-11">
          <p className="text-base">La gráfica describe el nivel de desarrollo que tienen las personas mayores para capacidades como oír aun usando audífonos medicados. hablar o conversar, ver aun usando lentes o gafas, mover el cuerpo, caminar o subir y bajar escaleras, agarrar o mover objetos con las manos, entender, aprender, recordar o tomar decisiones por sí mismo(a), comer, vestirse o bañarse por sí mismo(a), relacionarse o interactuar con las demás personas. La gráfica además de hacer un conteo por categoría, cuenta con una escala para indicar en qué medida se posibilita o se dificulta llevar a cabo cada actividad.</p>
        </div>

        <div className="col-start-1 col-span-6 mt-8">
          <img src="/images/legend-3.svg" alt="legend-3" />
        </div>

        <div className="col-start-2 col-span-10 mt-8">
          <img src="/images/chart-5.svg" alt="chart-5" />
        </div>

        <div className="row-start-5 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-6 col-span-3 text-base font-normal">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>

        <div className="row-start-7 col-start-1 col-span-4 mt-11">
          <h3 className="text-3xl font-semibold">Vivienda y composición <span className="italic text-dark-slate-gray font-normal">del hogar</span></h3>
        </div>
        <div className="row-start-7 col-start-6 col-span-7 mt-11">
          <p className="text-base">El gráfico está dividido en tres secciones principales, la primera corresponde a los grupos demográficos según sexo (femenino, masculino). En la segunda sección se relacionan los tipos de vivienda y la tercera sección se identifican las condiciones de tenencia de vivienda. De esta manera se relacionan en conjunto los datos según los respectivos cruces de información.</p>
        </div>

        <div className="col-start-1 col-span-6 mt-8">
          <img src="/images/legend-4.svg" alt="legend-4" />
        </div>

        <div className="col-start-3 col-span-11 mt-8">
          <img src="/images/chart-6.svg" alt="chart-6" />
        </div>

        <div className="row-start-10 col-start-1 relative -top-[5rem]">
          <img src="/images/how-use.svg" alt="how-use" />
        </div>

        <div className="row-start-10 col-start-1 col-span-3 text-base font-normal mt-8">
          <h3 className="text-davys-gray">Fuente y fecha de actualización</h3>
        </div>
      </div>
    </div>
  )
}