"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import geoUrl from "@/data/colombia.json";
import { Dispatch, SetStateAction, useState } from "react";
import markers from "@/data/markers.json";
import data from "@/data/home.json";
import departments from "@/data/departments.json";
import { scaleQuantile } from "d3-scale";

interface MapContainerProps {
  setSelectedDepartment: Dispatch<SetStateAction<number>>;
}

interface TooltipProps {
  cod_dpto: number;
  "Al menos una vez a la semana, pero no cada día": number;
  "Al menos una vez al año, pero no cada mes": number;
  "Al menos una vez al mes, pero no cada semana": number;
  "No utiliza internet": number;
  "Todos los días de la semana": number;
}

export default function MapContainer({
  setSelectedDepartment,
}: MapContainerProps) {
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const baseStyles = { outline: "none", strokeWidth: 1 };

  function getDepartment(cod: number) {
    // @ts-ignore
    return departments.find((el) => +el.code === +cod).name;
  }

  function omit(key: string, obj: any) {
    const { [key]: omitted, ...rest } = obj;
    return rest;
  }

  return (
    <>
      <ReactTooltip backgroundColor="#FFF" textColor="#1A1A1A">
        {tooltip && (
          <>
            <h3 className="capitalize text-xl">
              {getDepartment(tooltip.cod_dpto)}
            </h3>
            <p className="text-sm">
              No utiliza internet:{" "}
              <span className="font-semibold">
                {tooltip["No utiliza internet"]}%
              </span>
            </p>
            <p className="text-sm">
              Al menos una vez al año, pero no cada mes:{" "}
              <span className="font-semibold">
                {tooltip["Al menos una vez al año, pero no cada mes"]}%
              </span>
            </p>
            <p className="text-sm">
              Al menos una vez al mes, pero no cada semana:{" "}
              <span className="font-semibold">
                {tooltip["Al menos una vez al mes, pero no cada semana"]}%
              </span>
            </p>
            <p className="text-sm">
              Al menos una vez a la semana, pero no cada día:{" "}
              <span className="font-semibold">
                {tooltip["Al menos una vez a la semana, pero no cada día"]}%
              </span>
            </p>
            <p className="text-sm">
              Todos los días de la semana:{" "}
              <span className="font-semibold">
                {tooltip["Todos los días de la semana"]}%
              </span>
            </p>
          </>
        )}
      </ReactTooltip>
      <div data-tip="">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-74.2973, 4.5709],
            scale: 2000,
          }}
          width={511}
          height={651.75}
        >
          <ZoomableGroup center={[0, 0]} maxZoom={0}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const findDepartment =
                    data.mapa_tech.frecuencia_internet.find(
                      (el) => el.cod_dpto === +geo.properties.DPTO
                    );

                  const object = omit("cod_dpto", findDepartment);
                  const values = Object.values(object).map((el: any) => el);
                  const maxValue = Math.max(...values);
                  const colorScale = scaleQuantile()
                    .domain([0, 100])
                    .range([
                      "#215957",
                      "#3B7C65",
                      "#56A273",
                      "#72C581",
                      "#8CE98E",
                    ] as string[] | any);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        setTooltip(findDepartment || null);
                      }}
                      onMouseLeave={() => setTooltip(null)}
                      onClick={() =>
                        setSelectedDepartment(+geo.properties.DPTO)
                      }
                      style={{
                        default: {
                          ...baseStyles,
                          stroke: "#FAFAFA",
                          fill: findDepartment
                            ? colorScale(maxValue) + ""
                            : "#77B769",
                        },
                        hover: {
                          ...baseStyles,
                          stroke: "#FAFAFA",
                          fill: findDepartment
                            ? colorScale(maxValue) + ""
                            : "#77B769",
                        },
                        pressed: {
                          ...baseStyles,
                          stroke: "#FAFAFA",
                          fill: findDepartment
                            ? colorScale(maxValue) + ""
                            : "#77B769",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {markers.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates as any}>
                <text fontSize={10} fontWeight={700} x={-20}>
                  {name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
}
