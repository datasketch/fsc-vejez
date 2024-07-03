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
              colors: [
                "#89EB8D",
                "#83E88B",
                "#7DE589",
                "#77E286",
                "#71DF84",
                "#6BDC82",
                "#65D980",
                "#5FD67D",
                "#59D37B",
                "#53D078",
                "#4DCD76",
                "#47CA74",
                "#41C772",
                "#3BC470",
                "#35C16D",
                "#2FBE6B",
                "#29BB69",
                "#23B866",
                "#1DB564",
                "#1AB162",
                "#19AC61",
                "#18A660",
                "#17A05E",
                "#169A5D",
                "#15945C",
                "#148E5A",
                "#138859",
                "#128258",
                "#117C56",
                "#107655",
                "#0F7054",
                "#0E6A52",
                "#0D6451",
                "#0C5E50",
                "#0B584E",
                "#0A524D",
                "#094C4C",
                "#08464A",
                "#074049"
              ],
              steps: 40,
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
