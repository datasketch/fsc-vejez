"use client";
import Image from "next/image";
import { Progress } from "@/components/Progress";
import data from "@/data/home.json";
import { useEffect, useState } from "react";
import departmentsData from "@/data/departments.json";
import { numberFormat } from "@/util";

interface MapDetailsProps {
  selectedDepartment: number;
}

export default function MapDetails({ selectedDepartment }: MapDetailsProps) {
  const [devicesUsage, setDevicesUsage] = useState<any>(null);
  const [department, setDepartment] = useState<any>(null);
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
      const department = departmentsData.find(
        (el) => +el.code === +selectedDepartment
      )?.name;
      const devicesUsageFormat = Object.entries(formatDepartment)
        .reduce((prev: any, curr: any) => {
          return [...prev, { device: curr[0], percentaje: curr[1] }];
        }, [])
        .sort((a: any, b: any) => b.percentaje - a.percentaje);

      setDepartment(department);
      setDevicesUsage(devicesUsageFormat);
    }
  }, [selectedDepartment]);

  return (
    <div className="flex flex-col md:flex-row md:items-center lg:items-start lg:justify-start gap-y-8 lg:flex-col gap-x-12 justify-center h-full">
      <div className="md:w-1/2 lg:w-full">
        <h3 className="text-xl font-semibold text-center">
          Porcentaje de personas que no utilizan internet
        </h3>
        <div className="mt-6">
          <Image
            width={1000}
            height={215}
            src="/images/home/legend.svg"
            alt="legend"
          />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-full">
        {devicesUsage ? (
          <div className="p-[30px] rounded-[10px] border border-eerie-black/40">
            <h3 className="text-center text-xl font-semibold">{department}</h3>
            <h4 className="mt-4 font-semibold">
              ¿Cuáles dispositivos utilizan las personas de 60 años o más para
              acceder a internet?
            </h4>
            <div className="mt-6 space-y-4">
              {devicesUsage.map((item: any, i: number) => {
                return (
                  <div
                    key={`device-${i + 1}`}
                    className="grid grid-cols-12 items-center gap-x-[14px]"
                  >
                    <div className="col-span-7">
                      <p className="text-sm">{item.device}</p>
                    </div>
                    <div className="col-span-3">
                      <Progress value={item.percentaje} />
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm">
                        {numberFormat(item.percentaje)}%
                      </p>
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
