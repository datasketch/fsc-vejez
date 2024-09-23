import type { Metadata } from "next";
import TabsResources from "@/components/TabsResources";
import { Suspense } from "react";
import { client } from "@/util";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Lorem ipsum",
};

async function getResources(
  panel: string
): Promise<Array<Record<string, unknown>>> {
  try {
    await client.setTable(`recursos_${panel}`)
    const {data} = await client.getRecords()
    
    return data as Record<string, unknown>[]
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Page() {
  const [libraryData, politicsData, dataData] = await Promise.all([
    getResources("biblioteca"),
    getResources("politicas_publicas"),
    getResources("datos"),
  ]);

  return (
    <Suspense>
      <TabsResources libraryData={libraryData} politicsData={politicsData} dataData={dataData} />
    </Suspense>
  );
}
