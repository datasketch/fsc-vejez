'use client'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function BarChart2({ data }: any) {

    return (
            <BarChart
                width={300}
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Hombres" fill="#1D5556" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="Mujeres" fill="#B6174B" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
    )
}