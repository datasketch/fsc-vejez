"use client";

import MapContainer from "@/components/Map/MapContainer";
import { useState } from "react";
import MapDetails from "./MapDetails";
import WrapperChart from "../WrapperChart";

export default function Map() {
  const [selectedDepartment, setSelectedDepartment] = useState(-1);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-5/12 relative">
          <WrapperChart description="La escala de tonalidades de verde en el mapa representa el porcentaje de personas mayores que no utilizan internet. A mayor porcentaje, el verde es más oscuro y viceversa. Por su parte, el gráfico de barras que aparece haciendo clic en un departamento, compara el porcentaje de uso de los dispositivos que utilizan las personas mayores para el acceso a internet. Cuanto más larga es la barra sombreada, mayor es el porcentaje y viceversa.">
            <MapContainer setSelectedDepartment={setSelectedDepartment} />
          </WrapperChart>
        </div>
        <div className="mt-12 md:mt-0 lg:w-5/12">
          <MapDetails selectedDepartment={selectedDepartment} />
        </div>
      </div>
      <div className="mt-12 lg:mt-16">
        <a
          target="_blank"
          href="https://microdatos.dane.gov.co/index.php/catalog/793/get-microdata"
        >
          <p className="text-davys-gray">
            Encuesta Nacional de Calidad de Vida (ECV, 2022, DANE)
          </p>
        </a>
      </div>
    </>
  );
}
