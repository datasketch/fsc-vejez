"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const msg = {
  '/': 'Descubre%20%2B60%20Datos%20Plateados%2C%20la%20plataforma%20de%20informaci%C3%B3n%20sobre%20personas%20mayores%20para%20fortalecer%20el%20ecosistema%20de%20%23Econom%C3%ADaPlateada%20%C2%A1Explora%20y%20contribuye%20a%20la%20calidad%20de%20vida%20para%20la%20vejez%21',
  '/cifras-relevantes': 'Encuentra%20datos%20clave%20sobre%20tecnolog%C3%ADa%2C%20finanzas%2C%20salud%2C%20educaci%C3%B3n%20y%20movilidad%20para%20personas%20mayores%20en%20Colombia.%20%2B60%20Datos%20Plateados%20es%20el%20punto%20de%20inicio%20para%20mejorar%20su%20calidad%20de%20vida.%20%F0%9F%93%8A%F0%9F%87%A8%F0%9F%87%B4%20%23Econom%C3%ADaPlateada',
  '/percepciones': 'Conoce%20las%20percepciones%20sobre%20envejecimiento%20en%20Colombia%20en%20%2B60%20Datos%20Plateados%20y%20transforma%20los%20imaginarios%20sobre%20la%20vejez.%20%F0%9F%91%B5%F0%9F%A7%93%20%23Percepciones%20%23Envejecimiento',
  '/repositorio-de-servicios': 'Conoce%20%2B60%20Datos%20Plateados%20y%20explora%20servicios%20digitales%20para%20personas%20mayores%20en%20Colombia%20y%20el%20mundo.%20Descubre%20los%20avances%20y%20las%20oportunidades%20en%20el%20ecosistema%20de%20%23Econom%C3%ADaPlateada.%20%F0%9F%8C%90%F0%9F%93%B1',
  '/recursos': 'Accede%20a%20una%20biblioteca%20con%20reportes%2C%20datos%20y%20pol%C3%ADticas%20p%C3%BAblicas%20para%20contribuir%20a%20la%20investigaci%C3%B3n%20y%20creaci%C3%B3n%20de%20servicios%20para%20personas%20mayores%20en%20Colombia.%20Visita%20%2B60%20Datos%20Plateados%F0%9F%93%9A%F0%9F%93%8A%20%23Econom%C3%ADaPlateada'
}

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navRef.current?.classList.remove("pt-10");
        navRef.current?.classList.add("bg-seasalt", "py-5", "u-shadow-1");
      } else {
        navRef.current?.classList.add("pt-10");
        navRef.current?.classList.remove("bg-seasalt", "py-5", "u-shadow-1");
      }
    };
    setUrl(window.location.href as any);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="pt-10 sticky top-0 left-0 w-full z-50 duration-300"
    >
      <div className="u-container">
        <nav className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5 relative items-center">
          <div className="lg:hidden">
            <Popover>
              <PopoverButton className="data-[hover]:font-semibold data-[open]:font-semibold h-full text-dark-slate-gray p-3">
                Compartir
              </PopoverButton >
              <PopoverPanel
                anchor="bottom"
                className="flex sticky w-full origin-top-right bg-seasalt py-7 mt-5 mx-auto transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="flex mx-auto max-w-screen-md justify-between gap-10">
                  <a
                    className="flex items-center gap-x-2"
                    //@ts-ignore
                    href={`https://wa.me/?text=${msg[pathname]}%20${url}`}
                    target="_blank"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/images/icons/whatsapp.svg"
                      alt="whatsapp icon"
                    />
                  </a>
                  <a
                    className="flex items-center gap-x-2"
                    href={`https://www.facebook.com/sharer.php?u=${url}`}
                    target="_blank"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/images/icons/facebook.svg"
                      alt="facebook icon"
                    />
                  </a>
                  <a
                    className="flex items-center gap-x-2"
                    //@ts-ignore
                    href={`https://twitter.com/intent/tweet?url=${url}&text=${msg[pathname]}`}
                    target="_blank"
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/images/icons/x.svg"
                      alt="twitter icon"
                    />
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
          <div className="col-span-2 mx-auto">
            <Link
              href="/"
            >
              <Image width={150} height={80} src="/images/logo60.svg" alt="logo" />
            </Link>
          </div>
          <ul className="hidden lg:flex lg:col-start-5 lg:col-end-13 justify-center gap-x-[22px] lg:justify-between lg:gap-x-10">
            <li>
              <Link
                className={clsx(
                  "border-b pb-0.5 border-b-transparent lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300",
                  {
                    "!border-b-asparagus text-dark-slate-gray":
                      pathname === "/",
                  }
                )}
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li
              className={clsx(
                "border-b pb-0.5 border-b-transparent lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300",
                {
                  "!border-b-asparagus text-dark-slate-gray":
                    pathname === "/cifras-relevantes",
                }
              )}
            >
              <Link href="/cifras-relevantes">Cifras relevantes</Link>
            </li>
            <li
              className={clsx(
                "border-b pb-0.5 border-b-transparent lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300",
                {
                  "!border-b-asparagus text-dark-slate-gray":
                    pathname === "/percepciones",
                }
              )}
            >
              <Link href="/percepciones">Percepciones</Link>
            </li>
            <li
              className={clsx(
                "border-b pb-0.5 border-b-transparent lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300",
                {
                  "!border-b-asparagus text-dark-slate-gray":
                    pathname === "/repositorio-de-servicios",
                }
              )}
            >
              <Link href="/repositorio-de-servicios">
                Repositorio de servicios
              </Link>
            </li>
            <li
              className={clsx(
                "border-b pb-0.5 border-b-transparent lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300",
                {
                  "!border-b-asparagus text-dark-slate-gray":
                    pathname === "/recursos",
                }
              )}
            >
              <Link href="/recursos">Recursos</Link>
            </li>
          </ul>
          <div className="lg:hidden text-end">
            <Popover>
              <PopoverButton className="data-[hover]:font-semibold data-[open]:font-semibold h-full text-dark-slate-gray p-3 ">
                Menú
              </PopoverButton >
              <PopoverPanel
                anchor="bottom"
                className="flex sticky w-full origin-top-right bg-seasalt mt-5 mx-auto transition duration-400 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                {({ close }) => (
                  <div className="mx-auto justify-between gap-10 w-full text-center text-xl bg-seasalt">
                    <div className={clsx(
                      "lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300 py-5",
                      {
                        "!bg-asparagus/40 text-dark-slate-gray":
                          pathname === "/",
                      }
                    )}>
                      <Link
                        href="/"
                        onClick={() => close()}
                      >
                        Inicio
                      </Link>
                    </div>
                    <div
                      className={clsx(
                        "lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300 py-5",
                        {
                          "!bg-asparagus/40 text-dark-slate-gray":
                            pathname === "/cifras-relevantes",
                        }
                      )}
                    >
                      <Link href="/cifras-relevantes" onClick={() => close()}>Cifras relevantes</Link>
                    </div>
                    <div
                      className={clsx(
                        "lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300 py-5",
                        {
                          "!bg-asparagus/40 text-dark-slate-gray":
                            pathname === "/percepciones",
                        }
                      )}
                    >
                      <Link href="/percepciones" onClick={() => close()}>Percepciones</Link>
                    </div>
                    <div
                      className={clsx(
                        "lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300 py-5",
                        {
                          "!bg-asparagus/40 text-dark-slate-gray":
                            pathname === "/repositorio-de-servicios",
                        }
                      )}
                    >
                      <Link href="/repositorio-de-servicios" onClick={() => close()}>
                        Repositorio de servicios
                      </Link>
                    </div>
                    <div
                      className={clsx(
                        "lg:hover:border-b-asparagus/40 lg:hover:text-dark-slate-gray lg:duration-300 py-5",
                        {
                          "!bg-asparagus/40 text-dark-slate-gray":
                            pathname === "/recursos",
                        }
                      )}
                    >
                      <Link href="/recursos" onClick={() => close()}>Recursos</Link>
                    </div>
                  </div>
                )}
              </PopoverPanel>
            </Popover>
          </div>
        </nav>
      </div>
    </header>
  );
}
