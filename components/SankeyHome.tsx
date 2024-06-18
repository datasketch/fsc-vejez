"use client";
import {
  DefaultLink,
  DefaultNode,
  ResponsiveSankey,
  Sankey,
} from "@nivo/sankey";

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
      margin={{ top: 40, right: 20, bottom: 40, left: 50 }}
      ariaLabel="sankey-vivienda"
      align="justify"
      colors={[
        "#FAAA8D",
        "#4B034F",
        "#B6174B",
        "#41A5B4",
        "#1D5556",
        "#698F3F",
      ]}
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
      theme={{
        text: {
          fontSize: 18
        },
      }}
    />
  );
}
