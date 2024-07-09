"use client";
import { DefaultTreeMapDatum, ResponsiveTreeMap } from "@nivo/treemap";

interface TreeMapHomeProps {
  data: DefaultTreeMapDatum[] | any;
}

export default function SimpleTreeMap({ data }: TreeMapHomeProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full mx-auto lg:mx-0">
        <div className="h-[390px]">
          <ResponsiveTreeMap
            data={data}
            identity="name"
            value="loc"
            margin={{ top: 0, right: 20, bottom: 20, left: 20 }}
            valueFormat={(valueFormat) =>
              new Intl.NumberFormat("es-CO").format(valueFormat)
            }
            label={(e) => {
              if (e.value > 10) {
                return (e.id + " (" + (new Intl.NumberFormat("es-CO", {maximumFractionDigits: 2}).format((e.data.loc))) + "%" + ")")
              }
              return ""
            }
            }
            enableParentLabel={false}
            parentLabelPosition="top"
            parentLabelSize={40}
            parentLabelPadding={20}
            nodeOpacity={1}
            parentLabelTextColor={(node) =>
              node.id !== "Personas mayores" ? "#FFFFFF" : "#1A1A1A"
            }
            labelTextColor={(node) => {
              console.log(node);

              if (node.value > 10) {
                return "black"
              }
              return node.color

              /* eturn node.path !== "Tasa de alfabetismo.Personas mayores.Sí" &&
              node.path !== "Tasa de alfabetismo.Personas mayores.No"
                ? "black"
                : "#1A1A1A" */
            }
            }
            colors={["#B6174B","#1D5556", "#FAAA8D", "#4B034F", "#41A5B4"]}
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
