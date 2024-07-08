"use client";
import Image from "next/image";
import { Progress } from "@/components/Progress";
import data from "@/data/home.json";
import { useEffect, useState } from "react";
import departmentsData from "@/data/departments.json";
import { numberFormat } from "@/util";
import SimpleTreeMap from "./SimpleTreeMap";


export default function TechTreeMap() {
    const [selectedDepartment, setSelectedDepartment] = useState<number | string>('5');
    const [devicesUsage, setDevicesUsage] = useState<any>(null);
    const [internetUsage, setInternetUsage] = useState<any>(null);
    const [department, setDepartment] = useState<any>(null);
    function omit(key: string, obj: any) {
        const { [key]: omitted, ...rest } = obj;
        return rest;
    }

    useEffect(() => {
        if (selectedDepartment !== '') {
            const findDepartment = data.mapa_tech.uso_dispositivos.find(
                //@ts-ignore
                (el) => el.cod_dpto === parseInt(selectedDepartment)
            );
            const formatDepartment = omit("cod_dpto", findDepartment);
            const department = departmentsData.find(
                //@ts-ignore
                (el) => +el.code === parseInt(selectedDepartment)
            )?.name;
            const devicesUsageFormat = Object.entries(formatDepartment)
                .reduce((prev: any, curr: any) => {
                    return [...prev, { device: curr[0], percentaje: curr[1] }];
                }, [])
                .sort((a: any, b: any) => b.percentaje - a.percentaje);

            const findDepartment2 =  omit("cod_dpto", data.mapa_tech.frecuencia_internet.find(
                //@ts-ignore
                (el) => el.cod_dpto === parseInt(selectedDepartment)
            ))

            const keys = Object.keys(findDepartment2)

            const treeMapData = keys.map(item => {
                return {
                    name: item,
                    loc: findDepartment2[item]
                }
            })

            setInternetUsage({
                name: "root",
                children: treeMapData
            })
            setDepartment(department);
            setDevicesUsage(devicesUsageFormat);
        } else {
            setDevicesUsage(null);
            setInternetUsage(null)
        }
    }, [selectedDepartment]);

    return (
        <div className="flex flex-col md:flex-row md:items-center lg:items-start lg:justify-start gap-y-8 lg:flex-col gap-x-12 justify-center h-full">

            <div>
                <h2 className="mb-3 text-xl font-semibold">Departamento</h2>
                <select
                    className="h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12"
                    name=""
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                    <option value="">Selecciona una opción</option>
                    {departmentsData.map((option: any, i: number) => {
                        return (
                            // @ts-ignore
                            <option key={i} value={parseInt(option.code)}>
                                {option.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="grid lg:grid-cols-2 w-full">
                <div>
                    {internetUsage && (
                        <SimpleTreeMap data={internetUsage} />
                    )}
                </div>
                <div className="md:w-1/2 lg:w-full">
                    {devicesUsage ? (
                        <div className="p-[30px] rounded-[10px] border border-eerie-black/40">
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
        </div>
    )
}