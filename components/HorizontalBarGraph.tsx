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


const blues = [
  ["#457AA6"],
  ["#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
  ["#1A334A", "#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"]
];

const getColor = (length, index) => {
  if (length <= blues.length) {
    return blues[length - 1][index];
  }

  return blues[blues.length - 1][index % blues.length];
};

const data = [
  { name: "Jóvenes", "Totalmente en desacuerdo": 240, Desacuerdo: 100, "Ni de acuerdo ni desacuerdo": 300, "De acuerdo": 400, "Totalmente de acuerdo": 240 },
  { name: "Adultos", "Totalmente en desacuerdo": 400, Desacuerdo: 180, "Ni de acuerdo ni desacuerdo": 200, "De acuerdo": 600, "Totalmente de acuerdo": 140  },
  { name: "Personas mayores", "Totalmente en desacuerdo": 140, Desacuerdo: 200, "Ni de acuerdo ni desacuerdo": 380, "De acuerdo": 300, "Totalmente de acuerdo": 290  }
];


const BAR_AXIS_SPACE = 10; 

export default function HorizontalBarGraph() {
    
    
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