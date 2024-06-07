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
import { useState } from "react";
import markers from "@/data/markers.json";

export default function MapContainer() {
  const [tooltip, setTooltip] = useState("");
  const baseStyles = { outline: "none", strokeWidth: 1 };

  return (
    <>
      <ReactTooltip backgroundColor="#FFF" textColor="#1A1A1A">
        {tooltip && (
          <>
            <h3 className="capitalize">{tooltip}</h3>
            <p className="text-xl font-semibold">4,1% - 12,68%</p>
          </>
        )}
      </ReactTooltip>
      <div data-tip="">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [-74.2973, 4.5709],
            scale: 2000,
            rotate: [-1.5, 1.5, 0],
          }}
          width={511}
          height={651.75}
        >
          <ZoomableGroup center={[0, 0]} maxZoom={0}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setTooltip(geo.properties.DPTO_NOMBRE)}
                    onMouseLeave={() => setTooltip("")}
                    style={{
                      default: {
                        ...baseStyles,
                        stroke: "#FAFAFA",
                        fill: "#77B769",
                      },
                      hover: {
                        ...baseStyles,
                        stroke: "#FAFAFA",
                        fill: "#77B769",
                      },
                      pressed: {
                        ...baseStyles,
                        stroke: "#FAFAFA",
                        fill: "#77B769",
                      },
                    }}
                  />
                ))
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
