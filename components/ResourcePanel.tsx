'use client'

import Image from "next/image"
import ResourceCard from "./ResourceCard"
import { useState } from "react"
import { removeAccents } from "@/util"
import ReactPaginate from 'react-paginate';

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

export default function ResourcePanel({ data }: any) {
    const [query, setQuery] = useState('')
    const [order, setOrder] = useState('AZ')
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedType, setSelectedType] = useState([])
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
            // @ts-ignore
            return selectedCategories.includes(item.category)
        }
        return true
    }

    function filterByType(item: any) {
        if (selectedType.length > 0) {
            // @ts-ignore
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
        // @ts-ignore
        choicesSet.has(value) ? choicesSet.delete(value) : choicesSet.add(value)

        const result = Array.from(choicesSet)
        setSelectedCategories(result)
    }

    const handleTypeChange = (e: any) => {
        const { value } = e.target

        const choicesSet = new Set(selectedType)
        // @ts-ignore
        choicesSet.has(value) ? choicesSet.delete(value) : choicesSet.add(value)

        const result = Array.from(choicesSet)
        setSelectedType(result)
    }

    const handlePageClick = (event: any) => {
        console.log(event);
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
        <div className="grid grid-cols-12 u-container">
            <div className="col-span-4">
                <div className="relative">
                    <input
                        type="search"
                        className='h-10 w-3/4 overflow-hidden rounded-3xl border pl-12 pr-4'
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
                                        // @ts-ignore
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
                    <h2 className="mb-3 text-xl font-semibold">Tipo de publicación</h2>
                    {
                        optionsType.map((option, i) => {
                            return (
                                <div className="flex gap-2" key={i}>
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        // @ts-ignore
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
            <div className="col-span-8">
                <div className="flex justify-end items-center gap-4">
                    <h2 className="text-xl font-semibold">
                        Ordenar por
                    </h2>
                    <select className='h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12' name="" id={order} value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="AZ">De la A a Z</option>
                        <option value="ZA">De la Z a A</option>
                    </select>
                </div>
                {
                    filteredData.slice(itemOffset, endOffset).map((item: any, idx: any) => {
                        return (
                            <ResourceCard key={idx} data={item} />

                        )
                    })
                }
                <div className="flex items-center justify-center lg:col-span-8 lg:col-start-5 mt-14 shado font-normal">
                    <ReactPaginate
                        className="flex items-center gap-x-8"
                        breakLabel="..."
                        nextLabel="Siguiente"
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                        previousLabel="Anterior"
                        nextClassName="font-bold rounded-3xl shadow-lg px-5 py-3"
                        previousClassName="font-bold rounded-3xl shadow-lg px-5 py-3"
                        disabledLinkClassName="opacity-60 font-normal"
                        pageLinkClassName="block rounded-full grid place-items-center w-10 h-10"
                        activeLinkClassName="bg-true-blue text-dark-slate-gray shadow-lg rounded-full font-bold"
                    />
                </div>
            </div>
        </div>
    )
}