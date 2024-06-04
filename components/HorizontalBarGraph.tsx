'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Text
} from "recharts";



const BAR_AXIS_SPACE = 10;

export default function HorizontalBarGraph({ data }: any) {
  return (
    <ResponsiveContainer width={"80%"} height={550} debounce={50} className="mt-20 mx-auto">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 10, right: (BAR_AXIS_SPACE - 8) }}
      >
        <XAxis type="number" />
        <YAxis
          yAxisId={0}
          dataKey="name"
          type="category"
          tickLine={false}

        />
        <Legend verticalAlign="top" />
        <Bar dataKey="Totalmente en desacuerdo" fill="#1D5556" />
        <Bar dataKey="Desacuerdo" fill="#FAAA8D" />
        <Bar dataKey="Ni de acuerdo ni desacuerdo" fill="#B6174B" />
        <Bar dataKey="De acuerdo" fill="#4B034F" />
        <Bar dataKey="Totalmente de acuerdo" fill="#41A5B4" />
      </BarChart>
    </ResponsiveContainer>
  );
}