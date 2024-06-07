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

/* const servicesData = [
  {
    type: "Salud y bienestar",
    country: "Colombia",
    title: "Vital-e",
    description:
      "Es de Sura.Transfoma la atención en salud integrando la comodidad de una consulta virtual y la calidad de una presencial, facilitando a los médicos la realización de diagnósticos precisos desde cualquier lugar, por medio de dispositivos IoT logrando una experiencia diferencial.",
    externalLink: "",
  },
  {
    type: "Educación",
    country: "EEUU",
    title: "Aging 2.0",
    description:
      "Red mundial de innovadores que utilizan la tecnología y el diseño para mejorar la vida de las personas mayores de todo el mundo.",
    externalLink: "",
  },
  {
    type: "Ingresos y finanzas",
    country: "Perú",
    title: "BBVA",
    description:
      "Prestan servicios de cuenta de ahorros para mayores de 65 años, con tazas de rendimiento preferenciales, procesos virtuales.",
    externalLink: "",
  },
  {
    type: "Ingresos y finanzas",
    country: "Uruguay",
    title: "NudaProp",
    description:
      "Servicios para que las personas mayores propietarias obtengan dinero de su inmueble sin mudarse.El propósito es contribuir a la mejora de la calidad de vida, posibilitando la venta del título de propiedad, así la persona mayor obtiene ingresos a la vez que conserva el derecho de seguir en su casa de por vida (plazo vitalicio) o hasta un plazo pactado.",
    externalLink: "",
  },
  {
    type: "Tecnología y digitalización",
    country: "España",
    title: "65ymas",
    description:
      "Diario digital para personas Mayores. Dice ser apolítico, informativo, divulgativo y entretenido. Cuenta con el asesoramiento permanente de personas mayores en sus contenidos a través de sus asociaciones más representativas. La empresa detrás se llama Agkam Strategies, SL.",
    externalLink: "",
  },
  {
    type: "Salud y bienestar",
    country: "España",
    title: "Sensalus",
    description: "lorem ipsum",
    externalLink: "https://example.com/",
  },
  {
    type: "Educación",
    country: "Brasil",
    title: "Veduca",
    description:
      "Red mundial de innovadores que utilizan la tecnología y el diseño para mejorar la vida de las personas mayores de todo el mundo.",
    externalLink: "",
  },
]; */

interface ServicesClientProps {
  data: any
}

export default function ServicesClient({ data }: ServicesClientProps) {
  const [filterBy, setFilterBy] = useState("");
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([] as any);
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(filterData.length / itemsPerPage);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filterData.length;
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let newData = data;

    // if(filterBy) {

    // }

    if (search) {
      newData = newData.filter(
        (item: { title: string; description: string; }) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setItemOffset(0);
    setCurrentPage(0);
    setFilterData(newData);
  }, [filterBy, search]);

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
              <button>
                <Image
                  src="/images/icons/information.svg"
                  alt="information icon"
                  width={21}
                  height={21}
                />
              </button>
            </div>
          </div>
          <div className="lg:hidden mt-8 col-span-12">
            <button className="py-2 px-5 rounded-[20px] bg-asparagus/40 text-dark-slate-gray font-semibold w-full">
              Descargar base de datos
            </button>
          </div>
          <div className="hidden lg:block lg:mt-12 col-span-12 lg:col-start-1 lg:col-end-3">
            <select
              name="filterBy"
              className="py-2 px-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
            >
              <option value="">Filtros</option>
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
                  <div>
                    <label htmlFor="order-by" className="text-xl font-semibold">
                      Ordenar por
                    </label>
                    <select
                      name="orderBy"
                      id="order-by"
                      className="mt-2 py-2 px-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
                    >
                      <option value="">Filtros</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <DialogClose>
                        <button className="text-[13px] text-dark-slate-gray underline">
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
          <div className="mt-4 lg:mt-12 col-span-8 lg:col-start-3 lg:col-end-7">
            <div className="relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 pl-10 pr-5 rounded-[20px] w-full bg-seasalt border border-eerie-black/40"
                type="text"
                placeholder="Buscar por palabra clave"
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
          <div className="hidden lg:block mt-4 lg:mt-12 lg:col-start-10 lg:col-end-13">
            <div className="flex justify-start lg:justify-end">
              <button className="py-2 px-5 rounded-[20px] bg-asparagus/40 text-dark-slate-gray font-semibold">
                Descargar base de datos
              </button>
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
                    <button className="flex items-center text-dark-slate-gray gap-x-2.5 py-2 px-5 bg-white rounded-[20px] u-shadow-1">
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
                    <button className="flex items-center text-dark-slate-gray gap-x-2.5 py-2 px-5 bg-white rounded-[20px] u-shadow-1">
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
