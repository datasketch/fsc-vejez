"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface StackedBarChartProps {
  data: any;
  legend: any;
}

export default function MultipleBarChart({
  data,
  legend,
}: StackedBarChartProps) {
  const { width }: any = useWindowSize();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border">
          <p className="label">{`${label}`}</p>
          {payload.map((entry: any, index: any) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name} : $${new Intl.NumberFormat("es-CO").format(
                entry.value
              )}`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };
  return (
    <div className="h-[475px]">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={width >= 1024 ? 60 : 100} />
          {
            // @ts-ignore
            legend.map((item, i) => {
              return (
                <Bar key={i} barSize={40} dataKey={item.key} fill={item.fill} />
              );
            })
          }
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
