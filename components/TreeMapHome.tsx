"use client";
import { DefaultTreeMapDatum, ResponsiveTreeMap } from "@nivo/treemap";

interface TreeMapHomeProps {
  data: DefaultTreeMapDatum[] | any;
}

export default function TreeMapHome({ data }: TreeMapHomeProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-[1200px] xl:w-full mx-auto lg:mx-0">
        <div className="h-[500px]">
          <ResponsiveTreeMap
            data={data}
            identity="name"
            value="loc"
            margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
            valueFormat={(valueFormat) =>
              new Intl.NumberFormat("es-CO").format(valueFormat)
            }
            label={(e) =>
              e.id +
              " (" +
              (new Intl.NumberFormat("es-CO", {maximumFractionDigits: 2})
                .format((e.data.loc / e.data.total) * 100)) +
              "%" +
              ")"
            }
            enableParentLabel={true}
            parentLabelPosition="top"
            parentLabelSize={40}
            parentLabelPadding={20}
            nodeOpacity={1}
            parentLabelTextColor={(node) =>
              node.id !== "Personas mayores" ? "#FFFFFF" : "#1A1A1A"
            }
            labelTextColor={(node) =>
              node.path !== "Tasa de alfabetismo.Personas mayores.Sí" &&
              node.path !== "Tasa de alfabetismo.Personas mayores.No"
                ? "#FFFFFF"
                : "#1A1A1A"
            }
            colors={["#1D5556", "#FAAA8D", "#B6174B", "#4B034F", "#41A5B4"]}
            borderColor="#ffffff"
            theme={{
              text: {
                fontSize: 16,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
