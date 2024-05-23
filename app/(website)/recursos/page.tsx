import type { Metadata } from "next";
import Image from "next/image"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export const metadata: Metadata = {
    title: "Recursos",
    description: "Lorem ipsum",
};

const optionsCategory = [
    {
        label: "Tecnología y digitalización",
        value: "tech"
    },
    {
        label: "Ingresos y finanzas",
        value: "finance"
    },
    {
        label: "Salud y bienestar",
        value: "health"
    },
    {
        label: "Educación",
        value: "education"
    }
]

const optionsType = [
    {
        label: "Informe",
        value: "form"
    },
    {
        label: "Presentaciones",
        value: "presentations"
    },
    {
        label: "Nota estadística",
        value: "note"
    },
    {
        label: "Reporte",
        value: "report"
    },
    {
        label: "Presentación",
        value: "presentation"
    },
]

export default function Page() {
    return (
        <div className="bg-alabaster font-proxima-nova">
            <h1 className="text-6xl font-semibold text-dark-slate-gray text-center my-20">Recursos</h1>
            <TabGroup>
                <TabList className="flex gap-4 justify-start shadow-2xl u-container">
                    <Tab className="py-1 px-3 text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Biblioteca</Tab>
                    <Tab className="py-1 px-3 text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Políticas públicas</Tab>
                    <Tab className="py-1 px-3 text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">Datos</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel className="bg-white w-full rounded-[40px] py-16">
                        <div className="grid grid-cols-12 u-container">
                            <div className="col-span-4">
                                <div className="relative">
                                    <input
                                        type="search"
                                        className='h-10 w-3/4 overflow-hidden rounded-3xl border pl-12 pr-4'
                                    />
                                    <div className="absolute left-4 top-0 flex h-full w-5 items-center justify-center">
                                        <Image
                                            src="/images/search.svg"
                                            width={20}
                                            height={20}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between w-3/4 mt-10 items-center">
                                    <p className="font-semibold">Filtrar por</p>
                                    <button className="text-sm text-dark-slate-gray">
                                        <u>Reestablecer filtros</u>
                                    </button>
                                </div>
                                <div className="w-3/4 mt-10">
                                    <h2 className="mb-3 text-xl font-semibold">Categoría</h2>
                                    {
                                        optionsCategory.map((option, i) => {
                                            return (
                                                <div className="flex gap-2" key={i}>
                                                    <input
                                                        type="checkbox"
                                                        id={option.value}
                                                        /* checked={selectedOptions.includes(option.value)} */
                                                        /* onChange={onChange} */
                                                        value={option.value}
                                                    />
                                                    <label htmlFor={option.value}>{option.label}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    <hr className="my-7" />
                                    <h2 className="mb-3 text-xl font-semibold">Tipo de publicación</h2>
                                    {
                                        optionsType.map((option, i) => {
                                            return (
                                                <div className="flex gap-2" key={i}>
                                                    <input
                                                        type="checkbox"
                                                        id={option.value}
                                                        /* checked={selectedOptions.includes(option.value)} */
                                                        /* onChange={onChange} */
                                                        value={option.value}
                                                    />
                                                    <label htmlFor={option.value}>{option.label}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    <hr className="my-7" />
                                    <h2 className="mb-3 text-xl font-semibold">Año</h2>
                                    <select className='h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12' /* name="" id={value} value={value} onChange={onChange} */>
                                        <option value="">Selecciona una opción</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-span-8">
                                <div className="flex justify-end items-center gap-4">
                                    <h2 className="mb-3 text-xl font-semibold">
                                        Ordenar por
                                    </h2>
                                    <select className='h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12' /* name="" id={value} value={value} onChange={onChange} */>
                                        <option value="">Selecciona una opción</option>
                                    </select>
                                </div>
                                <div className="w-full rounded-xl shadow-lg flex gap-7 p-5 ">
                                    <div className="w-1/4">
                                        <img src="/images/tmp-resource-img.png" className="" />
                                    </div>
                                    <div className="w-3/4">
                                        <h3>Informe</h3>
                                        <h5>Fundación Saldarriaga Concha, Asobancaria y Anagrama</h5>
                                        <p className="text-sm">2014</p>
                                        <h4 className="text-xl leading-[22px] font-semibold mt-7">RESUMEN EJECUTIVO INFORME TOP DOWN DEL PROYECTO ABRIENDO PUERTAS Contextualización y tendencias de atención a personas mayores</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="flex justify-center mt-16">Content 2</TabPanel>
                    <TabPanel className="flex justify-center mt-16">Content 3</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>

    )
}