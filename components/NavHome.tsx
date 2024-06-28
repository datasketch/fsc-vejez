"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function NavHome() {
  const navRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const exploreDataEl = document.getElementById("explore-data");
    const navHomeObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          navRef.current?.classList.remove("!-bottom-full");
          navRef.current?.classList.add("!bottom-5");
        } else {
          navRef.current?.classList.add("!-bottom-full");
          navRef.current?.classList.remove("!bottom-5");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    navHomeObserver.observe(exploreDataEl as any);
  }, []);

  return (
    <div
      ref={navRef}
      className="hidden md:block fixed -bottom-full left-1/2 -translate-x-1/2 u-container w-full bg-seasalt u-shadow-1 p-4 rounded-[5px] duration-500 z-50"
    >
      <div className="flex items-center justify-between text-sm lg:text-base">
        <button
          className={clsx({
            "text-dark-slate-gray font-semibold":
              selected === "Tecnología y digitalización",
            "text-vampire-gray": selected !== "Tecnología y digitalización",
          })}
          onClick={() => {
            document
              .getElementById("tecnologia-digitalizacion")
              ?.scrollIntoView({ behavior: "smooth" });
            setSelected("Tecnología y digitalización");
          }}
        >
          Tecnología y digitalización
        </button>
        <button
          className={clsx({
            "text-dark-slate-gray font-semibold":
              selected === "Ingresos y finanzas",
            "text-vampire-gray": selected !== "Ingresos y finanzas",
          })}
          onClick={() => {
            document
              .getElementById("ingresos-finanzas")
              ?.scrollIntoView({ behavior: "smooth" });
            setSelected("Ingresos y finanzas");
          }}
        >
          Ingresos y finanzas
        </button>
        <button
          className={clsx({
            "text-dark-slate-gray font-semibold":
              selected === "Salud y bienestar",
            "text-vampire-gray": selected !== "Salud y bienestar",
          })}
          onClick={() => {
            document
              .getElementById("salud-bienestar")
              ?.scrollIntoView({ behavior: "smooth" });
            setSelected("Salud y bienestar");
          }}
        >
          Salud y bienestar
        </button>
        <button
          className={clsx({
            "text-dark-slate-gray font-semibold": selected === "Educación",
            "text-vampire-gray": selected !== "Educación",
          })}
          onClick={() => {
            document
              .getElementById("educacion")
              ?.scrollIntoView({ behavior: "smooth" });
            setSelected("Educación");
          }}
        >
          Educación
        </button>
        <button
          className={clsx({
            "text-dark-slate-gray font-semibold":
              selected === "Movilidad y transporte",
            "text-vampire-gray": selected !== "Movilidad y transporte",
          })}
          onClick={() => {
            document
              .getElementById("movilidad-transporte")
              ?.scrollIntoView({ behavior: "smooth" });
            setSelected("Movilidad y transporte");
          }}
        >
          Movilidad y transporte
        </button>
      </div>
    </div>
  );
}
