"use client";
import { DefaultLink, DefaultNode, ResponsiveSankey, Sankey } from "@nivo/sankey";

interface SankeyHomeProps {
  data: {
    nodes: DefaultNode[] | any;
    links: DefaultLink[];
  };
}

export default function SankeyHome({ data }: SankeyHomeProps) {
  return (
    <ResponsiveSankey
      data={data}
      margin={{ top: 40, right: 220, bottom: 40, left: 50 }}
      align="justify"
      colors={{ scheme: "category10" }}
      nodeOpacity={1}
      nodeHoverOthersOpacity={0.35}
      nodeThickness={40}
      nodeSpacing={10}
      nodeBorderWidth={0}
      nodeBorderColor={{
        from: "color",
        modifiers: [["darker", 0.8]],
      }}
      nodeBorderRadius={3}
      linkOpacity={0.5}
      linkHoverOthersOpacity={0.1}
      linkContract={3}
      enableLinkGradient={true}
      labelOrientation="horizontal"
      labelPadding={17}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateX: 230,
          itemWidth: 50,
          itemHeight: 14,
          itemDirection: "right-to-left",
          itemsSpacing: 4,
          itemTextColor: "#999",
          symbolSize: 14,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
