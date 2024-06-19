import ServicesClient from "./ServicesClient";

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { Credentials } from "aws-sdk"
import omit from "lodash.omit";
import StackedBarChart from "./StackedBarChart";
import { AnyLengthString } from "aws-sdk/clients/comprehendmedical";
import { MenuItem } from "@headlessui/react";

async function getServices(): Promise<Array<Record<string, unknown>>> {
    try {
        const s3Client = new S3Client({
            region: 'us-east-1',
            credentials: new Credentials({
                accessKeyId: process.env.ACCESS_KEY_ID || '',
                secretAccessKey: process.env.SECRET_ACCESS_KEY || '',
            })
        })
        const bucket = process.env.BUCKET

        const cmd = new GetObjectCommand({
            Bucket: bucket,
            Key: 'fundacion-saldarriaga-concha/datos-plateados/servicios.json'
        })

        const { Body } = await s3Client.send(cmd)

        const content = await Body?.transformToString()

        const data = content ? JSON.parse(content) : []

        // rcd___id is a field appended to data when uploaded to Datasketch SaaS
        return data.map((item: Record<string, unknown>) => omit(item, ['rcd___id']))
    } catch (error) {
        console.error(error)
        return []
    }
}

export default async function Services() {
    const data = await getServices()

    return <ServicesClient data={data} />
}

export async function ServicesBarChartData({dataTmp, legendTmp}: any) {
    const data = await getServices()

    const legend = [
        {
          "key": "Educación",
          "fill": "#1D5556"
        },
        {
          "key": "Ingresos y finanzas",
          "fill": "#FAAA8D"
        },
        {
          "key": "Salud y bienestar",
          "fill": "#B6174B"
        }
      ]

    let dataBar = {}
    
    for (let item of data) {
        // @ts-ignore
        if (Object.keys(dataBar).includes(item.pais_de_origen)) {
            // @ts-ignore
            if(Object.keys(dataBar[item.pais_de_origen]).includes(item.categoria)) {
                // @ts-ignore
                dataBar[item.pais_de_origen][item.categoria] += 1
            } else {
                // @ts-ignore
                dataBar[item.pais_de_origen][item.categoria] = 1
            }
        } else {
            // @ts-ignore
            dataBar[item.pais_de_origen] = {}
            // @ts-ignore
            dataBar[item.pais_de_origen][item.categoria] = 1
        }
    }

    const dataBar2 = Object.keys(dataBar).map((item) => {
        // @ts-ignore
        let tmp = dataBar[item]
        tmp.name = item
        return tmp
    })

    return <StackedBarChart
        data={dataBar2}
        legend={legend}
    />
}