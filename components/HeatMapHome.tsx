"use client";
import {
  DefaultHeatMapDatum,
  HeatMapSerie,
  ResponsiveHeatMap,
} from "@nivo/heatmap";

interface HeatMapHomeProps {
  data: HeatMapSerie<DefaultHeatMapDatum, Record<string, never>>[] | any;
}

export default function HeatMapHome({ data }: HeatMapHomeProps) {
  return (
    <ResponsiveHeatMap
      data={data}
      margin={{ top: 60, right: 0, bottom: 60, left: 350 }}
      valueFormat=">-.2s"
      axisTop={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 46,
        truncateTickAt: 0,
      }}
      colors={{
        type: "quantize",
        colors: ["#90EE90", "#77B769", "#679D5C", "#3F6C53", "#1D5556"],
        steps: 5
      }}
      emptyColor="#555555"
      borderColor="white"
      borderWidth={2}
      enableLabels={false}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          translateX: 0,
          translateY: 30,
          length: 500,
          thickness: 8,
          direction: "row",
          tickPosition: "after",
          tickSize: 3,
          tickSpacing: 3,
          tickOverlap: false,
          tickFormat: ">-.2s",
          title: "Cantidad de personas mayores →",
          titleAlign: "start",
          titleOffset: 4,
        },
      ]}
    />
  );
}
