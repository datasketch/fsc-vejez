'use server'

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"

export async function getServices(): Promise<Array<Record<string, unknown>>> {
    try {
        const s3Client = new S3Client({})
        const bucket = process.env.BUCKET
    
        const cmd = new GetObjectCommand({
            Bucket: bucket,
            Key: 'fundacion-saldarriaga-concha/datos-plateados/servicios.json'
        })
    
        const { Body } = await s3Client.send(cmd)
    
        const content = await Body?.transformToString()
    
        const data = content ? JSON.parse(content) : []
    
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}