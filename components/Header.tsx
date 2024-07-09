"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

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
                    href={`https://wa.me/?text=Visita%20%2B60%20datos%20plateados%20${url}`}
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
                    href={`https://twitter.com/intent/tweet?url=${url}&text=Visita%20%2B60%20datos%20plateados`}
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
