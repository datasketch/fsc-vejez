import type { Metadata } from "next";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export const metadata: Metadata = {
    title: "Recursos",
    description: "Lorem ipsum",
};

export default function Page() {
    return (
        <div className="bg-alabaster">
            <h1 className="text-6xl font-semibold text-dark-slate-gray text-center my-20">Recursos</h1>
            <TabGroup>
                <TabList className="flex gap-4 justify-start shadow-2xl u-container">
                    <Tab className="py-1 px-3 text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Biblioteca</Tab>
                    <Tab className="py-1 px-3 text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Políticas públicas</Tab>
                    <Tab className="py-1 px-3 text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Datos</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">Content 1</TabPanel>
                    <TabPanel className="flex justify-center mt-16">Content 2</TabPanel>
                    <TabPanel className="flex justify-center mt-16">Content 3</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    )
}