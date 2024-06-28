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

export default function StackedBarChart({
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
            <p
              key={`item-${index}`}
              style={{
                color: entry.color !== "#FAAA8D" ? entry.color : "#1A1A1A",
              }}
            >
              {`${entry.name} : ${new Intl.NumberFormat("es-CO").format(
                entry.value
              )}`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <ul className="flex flex-col items-center sm:flex-row justify-center gap-x-6 gap-y-2 lg:gap-x-10 mb-10">
        {payload.map((entry: any, index: number) => (
          <li
            key={`item-${index}`}
            className="flex items-center gap-x-1.5 "
            style={{
              color: entry.color !== "#FAAA8D" ? entry.color : "#1A1A1A",
            }}
          >
            <div className="size-4" style={{ backgroundColor: entry.color }}>
              &nbsp;
            </div>
            <p>{entry.value}</p>
          </li>
        ))}
      </ul>
    );
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
            right: 0,
            left: 0,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            className="text-base"
            interval={0}
            angle={-45}
            textAnchor="end"
          />
          <YAxis className="text-xs" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={width >= 1024 ? 60 : 100}
            content={<CustomLegend />}
          />
          {
            // @ts-ignore
            legend.map((item, i) => {
              return (
                <Bar
                  key={i}
                  barSize={40}
                  dataKey={item.key}
                  stackId="a"
                  fill={item.fill}
                />
              );
            })
          }
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
