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
    <div className="w-full overflow-x-auto">
      <div className="w-[1200px] xl:w-full mx-auto lg:mx-0">
        <div className="h-[424px]">
          <ResponsiveHeatMap
            data={data}
            margin={{ top: 40, right: 0, bottom: 80, left: 450 }}
            valueFormat={(valueFormat) =>
              new Intl.NumberFormat("es-CO").format(valueFormat)
            }
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
              colors: ["#90EE90", "#83DD8A", "#76CC83", "#6ABB7D", "#5DAA76", "#509970", "#438869", "#377763", "#2A665C", "#1D5556"],
              steps: 10,
            }}
            emptyColor="#555555"
            borderColor="white"
            borderWidth={2}
            enableLabels={false}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            theme={{
              text: {
                fontSize: 14,
              },
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
        </div>
      </div>
    </div>
  );
}
