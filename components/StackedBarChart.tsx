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

/* const data = [
  {
    name: "Argentina",
    "Desarrollo de apps": 3,
    "E-learning": 1,
    "Inteligencia artificial": 1,
    "Realidad virtual": 1,
    SaMD: 1,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "Brasil",
    "Desarrollo de apps": 1,
    "E-learning": 1,
    "Inteligencia artificial": 0,
    "Realidad virtual": 0,
    SaMD: 1,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "Chile",
    "Desarrollo de apps": 1,
    "E-learning": 1,
    "Inteligencia artificial": 1,
    "Realidad virtual": 0,
    SaMD: 1,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "Colombia",
    "Desarrollo de apps": 1,
    "E-learning": 2,
    "Inteligencia artificial": 1,
    "Realidad virtual": 1,
    SaMD: 0,
    Telemedicina: 1,
    Wearable: 0,
  },
  {
    name: "España",
    "Desarrollo de apps": 1,
    "E-learning": 0,
    "Inteligencia artificial": 1,
    "Realidad virtual": 1,
    SaMD: 0,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "Israel",
    "Desarrollo de apps": 1,
    "E-learning": 1,
    "Inteligencia artificial": 0,
    "Realidad virtual": 1,
    SaMD: 0,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "México",
    "Desarrollo de apps": 2,
    "E-learning": 1,
    "Inteligencia artificial": 1,
    "Realidad virtual": 1,
    SaMD: 0,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "Paraguay",
    "Desarrollo de apps": 1,
    "E-learning": 0,
    "Inteligencia artificial": 1,
    "Realidad virtual": 0,
    SaMD: 1,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "República Checa",
    "Desarrollo de apps": 1,
    "E-learning": 1,
    "Inteligencia artificial": 0,
    "Realidad virtual": 1,
    SaMD: 1,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "USA",
    "Desarrollo de apps": 4,
    "E-learning": 1,
    "Inteligencia artificial": 0,
    "Realidad virtual": 0,
    SaMD: 0,
    Telemedicina: 0,
    Wearable: 0,
  },
  {
    name: "Uruguay",
    "Desarrollo de apps": 1,
    "E-learning": 1,
    "Inteligencia artificial": 1,
    "Realidad virtual": 0,
    SaMD: 0,
    Telemedicina: 1,
    Wearable: 0,
  },
]; */

interface StackedBarChartProps {
  data: any
  legend: any
}

export default function StackedBarChart({ data, legend }: StackedBarChartProps) {
  const { width }: any = useWindowSize();

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
          <Tooltip />
          <Legend verticalAlign="top" height={width >= 1024 ? 60 : 100} />
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
              )
            })}
          {/* <Bar
            barSize={40}
            dataKey="Desarrollo de apps"
            stackId="a"
            fill="#1D5556"
          />
          <Bar barSize={40} dataKey="E-learning" stackId="a" fill="#FAAA8D" />
          <Bar
            barSize={40}
            dataKey="Inteligencia artificial"
            stackId="a"
            fill="#B6174B"
          />
          <Bar
            barSize={40}
            dataKey="Realidad virtual"
            stackId="a"
            fill="#4B034F"
          />
          <Bar barSize={40} dataKey="SaMD" stackId="a" fill="#41A5B4" />
          <Bar barSize={40} dataKey="Telemedicina" stackId="a" fill="#698F3F" />
          <Bar barSize={40} dataKey="Wearable" stackId="a" fill="#767676" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
