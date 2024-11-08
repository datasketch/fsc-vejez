'use client'

import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = {
    "AMAZONAS": [
        {
            "name": "no",
            "value": 92.68829966682284
        },
        {
            "name": "sí",
            "value": 7.311700333177152
        }
    ],
    "ANTIOQUIA": [
        {
            "name": "no",
            "value": 84.69425159014457
        },
        {
            "name": "sí",
            "value": 15.305748409855429
        }
    ],
    "ARAUCA": [
        {
            "name": "no",
            "value": 82.21654641551402
        },
        {
            "name": "sí",
            "value": 17.78345358448598
        }
    ],
    "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA": [
        {
            "name": "no",
            "value": 93.94410041422638
        },
        {
            "name": "sí",
            "value": 6.055899585773613
        }
    ],
    "ATLÁNTICO": [
        {
            "name": "no",
            "value": 91.22835031609712
        },
        {
            "name": "sí",
            "value": 8.771649683902886
        }
    ],
    "BOGOTÁ, D.C.": [
        {
            "name": "no",
            "value": 86.05042835576143
        },
        {
            "name": "sí",
            "value": 13.949571644238592
        }
    ],
    "BOLÍVAR": [
        {
            "name": "no",
            "value": 90.61135307098812
        },
        {
            "name": "sí",
            "value": 9.388646929011886
        }
    ],
    "BOYACÁ": [
        {
            "name": "no",
            "value": 87.24654156273746
        },
        {
            "name": "sí",
            "value": 12.753458437262541
        }
    ],
    "CALDAS": [
        {
            "name": "no",
            "value": 83.07419559417687
        },
        {
            "name": "sí",
            "value": 16.92580440582313
        }
    ],
    "CAQUETÁ": [
        {
            "name": "no",
            "value": 81.73278807970958
        },
        {
            "name": "sí",
            "value": 18.267211920290418
        }
    ],
    "CASANARE": [
        {
            "name": "no",
            "value": 85.879417405975
        },
        {
            "name": "sí",
            "value": 14.120582594024992
        }
    ],
    "CAUCA": [
        {
            "name": "no",
            "value": 81.65088112106706
        },
        {
            "name": "sí",
            "value": 18.349118878932956
        }
    ],
    "CESAR": [
        {
            "name": "no",
            "value": 85.66765440020853
        },
        {
            "name": "sí",
            "value": 14.332345599791472
        }
    ],
    "CHOCÓ": [
        {
            "name": "no",
            "value": 85.71640164889122
        },
        {
            "name": "sí",
            "value": 14.28359835110878
        }
    ],
    "CUNDINAMARCA": [
        {
            "name": "no",
            "value": 84.24103382960386
        },
        {
            "name": "sí",
            "value": 15.758966170396144
        }
    ],
    "CÓRDOBA": [
        {
            "name": "no",
            "value": 91.00512535591228
        },
        {
            "name": "sí",
            "value": 8.994874644087716
        }
    ],
    "GUAINÍA": [
        {
            "name": "no",
            "value": 86.75064476393493
        },
        {
            "name": "sí",
            "value": 13.24935523606507
        }
    ],
    "GUAVIARE": [
        {
            "name": "no",
            "value": 79.20843345067735
        },
        {
            "name": "sí",
            "value": 20.791566549322642
        }
    ],
    "HUILA": [
        {
            "name": "no",
            "value": 84.28829533873707
        },
        {
            "name": "sí",
            "value": 15.711704661262923
        }
    ],
    "LA GUAJIRA": [
        {
            "name": "no",
            "value": 91.64730695178069
        },
        {
            "name": "sí",
            "value": 8.352693048219306
        }
    ],
    "MAGDALENA": [
        {
            "name": "no",
            "value": 84.77233597106787
        },
        {
            "name": "sí",
            "value": 15.227664028932129
        }
    ],
    "META": [
        {
            "name": "no",
            "value": 85.25247934603576
        },
        {
            "name": "sí",
            "value": 14.747520653964239
        }
    ],
    "NARIÑO": [
        {
            "name": "no",
            "value": 79.06385369483124
        },
        {
            "name": "sí",
            "value": 20.936146305168744
        }
    ],
    "NORTE DE SANTANDER": [
        {
            "name": "no",
            "value": 85.24698749201977
        },
        {
            "name": "sí",
            "value": 14.753012507980227
        }
    ],
    "PUTUMAYO": [
        {
            "name": "no",
            "value": 83.00318613139306
        },
        {
            "name": "sí",
            "value": 16.996813868606946
        }
    ],
    "QUINDÍO": [
        {
            "name": "no",
            "value": 86.86201742394934
        },
        {
            "name": "sí",
            "value": 13.137982576050659
        }
    ],
    "RISARALDA": [
        {
            "name": "no",
            "value": 84.1945026165237
        },
        {
            "name": "sí",
            "value": 15.805497383476288
        }
    ],
    "SANTANDER": [
        {
            "name": "no",
            "value": 85.21679439937408
        },
        {
            "name": "sí",
            "value": 14.783205600625934
        }
    ],
    "SUCRE": [
        {
            "name": "no",
            "value": 88.24705043007654
        },
        {
            "name": "sí",
            "value": 11.752949569923452
        }
    ],
    "TOLIMA": [
        {
            "name": "no",
            "value": 85.14677137577016
        },
        {
            "name": "sí",
            "value": 14.853228624229843
        }
    ],
    "VALLE DEL CAUCA": [
        {
            "name": "no",
            "value": 79.99059214490043
        },
        {
            "name": "sí",
            "value": 20.00940785509957
        }
    ],
    "VAUPÉS": [
        {
            "name": "no",
            "value": 94.6711855755075
        },
        {
            "name": "sí",
            "value": 5.328814424492511
        }
    ],
    "VICHADA": [
        {
            "name": "no",
            "value": 95.40601543162109
        },
        {
            "name": "sí",
            "value": 4.5939845683789216
        }
    ]
}

const COLORS = ["#B6174B", "#41A5B4"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`} {name.charAt(0).toUpperCase() + name.slice(1)} 
        </text>
    );
};

export default function PieChartDepartment() {
    const [selectedDepartment, setSelectedDepartment] = useState<string>('AMAZONAS');

    return (
        <div className="flex gap-4">
            <div>
                <h2 className=" text-xl font-semibold">Departamento</h2>
                <p className="mb-3">Selecciona una opción</p>
                <select
                    className="h-10  overflow-hidden rounded-3xl border border-prussian-blue pl-4 pr-12"
                    name=""
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                    {Object.keys(data).map((option: any, i: number) => {
                        return (
                            // @ts-ignore
                            <option key={i} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={1000} height={400}>
                        <Pie
                        data={data[selectedDepartment as keyof typeof data]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data[selectedDepartment as keyof typeof data].map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
                />
            </div>
        </div>
    )
}