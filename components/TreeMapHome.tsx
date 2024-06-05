"use client";
import { DefaultTreeMapDatum, ResponsiveTreeMap } from "@nivo/treemap";

interface TreeMapHomeProps {
  data: DefaultTreeMapDatum[] | any;
}

export default function TreeMapHome({ data }: TreeMapHomeProps) {
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
