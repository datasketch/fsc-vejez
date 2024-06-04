"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="pt-10">
      <div className="u-container">
        <nav className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
          <ul className="col-span-4 lg:col-start-5 justify-center gap-x-[22px] lg:col-end-9 flex lg:justify-between lg:gap-x-10">
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
                    pathname === "/servicios",
                }
              )}
            >
              <Link href="/servicios">Servicios</Link>
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
