"use client";

import MapContainer from "@/components/Map/MapContainer";
import { useState } from "react";
import MapDetails from "./MapDetails";

export default function Map() {
  const [selectedDepartment, setSelectedDepartment] = useState(-1);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-5/12">
          <div className="relative h-full">
            <MapContainer setSelectedDepartment={setSelectedDepartment} />
          </div>
        </div>
        <div className="lg:w-5/12">
          <MapDetails selectedDepartment={selectedDepartment} />
        </div>
      </div>
      <div className="mt-12 lg:mt-16">
        <p className="text-davys-gray">Fuente y fecha de actualización</p>
      </div>
    </>
  );
}
