"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ServicesCard from "./ServicesCard";
import ReactPaginate from "react-paginate";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/FilterModal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import Link from "next/link";

interface ServicesClientProps {
  data: any;
}

export default function ServicesClient({ data }: ServicesClientProps) {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([] as any);
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(filterData.length / itemsPerPage);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const categoryOptions = Array.from(new Set(data.map((el: any) => el.type)));
  const countryOptions = Array.from(new Set(data.map((el: any) => el.country)));

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filterData.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let newData = data;

    if (category) {
      newData = newData.filter(
        (item: { type: string }) => item.type === category
      );
    }

    if (country) {
      newData = newData.filter(
        (item: { country: string }) => item.country === country
      );
    }

    if (search) {
      newData = newData.filter(
        (item: { title: string; description: string }) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setItemOffset(0);
    setCurrentPage(0);
    setFilterData(newData);
  }, [category, country, search]);

  return (
    <div ref={servicesRef} className="py-16">
      <div className="u-container">
        <div className="grid grid-cols-12 gap-x-2.5 xl:gap-x-5">
          <div className="col-span-12">
            <div className="flex items-center gap-x-2.5">
              <h2 className="text-2xl lg:text-[31px]">
                <span className="font-semibold">Todos los</span>{" "}
                <span className="italic text-dark-slate-gray">servicios</span>
              </h2>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <button className="grid place-items-center">
                      <Image
                        src="/images/icons/information.svg"
                        alt="information icon"
                        width={21}
                        height={21}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="text-center"
                    side="top"
                    sideOffset={10}
                  >
                    <p>
                      Estos servicios compartidos son tomados de la oferta
                      publicada por Socialab, BID Lab y Tsunami LATAM
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="lg:hidden mt-8 col-span-12">
            <Link
              className="inline-block py-2 px-5 rounded-[20px] bg-asparagus/40 text-dark-slate-gray font-semibold w-full text-center"
              href="/files/03_fsc_services.xlsx"
              download
              target="_blank"
            >
              Descargar base de datos
            </Link>
          </div>
          <div className="hidden lg:block lg:mt-12 col-span-12 lg:col-start-1 lg:col-end-3">
            <select
              name="category"
              aria-label="opciones categoria"
              value={category}
              className="py-2 px-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Categorías</option>
              {categoryOptions.map((category: any, i: number) => (
                <option key={`category-${i + 1}`} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden lg:block lg:mt-12 col-span-12 lg:col-start-3 lg:col-end-5">
            <select
              name="country"
              aria-label="opciones paises"
              value={country}
              className="py-2 px-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">País</option>
              {countryOptions.map((country: any, i: number) => (
                <option key={`country-${i + 1}`} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 lg:hidden col-span-4">
            <Dialog>
              <DialogTrigger>
                <p className="flex items-center gap-x-2.5 py-2 px-5 rounded-[20px] bg-seasalt border border-eerie-black/40">
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
                <div className="mt-8 flex flex-col justify-between h-full pb-10">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="category"
                        className="text-xl font-semibold"
                      >
                        Categoría
                      </label>
                      <select
                        name="category"
                        className="mt-2 py-2 px-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        <option value="">Categoría</option>
                        {categoryOptions.map((category: any, i: number) => (
                          <option key={`category-${i + 1}`} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="text-xl font-semibold"
                      >
                        País
                      </label>
                      <select
                        name="country"
                        className="mt-2 py-2 px-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
                        onChange={(e) => setCountry(e.target.value)}
                        value={category}
                      >
                        <option value="">País</option>
                        {countryOptions.map((country: any, i: number) => (
                          <option key={`country-${i + 1}`} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <DialogClose>
                        <button
                          onClick={() => {
                            setCategory("");
                            setCountry("");
                          }}
                          className="text-[13px] text-dark-slate-gray underline"
                        >
                          Reestablecer filtros
                        </button>
                      </DialogClose>
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
          <div className="mt-4 lg:mt-12 col-span-8 lg:col-start-5 lg:col-end-9">
            <div className="relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 pl-10 pr-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
                type="text"
                placeholder="Buscar por palabra clave"
                value={search}
              />
              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <Image
                  width={16}
                  height={16}
                  src="/images/icons/search.svg"
                  alt="search icon"
                />
              </div>
            </div>
          </div>
          <div className="mt-14 hidden lg:block col-span-2">
            <button
              onClick={() => {
                setCategory("");
                setCountry("");
                setSearch("")
              }}
              className="text-[13px] text-dark-slate-gray underline"
            >
              Reestablecer filtros
            </button>
          </div>
          <div className="hidden lg:block mt-4 lg:mt-12 lg:col-start-11 lg:col-end-13">
            <div className="flex justify-start lg:justify-end">
              <Link
                className="inline-block py-2 px-5 rounded-[20px] bg-asparagus/40 text-dark-slate-gray font-semibold"
                href="/files/03_fsc_services.xlsx"
                download
                target="_blank"
              >
                Descargar base de datos
              </Link>
            </div>
          </div>
          <div className="mt-4 lg:mt-12 col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 xl:gap-5">
              {filterData.length > 0 ? (
                filterData
                  .slice(itemOffset, endOffset)
                  .map((service: any, i: number) => {
                    return (
                      <ServicesCard key={`service-${i + 1}`} {...service} />
                    );
                  })
              ) : (
                <div>
                  <p>Sin resultados...</p>
                </div>
              )}
            </div>
            {filterData.length > 0 && (
              <div className="flex justify-center mt-8">
                <ReactPaginate
                  className="flex items-center gap-x-5"
                  breakLabel="..."
                  pageLinkClassName="size-10 grid place-items-center rounded-full text-dark-slate-gray font-semibold"
                  activeLinkClassName="bg-white u-shadow-1"
                  previousLabel={
                    <button className="hidden md:flex items-center text-dark-slate-gray gap-x-2.5 py-2 px-5 bg-white rounded-[20px] u-shadow-1">
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
                    <button className="hidden md:flex items-center text-dark-slate-gray gap-x-2.5 py-2 px-5 bg-white rounded-[20px] u-shadow-1">
                      <p>Siguiente</p>
                      <Image
                        width={5}
                        height={10}
                        src="/images/icons/arrow-right.svg"
                        alt="arrow right icon"
                      />
                    </button>
                  }
                  onPageChange={handlePageClick}
                  pageCount={pageCount}
                  renderOnZeroPageCount={null}
                  forcePage={currentPage}

                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
