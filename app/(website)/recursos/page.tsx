import type { Metadata } from "next";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ResourcePanel from "@/components/ResourcePanel";
import data from "@/data/recursos.json"


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
                        <ResourcePanel data={data.biblioteca} isType={true} image={true} cardTitle="Informe" />
                    </TabPanel>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <ResourcePanel
                            // @ts-ignore
                            data={data.politicas}
                            cardTitle="Política pública"
                            isType={false}
                            image={false} />
                    </TabPanel>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <ResourcePanel
                            // @ts-ignore
                            data={data.datos}
                            cardTitle="Datos"
                            isType={false}
                            image={false} />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    )
}