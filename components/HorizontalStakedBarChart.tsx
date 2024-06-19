"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

const BAR_AXIS_SPACE = 10;

interface HorizontalBarGraphProps {
  data: Array<Record<string, string | number>>;
  legend: Array<Record<string, string>>;
  height?: number;
}

export default function HorizontalStakedBarChart({
  data,
  legend,
  height = 550,
}: HorizontalBarGraphProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border">
          <p className="label">{`${label}`}</p>
          {payload.map((entry: any, index: any) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
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

  return (
    <ResponsiveContainer
      width={"80%"}
      height={height}
      debounce={50}
      className="mt-20 mx-auto"
    >
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 10, right: BAR_AXIS_SPACE - 8 }}
      >
        <XAxis type="number" />
        <YAxis
          yAxisId={0}
          dataKey="name"
          type="category"
          tickLine={false}
          width={150}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" />
        {legend.map((item, i) => {
          return (
            <Bar key={i} dataKey={item.key} fill={item.fill} stackId="a" />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
