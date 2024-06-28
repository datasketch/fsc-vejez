"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

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
        <nav className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
          <ul className="col-span-4 lg:col-start-3 lg:col-end-11 xl:col-start-4 justify-center gap-x-[22px] xl:col-end-10 flex lg:justify-between lg:gap-x-10">
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
        </nav>
      </div>
    </header>
  );
}
