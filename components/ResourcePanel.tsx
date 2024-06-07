'use client'

import Image from "next/image"
import ResourceCard from "./ResourceCard"
import { useState } from "react"
import { removeAccents } from "@/util"
import ReactPaginate from 'react-paginate';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/FilterModal";

const optionsCategory:Array<{label: string, value: string}> = [
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
    },
    {
        label: "Información sociodemográfica",
        value: "sociodemograph"
    }
]

const optionsType:Array<{label: string, value: string}> = [
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

interface ResourcePanelProps {
    data: any
    isType: boolean
    image: boolean,
    cardTitle: string
}

export default function ResourcePanel({ data, isType = false, image = false, cardTitle }: ResourcePanelProps) {
    const [query, setQuery] = useState('')
    const [order, setOrder] = useState('AZ')
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedType, setSelectedType] = useState<string[]>([])
    const [selectedYear, setSelectedYear] = useState('')

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 5;

    // @ts-ignore
    const years = Array.from(new Set(data.map((item: any) => item.year))).sort((a, b) => a - b)

    function filterBySearch(item: any) {
        if (!query) return true

        return removeAccents(item.title.toLowerCase()).includes(removeAccents(query.toLowerCase()))
    }

    function filterByCategory(item: any) {
        if (selectedCategories.length > 0) {
            return selectedCategories.includes(item.category)
        }
        return true
    }

    function filterByType(item: any) {
        if (selectedType.length > 0) {
            return selectedType.includes(item.type)
        }
        return true
    }

    function filterByYear(item: any) {
        if (!selectedYear) return true

        return item.year.toString() === selectedYear
    }

    const filteredData = data
        .filter(filterByCategory)
        .filter(filterByType)
        .filter(filterBySearch)
        .filter(filterByYear)
        // @ts-ignore
        .sort((a, b) => {
            if (order === 'AZ') {
                return a.title.localeCompare(b.title)
            } else if (order === 'ZA') {
                return b.title.localeCompare(a.title)
            }
        })

    const pageCount = Math.ceil(filteredData.length / 5);

    const handleCategoryChange = (e: any) => {
        const { value } = e.target

        const choicesSet = new Set(selectedCategories)
        choicesSet.has(value) ? choicesSet.delete(value) : choicesSet.add(value)

        const result = Array.from(choicesSet)
        setSelectedCategories(result)
    }

    const handleTypeChange = (e: any) => {
        const { value } = e.target

        const choicesSet = new Set(selectedType)
        choicesSet.has(value) ? choicesSet.delete(value) : choicesSet.add(value)

        const result = Array.from(choicesSet)
        setSelectedType(result)
    }

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * 5);
        setItemOffset(newOffset);
    }

    const clearAll = () => {
        setSelectedCategories([])
        setSelectedType([])
        setQuery('')
        setSelectedYear('')
    }


    return (
        <div className="lg:grid grid-cols-12 u-container">
            <div className="col-span-4 mb-[15px]">
                <div className="flex gap-4 lg:block">
                    <div className="lg:hidden">
                        <Dialog>
                            <DialogTrigger>
                                <p className="flex items-center gap-x-2.5 py-2 px-5 rounded-[20px] bg-seasalt border border-eerie-black/40 w-28">
                                    <Image
                                        src="/images/icons/filter.svg"
                                        alt="filter icon"
                                        width={21}
                                        height={14}
                                    />
                                    <span>Filtros</span>
                                </p>
                            </DialogTrigger>
                            <DialogContent>
                                <div className="mt-8 flex flex-col justify-between h-full pb-10 overflow-y-scroll">
                                    <div>
                                        <div className="w-3/4 lg:mt-10">
                                            <h2 className="mb-3 text-xl font-semibold">Categoría</h2>
                                            {
                                                optionsCategory.map((option, i) => {
                                                    return (
                                                        <div className="flex gap-2" key={i}>
                                                            <input
                                                                type="checkbox"
                                                                id={option.value}
                                                                checked={selectedCategories.includes(option.value)}
                                                                onChange={handleCategoryChange}
                                                                value={option.value}
                                                            />
                                                            <label htmlFor={option.value}>{option.label}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <hr className="my-7" />
                                            {isType &&
                                                <>
                                                    <h2 className="mb-3 text-xl font-semibold">Tipo de publicación</h2>
                                                    {
                                                        optionsType.map((option, i) => {
                                                            return (
                                                                <div className="flex gap-2" key={i}>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={option.value}
                                                                        checked={selectedType.includes(option.value)}
                                                                        onChange={handleTypeChange}
                                                                        value={option.value}
                                                                    />
                                                                    <label htmlFor={option.value}>{option.label}</label>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <hr className="my-7" />
                                                </>
                                            }
                                            <h2 className="mb-3 text-xl font-semibold">Año</h2>
                                            <select className='h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12' name="" id={selectedYear} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                                <option value="">Selecciona una opción</option>
                                                {years.map((option, i) => {
                                                    return (
                                                        // @ts-ignore
                                                        <option key={i} value={option}>{option}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <button className="text-[13px] text-dark-slate-gray underline" onClick={clearAll}>
                                                Reestablecer filtros
                                            </button>
                                            <DialogClose>
                                                <button className="text-dark-slate-gray font-semibold rounded-[20px] bg-asparagus/40 py-2 px-4">
                                                    Aplicar
                                                </button>
                                            </DialogClose>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="search"
                            className='h-10 w-full lg:w-3/4 overflow-hidden rounded-3xl border pl-12 pr-4'
                            placeholder="Buscar por palabra clave"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="absolute left-4 top-0 flex h-full w-5 items-center justify-center">
                            <Image
                                src="/images/icons/search.svg"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex justify-between w-3/4 mt-10 items-center">
                        <p className="font-semibold">Filtrar por</p>
                        <button className="text-sm text-dark-slate-gray" onClick={clearAll}>
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
                                            checked={selectedCategories.includes(option.value)}
                                            onChange={handleCategoryChange}
                                            value={option.value}
                                        />
                                        <label htmlFor={option.value}>{option.label}</label>
                                    </div>
                                )
                            })
                        }
                        <hr className="my-7" />
                        {isType &&
                            <>
                                <h2 className="mb-3 text-xl font-semibold">Tipo de publicación</h2>
                                {
                                    optionsType.map((option, i) => {
                                        return (
                                            <div className="flex gap-2" key={i}>
                                                <input
                                                    type="checkbox"
                                                    id={option.value}
                                                    checked={selectedType.includes(option.value)}
                                                    onChange={handleTypeChange}
                                                    value={option.value}
                                                />
                                                <label htmlFor={option.value}>{option.label}</label>
                                            </div>
                                        )
                                    })
                                }
                                <hr className="my-7" />
                            </>
                        }
                        <h2 className="mb-3 text-xl font-semibold">Año</h2>
                        <select className='h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12' name="" id={selectedYear} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                            <option value="">Selecciona una opción</option>
                            {years.map((option, i) => {
                                return (
                                    // @ts-ignore
                                    <option key={i} value={option}>{option}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-span-8">
                <div className="flex lg:justify-end items-center gap-4 mb-10 lg:mb-0">
                    <h2 className="text-xl font-semibold hidden lg:block">
                        Ordenar por
                    </h2>
                    <select className='h-10 w-full lg:w-min overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12' name="" id={order} value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="AZ">De la A a Z</option>
                        <option value="ZA">De la Z a A</option>
                    </select>
                </div>
                {
                    filteredData.slice(itemOffset, endOffset).map((item: any, idx: any) => {
                        return (
                            <ResourceCard key={idx} data={item} image={image} cardTitle={cardTitle} />

                        )
                    })
                }
                <div className="flex items-center justify-center lg:col-span-8 lg:col-start-5 mt-14 shado font-normal w-full">
                    <ReactPaginate
                        className="flex items-center gap-x-8"
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                        disabledLinkClassName="opacity-60 font-normal"
                        pageLinkClassName="block rounded-full grid place-items-center w-10 h-10"
                        activeLinkClassName="bg-true-blue text-dark-slate-gray shadow-lg rounded-full font-bold"
                        previousLabel={
                            <button className="flex items-center font-bold text-dark-slate-gray gap-x-2.5 py-3 px-5 bg-white rounded-[20px] u-shadow-1">
                                <Image
                                    width={5}
                                    height={10}
                                    src="/images/icons/arrow-left.svg"
                                    alt="arrow left icon"
                                />
                                <p>Anterior</p>
                            </button>
                        }
                        nextLabel={
                            <button className="flex items-center font-bold text-dark-slate-gray gap-x-2.5 py-3 px-5 bg-white rounded-[20px] u-shadow-1">
                                <p>Siguiente</p>
                                <Image
                                    width={5}
                                    height={10}
                                    src="/images/icons/arrow-right.svg"
                                    alt="arrow right icon"
                                />
                            </button>
                        }
                    />
                </div>
            </div>
        </div>
    )
}