import type { Metadata } from "next";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Credentials } from "aws-sdk";
import omit from "lodash.omit";
import ResourcePanel from "@/components/ResourcePanel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Lorem ipsum",
};

async function getResources(
  panel: string
): Promise<Array<Record<string, unknown>>> {
  try {
    const s3Client = new S3Client({
      region: "us-east-1",
      credentials: new Credentials({
        accessKeyId: process.env.ACCESS_KEY_ID || "",
        secretAccessKey: process.env.SECRET_ACCESS_KEY || "",
      }),
    });
    const bucket = process.env.BUCKET;

    const cmd = new GetObjectCommand({
      Bucket: bucket,
      Key: `fundacion-saldarriaga-concha/datos-plateados/recursos-${panel}.json`,
    });

    const { Body } = await s3Client.send(cmd);

    const content = await Body?.transformToString();

    const data = content ? JSON.parse(content) : [];

    // rcd___id is a field appended to data when uploaded to Datasketch SaaS
    return data.map((item: Record<string, unknown>) =>
      omit(item, ["rcd___id"])
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page() {
  const [libraryData, politicsData, dataData] = await Promise.all([
    getResources("biblioteca"),
    getResources("politicas-publicas"),
    getResources("datos"),
  ]);

  return (
    <div className="bg-alabaster font-proxima-nova">
      <h1 className="text-4xl lg:text-6xl font-semibold text-dark-slate-gray text-center my-20">
        Recursos
      </h1>
      <TabGroup>
        <TabList className="flex gap-4 justify-start shadow-2xl u-container">
          <Tab className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">
            Biblioteca
          </Tab>
          <Tab className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">
            Políticas públicas
          </Tab>
          <Tab className="py-1 px-3 lg:text-xl data-[selected]:font-semibold focus:outline-none data-[selected]:text-dark-slate-gray data-[selected]:border-b-2 data-[selected]:border-b-dark-slate-gray data-[focus]:outline-white">
            Datos
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="bg-white w-full rounded-[40px] py-16">
            <ResourcePanel data={libraryData} isType image />
          </TabPanel>
          <TabPanel className="bg-white w-full rounded-[40px] py-16">
            <ResourcePanel data={politicsData} />
          </TabPanel>
          <TabPanel className="bg-white w-full rounded-[40px] py-16">
            <ResourcePanel data={dataData} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <div className="u-container mt-20 flex flex-col gap-y-8 justify-center items-center md:items-start md:flex-row md:justify-between">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-dianne">
            ¿Quieres agregar un recurso sobre personas mayores?
          </h2>
          <Link
            className="block text-center md:text-left md:inline-flex py-2 px-5 gap-x-2 text-dark-slate-gray font-semibold bg-asparagus/40 rounded-[20px] mt-10"
            href="/"
          >
            <p className="text-nowrap">Envíanos tu información</p>
          </Link>
        </div>
        <Image
          width={306}
          height={232}
          src="/images/recursos/icon-info-add-resource.svg"
          alt="info"
        />
      </div>
      <hr className="u-container bg-blue-dianne h-[2px] mb-14" />
    </div>
  );
}
