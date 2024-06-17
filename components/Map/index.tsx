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
          <WrapperChart description="La escala de tonalidades de verde en el mapa representa la frecuencia de uso de internet. A mayor frecuencia, el verde es más oscuro y viceversa. Las categorías se ordenan de la siguiente manera: uso diario de internet (tono de verde más oscuro), uso semanal pero no diario, uso mensual pero no semanal, uso anual pero no mensual, y no utiliza internet (tono de verde más claro).">
            <MapContainer setSelectedDepartment={setSelectedDepartment} />
          </WrapperChart>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-5/12">
          <MapDetails selectedDepartment={selectedDepartment} />
        </div>
      </div>
      <div className="mt-12 lg:mt-16">
        <a href="https://microdatos.dane.gov.co/index.php/catalog/793/get-microdata">
          <p className="text-davys-gray">
            Encuesta de Nacional de Calidad de Vida (ECV), 2022, DANE
          </p>
        </a>
      </div>
    </>
  );
}
