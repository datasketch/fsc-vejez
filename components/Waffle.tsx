"use client";
import { Datum, ResponsiveWaffle } from "@nivo/waffle";
import { useWindowSize } from "@uidotdev/usehooks";

interface WaffleProps {
  data: Datum[];
}

export default function Waffle({ data }: WaffleProps) {
  const { width } = useWindowSize();
  return (
    <ResponsiveWaffle
      data={data}
      total={49}
      rows={14}
      columns={26}
      padding={5}
      valueFormat=".2f"
      colors={{ scheme: "nivo" }}
      borderRadius={3}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      motionStagger={2}
      legends={[
        {
          anchor: width >= 1024 ? 'right' : 'top',
          direction: width >= 1024 ? 'column' : 'row',
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          itemTextColor: "#505050",
          symbolSize: 13,
        },
      ]}
    />
  );
}
