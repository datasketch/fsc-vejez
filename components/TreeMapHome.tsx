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
      margin={{ top: 0, right: 10, bottom: 100, left: 10 }}
      valueFormat={(valueFormat) =>
        new Intl.NumberFormat("es-CO").format(valueFormat)
      }
      label={(e) =>
        e.id + " (" + ((e.data.loc / e.data.total) * 100).toFixed(1) + "%" + ")"
      }
      labelTextColor="#FAFAFA"
      enableParentLabel={true}
      parentLabelPosition="top"
      parentLabelTextColor="#FAFAFA"
      parentLabelSize={40}
      parentLabelPadding={20}
      nodeOpacity={1}
      colors={["#1D5556", "#FAAA8D", "#B6174B", "#4B034F", "#41A5B4"]}
      borderColor="#ffffff"
      theme={{
        text: {
          fontSize: 18,
        },
      }}
    />
  );
}
