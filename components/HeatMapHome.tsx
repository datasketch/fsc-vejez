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
      margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
      valueFormat=">-.2s"
      axisTop={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 46,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: -72,
        truncateTickAt: 0,
      }}
      colors={{
        type: "diverging",
        scheme: "red_yellow_blue",
        divergeAt: 0.5,
        minValue: -100000,
        maxValue: 100000,
      }}
      emptyColor="#555555"
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.8]],
      }}
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
          title: "Value →",
          titleAlign: "start",
          titleOffset: 4,
        },
      ]}
    />
  );
}
