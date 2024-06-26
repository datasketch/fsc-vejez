"use client";
import { DefaultLink, DefaultNode, ResponsiveSankey } from "@nivo/sankey";

interface SankeyHomeProps {
  data: {
    nodes: DefaultNode[] | any;
    links: DefaultLink[];
  };
}

export default function SankeyHome({ data }: SankeyHomeProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-[1200px] lg:w-full mx-auto lg:mx-0">
        <div className="h-[527.23px]">
          <ResponsiveSankey
            data={data}
            margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
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
                fontSize: 18,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
