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
          <WrapperChart description="El mapa muestra la frecuencia de utilización de internet a cargo de personas mayores en los departamentos de Colombia, de acuerdo con la Encuesta Nacional de Calidad de Vida 2022. El mapa usa una escala de colores para representar los rangos de frecuencia. Los departamentos en tonos más oscuros tienen más frecuencia de uso de internet, mientras que los departamentos en tonos más claros tienen una menor frecuencia.">
            <MapContainer setSelectedDepartment={setSelectedDepartment} />
          </WrapperChart>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-5/12">
          <MapDetails selectedDepartment={selectedDepartment} />
        </div>
      </div>
      <div className="mt-12 lg:mt-16">
        <p className="text-davys-gray">
          Encuesta Nacional de Calidad de Vida (ECV), 2022, DANE
        </p>
      </div>
    </>
  );
}
