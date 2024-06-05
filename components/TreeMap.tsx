"use client";
import { ResponsiveTreeMap } from "@nivo/treemap";

interface TreeMapProps {
  data: any;
}

export default function TreeMap({ data }: TreeMapProps) {
  return (
    <ResponsiveTreeMap
      data={data}
      identity="name"
      value="loc"
      valueFormat=".02s"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      labelSkipSize={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.2]],
      }}
      parentLabelPosition="left"
      parentLabelTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.1]],
      }}
    />
  );
}
