"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldData from "@/data/world.json";
import { scaleLinear, scaleSqrt } from "d3-scale";
import { useMemo } from "react";


export default function MapServices({ dataMap: data }: any) {
  const maxValue = Math.max(...data.map((item: { population: number }) => item.population))

  const popScale = useMemo(
    () => scaleSqrt().domain([0, maxValue]).range([3, 20]),
    [maxValue]
  );

  return (
    <ComposableMap height={450}>
      <Geographies geography={worldData} >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  outline: "none",
                  stroke: "#41A5B4",
                  strokeWidth: 1,
                  fill: "#41A5B4",
                },
                hover: {
                  outline: "none",
                  stroke: "#41A5B4",
                  strokeWidth: 1,
                  fill: "#41A5B4",
                },
                pressed: {
                  outline: "none",
                  stroke: "#41A5B4",
                  strokeWidth: 1,
                  fill: "#41A5B4",
                },
              }}
            />
          ))
        }
      </Geographies>
      {data.map(({ city_code, lng, lat, population }: any) => {
        return (
          <Marker key={city_code} coordinates={[lng, lat]}>
            <circle
              style={{ fill: "#1D5556", fillOpacity: "0.8" }}
              r={popScale(population)}
            />
            <text
              style={{ fill: "#FAFAFA", fontSize: "8px" }}
              textAnchor="middle"
              dy=".325em"
            >
              {population}
            </text>
          </Marker>
        );
      })}
    </ComposableMap>
  );
}
