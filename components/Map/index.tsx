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
          <WrapperChart description="El mapa muestra la frecuencia de utilización de internet en los departamentos de Colombia. Está codificado con diferentes tonalidades de verde para representar la frecuencia de uso de internet de mayor a menor. Las categorías se ordenan de la siguiente manera: uso diario de internet (tono de verde más oscuro), uso semanal pero no diario, uso mensual pero no semanal, uso anual pero no mensual, y no utiliza internet (tono de verde más claro).">
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
