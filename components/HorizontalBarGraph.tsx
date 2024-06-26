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

export default function HorizontalBarGraph({
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
            <p
              key={`item-${index}`}
              style={{
                color:
                  entry.color !== "#FAAA8D" && entry.color !== "#41A5B4"
                    ? entry.color
                    : "#1A1A1A",
              }}
            >
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
  const CustomLegend = ({ payload }: any) => {
    return (
      <ul className="flex flex-col items-center lg:flex-row justify-center gap-x-6 gap-y-2 lg:gap-x-10 mb-10">
        {payload.map((entry: any, index: number) => (
          <li
            key={`item-${index}`}
            className="flex items-center gap-x-1.5 flex-shrink-0"
            style={{
              color:
                entry.color !== "#FAAA8D" && entry.color !== "#41A5B4"
                  ? entry.color
                  : "#1A1A1A",
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
    <ResponsiveContainer
      width="100%"
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
        <Legend verticalAlign="top" content={<CustomLegend />} />
        {legend.map((item, i) => {
          return <Bar key={i} dataKey={item.key} fill={item.fill} />;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
