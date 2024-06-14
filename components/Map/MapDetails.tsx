"use client";
import Image from "next/image";
import { Progress } from "@/components/Progress";
import data from "@/data/home.json";
import { useEffect, useState } from "react";

interface MapDetailsProps {
  selectedDepartment: number;
}

export default function MapDetails({ selectedDepartment }: MapDetailsProps) {
  const [devicesUsage, setDevicesUsage] = useState(null);

  function omit(key: string, obj: any) {
    const { [key]: omitted, ...rest } = obj;
    return rest;
  }

  useEffect(() => {
    if (selectedDepartment !== -1) {
      const findDepartment = data.mapa_tech.uso_dispositivos.find(
        (el) => el.cod_dpto === selectedDepartment
      );
      const formatDepartment = omit("cod_dpto", findDepartment);
      setDevicesUsage(formatDepartment);
    }
  }, [selectedDepartment]);

  return (
    <div className="flex flex-col md:flex-row gap-y-8 lg:gap-y-0 lg:flex-col gap-x-12">
      <div>
        <Image
          width={382}
          height={215}
          src="/images/home/legend.svg"
          alt="legend"
        />
      </div>
      <div className="hidden lg:block my-10">
        <Image
          width={1920}
          height={1}
          src="/images/home/dashed.svg"
          alt="dashed"
        />
      </div>
      <div>
        {devicesUsage ? (
          <div className="p-[30px] rounded-[10px] border border-eerie-black/40">
            <h3 className="font-semibold">
              ¿Cuáles dispositivos utilizan las personas de 60 años o más para
              acceder a internet?
            </h3>
            <div className="mt-6 space-y-4">
              {Object.entries(devicesUsage).map(([key, value]: any, i) => {
                return (
                  <div
                    key={`device-${i + 1}`}
                    className="grid grid-cols-12 items-center gap-x-[14px]"
                  >
                    <div className="col-span-7">
                      <p className="text-sm">{key}</p>
                    </div>
                    <div className="col-span-3">
                      <Progress value={value} />
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm">{value}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full h-[319px] grid place-items-center border border-eerie-black/40 rounded-[20px]">
            <div className="flex flex-col items-start justify-center gap-y-3.5 text-center">
              <Image
                className="mx-auto"
                width={33}
                height={33}
                src="/images/icons/cursor.svg"
                alt="cursor icon"
              />
              <p className="font-semibold">Selecciona un departamento</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
