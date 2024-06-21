"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldData from "@/data/world.json";
import { scaleLinear } from "d3-scale";
import { useEffect, useMemo, useState } from "react";
import sortBy from "lodash.sortby";


export default function MapServices({ dataMap }: any) {
  const [data, setData] = useState([] as any);
  const [maxValue, setMaxValue] = useState(0);

  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 30]),
    [maxValue]
  );

  useEffect(() => {
    const sortedCities = sortBy(dataMap, (o) => -o.population);
    setMaxValue(sortedCities[0].population);
    setData(sortedCities);
  }, []);

  return (
    <div>
      <ComposableMap>
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
                r={popScale(population + 3)}
              />
              <text
                style={{ fill: "#FAFAFA", fontSize: "12px" }}
                textAnchor="middle"
                dy=".3em"
              >
                {population}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
