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

export const markers: { name: string; coordinates: [number, number] }[] = [
  {
    name: "Amazonas",
    coordinates: [-71.52688135236684, -1.5619837100284732],
  },
  {
    name: "Antioquia",
    coordinates: [-75.59422208250659, 6.9181658417031215],
  },
  {
    name: "Arauca",
    coordinates: [-70.98666769031513, 6.536766245168388],
  },
  {
    name: "Atlántico",
    coordinates: [-74.98255942200892, 10.664474030084897],
  },
  {
    name: "Bogotá D.C",
    coordinates: [-74.29290344238281, 4.457674646464646],
  },
  {
    name: "Bolívar",
    coordinates: [-74.51794769258503, 8.72271406477656],
  },
  {
    name: "Boyacá",
    coordinates: [-73.12309754968136, 5.758415609309741],
  },
  {
    name: "Caldas",
    coordinates: [-75.33891924514617, 5.332109153570124],
  },
  {
    name: "Caquetá",
    coordinates: [-73.98620475154078, 0.7762563401008286],
  },
  {
    name: "Casanare",
    coordinates: [-71.62251094226623, 5.369187213028541],
  },
  {
    name: "Cauca",
    coordinates: [-76.87353629546035, 2.3950172161234686],
  },
  {
    name: "Cesar",
    coordinates: [-73.53800563119499, 9.530575489881361],
  },
  {
    name: "Chocó",
    coordinates: [-76.98429337488987, 5.990060652191978],
  },
  {
    name: "Córdoba",
    coordinates: [-75.80188107091003, 8.354605471799822],
  },
  {
    name: "Cundinamarca",
    coordinates: [-74.41934217975782, 4.999530946457225],
  },
  {
    name: "Guainía",
    coordinates: [-68.80032557734421, 2.6671431245582564],
  },
  {
    name: "Guaviare",
    coordinates: [-72.12671274829479, 1.897818902925042],
  },
  {
    name: "Huila",
    coordinates: [-75.63972007643827, 2.5393734443534206],
  },
  {
    name: "La Guajira",
    coordinates: [-72.48140004010905, 11.443766872172462],
  },
  {
    name: "Magdalena",
    coordinates: [-74.28208537970947, 10.230913233205518],
  },
  {
    name: "Meta",
    coordinates: [-72.96580060080639, 3.319477562478681],
  },
  {
    name: "Nariño",
    coordinates: [-77.88925317171609, 1.545834897631926],
  },
  {
    name: "Norte de Santander",
    coordinates: [-72.90964387205618, 8.0660924665411],
  },
  {
    name: "Putumayo",
    coordinates: [-75.8651505822382, 0.4386674967444442],
  },
  {
    name: "Quindío",
    coordinates: [-75.6901738331181, 4.478274969808687],
  },
  {
    name: "Risaralda",
    coordinates: [-75.92149868367699, 5.0681978624668],
  },
  {
    name: "San Andrés, Providencia y Santa Catalina",
    coordinates: [-81.5655034978336, 12.912325593485658],
  },
  {
    name: "Santander",
    coordinates: [-73.51492475554195, 6.676170121160267],
  },
  {
    name: "Sucre",
    coordinates: [-75.12355375490758, 9.063304454590225],
  },
  {
    name: "Tolima",
    coordinates: [-75.26605336443625, 4.044741882795275],
  },
  {
    name: "Valle del Cauca",
    coordinates: [-76.53392775438617, 3.865871962964363],
  },
  {
    name: "Vaupés",
    coordinates: [-70.57438704518668, 0.6103609405064552],
  },
  {
    name: "Vichada",
    coordinates: [-69.4325063469189, 4.670414208626879],
  },
];

export default function MapContainer() {
  const [tooltip, setTooltip] = useState("");

  return (
    <>
      <ReactTooltip
        className="capitalize"
        backgroundColor="#FFF"
        textColor="#1A1A1A"
      >
        {tooltip && (
          <>
            <h3>{tooltip.toLowerCase()}</h3>
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
                        stroke: "#FAFAFA",
                        strokeWidth: 1,
                        fill: "#77B769",
                        outline: "none",
                      },
                      hover: {
                        stroke: "#FAFAFA",
                        strokeWidth: 1,
                        fill: "#77B769",
                        outline: "none",
                      },
                      pressed: {
                        stroke: "#FAFAFA",
                        strokeWidth: 1,
                        fill: "#77B769",
                        outline: "none",
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
