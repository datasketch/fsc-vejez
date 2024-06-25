"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Disclaimer() {
  const [open, setIsOpen] = useState(false);

  return (
    <div
      className={clsx("fixed bottom-4 duration-500 z-50", {
        "left-[95%] md:left-[95%]": open,
        "left-[93%] md:left-[95%]": !open,
      })}
    >
      <Popover open={open} onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger>
          {open ? (
            <Image
              width={24}
              height={24}
              src="/images/icons/disclaimer-close.svg"
              alt="close disclaimer icon"
            />
          ) : (
            <Image
              width={60}
              height={60}
              src="/images/icons/disclaimer-information.svg"
              alt="information disclaimer icon"
            />
          )}
        </PopoverTrigger>
        <PopoverContent
          className="bg-seasalt p-5 pl-6 u-shadow-1 max-w-[400px] md:max-w-[695px] w-full rounded-[5px] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[6px] before:bg-dark-slate-gray before:rounded-tl-[5px] before:rounded-bl-[5px]"
          align="end"
          side="top"
          sideOffset={40}
        >
          <p className="leading-[20.8px]">
            Las bases de datos utilizadas fueron filtradas y procesadas con un
            diseño muestral, lo que redujo el tamaño de la muestra, incrementó
            la variabilidad entre grupos y amplió los intervalos de confianza.
            Sin embargo, la información disponible en la plataforma es adecuada
            para analizar tendencias generales de personas mayores en Colombia,
            acorde con su objetivo. Por esta razón, no se considera necesario
            aplicar métodos estadísticos para contrarrestar estos efectos,
            además de que se requerirían microdatos que no están disponibles en
            su totalidad.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
