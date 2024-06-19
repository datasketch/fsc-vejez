import type { Metadata } from "next";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import data from "@/data/recursos.json"
import Link from "next/link";
import { Suspense } from "react";
import ResourceServer from "@/components/ResourceServer";


export const metadata: Metadata = {
    title: "Recursos",
    description: "Lorem ipsum",
};

export default function Page() {
    return (
        <div className="bg-alabaster font-proxima-nova">
            <h1 className="text-4xl lg:text-6xl font-semibold text-dark-slate-gray text-center my-20">Recursos</h1>
            <TabGroup>
                <TabList className="flex gap-4 justify-start shadow-2xl u-container">
                    <Tab className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Biblioteca</Tab>
                    <Tab className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Políticas públicas</Tab>
                    <Tab className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Datos</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <Suspense fallback={<p>Cargando recursos</p>}>
                            <ResourceServer
                                data_tmp={data.biblioteca}
                                panel="biblioteca"
                                isType={true}
                                image={true} />
                        </Suspense>
                    </TabPanel>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <Suspense fallback={<p>Cargando recursos</p>}>
                            <ResourceServer
                                data_tmp={data.politicas}
                                panel="politicas-publicas"
                                isType={false}
                                image={false} />
                        </Suspense>
                    </TabPanel>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <Suspense fallback={<p>Cargando recursos</p>}>
                            <ResourceServer
                                data_tmp={data.datos}
                                panel="datos"
                                isType={false}
                                image={false} />
                        </Suspense>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
            <div className="u-container mt-20 flex justify-between">
                <div>
                    <h2 className=" text-5xl font-bold text-blue-dianne">¿Quieres agregar un recurso sobre personas mayores?</h2>
                    <Link
                        className="inline-flex py-2 px-5 gap-x-2 text-dark-slate-gray font-semibold bg-asparagus/40 rounded-[20px] mt-10"
                        href="/"
                    >
                        <p className="text-nowrap">Envíanos tu información</p>
                    </Link>
                </div>
                <img src="/images/recursos/icon-info-add-resource.png" alt="info" />
            </div>
            <hr className="u-container bg-blue-dianne h-[2px] mb-14" />
        </div>

    )
}