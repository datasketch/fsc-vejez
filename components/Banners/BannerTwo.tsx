/* eslint-disable @next/next/no-img-element */
export default function BannerTwo() {
    return (
        <div className="bg-banner-two-home bg-cover bg-no-repeat mt-16 pt-24 pb-10">
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-5 mx-10 lg:mx-20">
                <div className="col-start-1 col-span-6">
                    <h3 className="text-white font-semibold text-xl">Distribución de la población en Colombia por grupo de edad en 2024</h3>
                    <div className="mt-2 h-[1px] w-[60px] bg-white" />
                    <div className="mt-5">
                        <img src="/images/chart.svg" alt="chart" />
                    </div>
                    <div className="mt-8 text-base font-normal">
                        <h3 className="text-white">Fuente y fecha de actualización</h3>
                    </div>
                </div>
                <div className="col-start-7 col-span-6">
                    <h3 className="text-white font-semibold text-xl">Departamentos con más personas mayores</h3>
                    <div className="mt-2 h-[1px] w-[60px] bg-white" />
                    <div className="mt-5">
                        <p className="text-white text-base font-normal">Las personas mayores se concentran en el Eje Cafetero (Quindío, Caldas y Risaralda), contrario a los departamentos en el suroriente (Vaupés, Guainía, Vichada y Amazonas).</p>
                    </div>
                    <div className="mt-5">
                        <img src="/images/chart-2.svg" alt="chart" />
                    </div>
                </div>
            </div>
        </div>
    )
}