import type { Metadata } from "next";
import data from "../../../static/data/percepciones.json"
import BarChart2 from "@/components/Barchart";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import HorizontalBarGraph from "@/components/HorizontalBarGraph";


export const metadata: Metadata = {
    title: "Percepciones",
    description: "Lorem ipsum",
};

export default function Page() {
    return (
        <>
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
                        <BarChart2 data={data.ciudades_como_vamos.data} />
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
                        <div className="grid grid-cols-4 gap-3 mt-7 mx-auto">
                            {
                                data.mision_colombia_envejece.distribucion_geografica.map((item: any, i) => {
                                    return (
                                        <div key={i} className="text-left">
                                            <p className="text-2xl text-dark-slate-gray font-semibold">{item.value}</p>
                                            <p>{item.place}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <p className="text-vampire-gray mt-16 ">Fuente y fecha de actualización</p>
            </div>
            <div className="bg-white w-full rounded-[40px] my-10">
                <div className="u-container font-proxima-nova pb-10">
                    <h2 className="text-center text-4xl  text-dark-slate-gray font-semibold pt-10">Percepciones Ciudades Cómo Vamos</h2>
                    <div className="grid grid-cols-12 gap-5 mt-20">
                        <div className="col-span-5">
                            <h3 className="text-4xl font-semibold">Percepciones sobre <i className="font-normal text-dark-slate-gray">la vejez</i></h3>
                        </div>
                        <div className="col-span-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="flex h-screen w-full justify-center mt-16">
                        <div className="w-full max-w-2xl">
                            <TabGroup>
                                <TabList className="flex gap-4 justify-center shadow-2xl">
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Armenia</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Barranquilla</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Cali</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Cartagena</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Medellín</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Pereira</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel className="flex justify-center mt-16"><img src="/images/tmp-percepciones.png" alt="map1" /></TabPanel>
                                    <TabPanel className="flex justify-center mt-16">Content 2</TabPanel>
                                    <TabPanel className="flex justify-center mt-16">Content 3</TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>
                    <p className="text-vampire-gray mt-16 ">Fuente y fecha de actualización</p>
                    <div className="grid grid-cols-12 gap-5 mt-20">
                        <div className="col-span-5">
                            <h3 className="text-4xl font-semibold">Preparación económica y financiera para <i className="font-normal text-dark-slate-gray">la vejez</i></h3>
                        </div>
                        <div className="col-span-7">
                            <p>La mayoría de las personas de las ciudades encuestadas están totalmente en desacuerdo con estar preparadas económica y financieramente para su vejez.</p>
                        </div>
                    </div>
                    <HorizontalBarGraph />
                    <p className="text-vampire-gray mt-16 ">Fuente y fecha de actualización</p>
                </div>
            </div>
            <div className="u-container mt-20 font-proxima-nova">
                <h3 className="text-4xl font-semibold">Cruza <i className="font-normal text-dark-slate-gray">la información</i></h3>
                <img src="/images/tmp-dashboard.png" alt="" />
            </div>
            <div className="bg-white w-full rounded-[40px] my-10 pt-10">
                <div className="u-container font-proxima-nova pb-10">
                    <h2 className="text-center text-4xl  text-dark-slate-gray font-semibold ">Percepciones Misión Colombia Envejece</h2>
                    <div className="flex h-screen w-full justify-center mt-16">
                        <div className="w-full max-w-2xl">
                            <TabGroup>
                                <TabList className="flex gap-4 justify-center">
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Salud y bienestar</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Educación</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Ingresos y finanzas</Tab>
                                    <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:bg-[#698F3F]/40 data-[hover]:bg-[#698F3F]/40  data-[focus]:outline-1 data-[focus]:outline-white">Tecnología y digitalización</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel className="flex justify-center mt-16"><img src="/images/tmp-percepciones.png" alt="map1" /></TabPanel>
                                    <TabPanel className="flex justify-center mt-16">Content 2</TabPanel>
                                    <TabPanel className="flex justify-center mt-16">Content 3</TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>
                    <p className="text-vampire-gray mt-16 ">Fuente y fecha de actualización</p>
                </div>
            </div>

        </>
    );
}