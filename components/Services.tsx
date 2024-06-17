import ServicesClient from "./ServicesClient";

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import omit from "lodash.omit";

async function getServices(): Promise<Array<Record<string, unknown>>> {
    try {
        const s3Client = new S3Client({
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.ACCESS_KEY_ID,
                secretAccessKey: process.env.SECRET_ACCESS_KEY
             }
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