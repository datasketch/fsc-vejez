'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import ResourcePanel from "@/components/ResourcePanel";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TabsResources({ libraryData, politicsData, dataData }: any) {
    const router = useRouter()
    const params = useSearchParams()
    const resource = params.get('seccion')
    const index = resource === 'datos' ? 2 : (resource === 'politicas' ? 1 : 0)
    

    return (
        <div className="bg-alabaster font-proxima-nova">
            <h1 className="text-4xl lg:text-6xl font-semibold text-dark-slate-gray text-center my-20">
                Recursos
            </h1>
            <TabGroup defaultIndex={index}>
                <TabList className="flex gap-4 justify-start shadow-2xl u-container">
                    <Tab onClick={() => router.push('/recursos?seccion=biblioteca')} className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">
                        Biblioteca
                    </Tab>
                    <Tab onClick={() => router.push('/recursos?seccion=politicas')} className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">
                        Políticas públicas
                    </Tab>
                    <Tab onClick={() => router.push('/recursos?seccion=datos')} className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">
                        Datos
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <ResourcePanel data={libraryData} isType image />
                    </TabPanel>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <ResourcePanel data={politicsData} scale />
                    </TabPanel>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <ResourcePanel data={dataData} />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
            <div className="u-container mt-20 flex flex-col gap-y-8 justify-center items-center md:items-start md:flex-row md:justify-between">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-blue-dianne">
                        ¿Quieres agregar un recurso sobre personas mayores?
                    </h2>
                    <Link
                        className="block text-center md:text-left md:inline-flex py-2 px-5 gap-x-2 text-dark-slate-gray font-semibold bg-asparagus/40 rounded-[20px] mt-10"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSevQlu80LNKeJCXzqYpi34sNwadxscwti-yz4z2ViDlY-kOTQ/viewform"
                    >
                        <p className="text-nowrap">Envíanos tu información</p>
                    </Link>
                </div>
                <Image
                    width={306}
                    height={232}
                    src="/images/recursos/icon-info-add-resource.svg"
                    alt="info"
                />
            </div>
            <hr className="u-container bg-blue-dianne h-[2px] mb-14" />
        </div>
    );
}