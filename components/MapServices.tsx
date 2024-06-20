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

export const cities = [
  {
    rank: 1,
    country_code: 392,
    country: "Japan",
    city_code: 21671,
    city: "Tokyo",
    lat: 35.6895,
    lng: 139.6917,
    population: 37,
  },
  {
    rank: 2,
    country_code: 356,
    country: "India",
    city_code: 21228,
    city: "Delhi",
    lat: 28.6667,
    lng: 77.2167,
    population: 30,
  },
  {
    rank: 3,
    country_code: 156,
    country: "China",
    city_code: 20656,
    city: "Shanghai",
    lat: 31.2222,
    lng: 121.4581,
    population: 27,
  },
  {
    rank: 4,
    country_code: 76,
    country: "Brazil",
    city_code: 20287,
    city: "São Paulo",
    lat: -23.5475,
    lng: -46.6361,
    population: 22,
  },
  {
    rank: 5,
    country_code: 484,
    country: "Mexico",
    city_code: 21853,
    city: "Ciudad de México (Mexico City)",
    lat: 19.4273,
    lng: -99.1419,
    population: 22,
  },
  {
    rank: 6,
    country_code: 50,
    country: "Bangladesh",
    city_code: 20119,
    city: "Dhaka",
    lat: 23.7104,
    lng: 90.4074,
    population: 21,
  },
  {
    rank: 7,
    country_code: 818,
    country: "Egypt",
    city_code: 22812,
    city: "Al-Qahirah (Cairo)",
    lat: 30.0392,
    lng: 31.2394,
    population: 21,
  },
  {
    rank: 8,
    country_code: 156,
    country: "China",
    city_code: 20464,
    city: "Beijing",
    lat: 39.9075,
    lng: 116.3972,
    population: 20,
  },
  {
    rank: 9,
    country_code: 356,
    country: "India",
    city_code: 21206,
    city: "Mumbai (Bombay)",
    lat: 19.074,
    lng: 72.8808,
    population: 20,
  },
  {
    rank: 10,
    country_code: 392,
    country: "Japan",
    city_code: 206459,
    city: "Kinki M.M.A. (Osaka)",
    lat: 34.6758,
    lng: 135.5538,
    population: 19,
  },
  {
    rank: 11,
    country_code: 840,
    country: "United States of America",
    city_code: 23083,
    city: "New York-Newark",
    lat: 40.717,
    lng: -74.0037,
    population: 19,
  },
  {
    rank: 12,
    country_code: 586,
    country: "Pakistan",
    city_code: 22044,
    city: "Karachi",
    lat: 24.9056,
    lng: 67.0822,
    population: 16,
  },
  {
    rank: 13,
    country_code: 156,
    country: "China",
    city_code: 20484,
    city: "Chongqing",
    lat: 29.5628,
    lng: 106.5528,
    population: 16,
  },
  {
    rank: 14,
    country_code: 792,
    country: "Turkey",
    city_code: 22691,
    city: "Istanbul",
    lat: 41.0138,
    lng: 28.9497,
    population: 15,
  },
  {
    rank: 15,
    country_code: 32,
    country: "Argentina",
    city_code: 20058,
    city: "Buenos Aires",
    lat: -34.6051,
    lng: -58.4004,
    population: 15,
  },
  {
    rank: 16,
    country_code: 356,
    country: "India",
    city_code: 21211,
    city: "Kolkata (Calcutta)",
    lat: 22.5335,
    lng: 88.356,
    population: 15,
  },
  {
    rank: 17,
    country_code: 566,
    country: "Nigeria",
    city_code: 22007,
    city: "Lagos",
    lat: 6.4531,
    lng: 3.3958,
    population: 14,
  },
  {
    rank: 18,
    country_code: 180,
    country: "Democratic Republic of the Congo",
    city_code: 20853,
    city: "Kinshasa",
    lat: -4.3276,
    lng: 15.3136,
    population: 14,
  },
  {
    rank: 19,
    country_code: 608,
    country: "Philippines",
    city_code: 22109,
    city: "Manila",
    lat: 14.6042,
    lng: 120.9822,
    population: 14,
  },
  {
    rank: 20,
    country_code: 156,
    country: "China",
    city_code: 20689,
    city: "Tianjin",
    lat: 39.1088,
    lng: 117.1886,
    population: 14,
  },
  {
    rank: 21,
    country_code: 76,
    country: "Brazil",
    city_code: 20272,
    city: "Rio de Janeiro",
    lat: -22.9028,
    lng: -43.2075,
    population: 13,
  },
  {
    rank: 22,
    country_code: 156,
    country: "China",
    city_code: 20517,
    city: "Guangzhou, Guangdong",
    lat: 23.1255,
    lng: 113.2574,
    population: 13,
  },
  {
    rank: 23,
    country_code: 586,
    country: "Pakistan",
    city_code: 22046,
    city: "Lahore",
    lat: 31.5497,
    lng: 74.3436,
    population: 13,
  },
  {
    rank: 24,
    country_code: 643,
    country: "Russian Federation",
    city_code: 22299,
    city: "Moskva (Moscow)",
    lat: 55.755,
    lng: 37.6218,
    population: 13,
  },
  {
    rank: 25,
    country_code: 840,
    country: "United States of America",
    city_code: 23052,
    city: "Los Angeles-Long Beach-Santa Ana",
    lat: 34.0317,
    lng: -118.2417,
    population: 12,
  },
  {
    rank: 26,
    country_code: 156,
    country: "China",
    city_code: 20667,
    city: "Shenzhen",
    lat: 22.5415,
    lng: 114.0634,
    population: 12,
  },
  {
    rank: 27,
    country_code: 356,
    country: "India",
    city_code: 21176,
    city: "Bangalore",
    lat: 12.9719,
    lng: 77.5937,
    population: 12,
  },
  {
    rank: 28,
    country_code: 250,
    country: "France",
    city_code: 20985,
    city: "Paris",
    lat: 48.8534,
    lng: 2.3488,
    population: 11,
  },
  {
    rank: 29,
    country_code: 170,
    country: "Colombia",
    city_code: 20837,
    city: "Bogotá",
    lat: 4.6097,
    lng: -74.0818,
    population: 11,
  },
  {
    rank: 30,
    country_code: 356,
    country: "India",
    city_code: 21321,
    city: "Chennai (Madras)",
    lat: 13.0531,
    lng: 80.2488,
    population: 11,
  },
];

export default function MapServices() {
  const [data, setData] = useState([] as any);
  const [maxValue, setMaxValue] = useState(0);

  const popScale = useMemo(
    () => scaleLinear().domain([0, maxValue]).range([0, 30]),
    [maxValue]
  );

  useEffect(() => {
    const sortedCities = sortBy(cities, (o) => -o.population);
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
                r={popScale(population)}
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
