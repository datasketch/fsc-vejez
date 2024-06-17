import { getServices } from "@/app/actions/services";
import ServicesClient from "./ServicesClient";

export default async function Services() {
    const data = await getServices()
    return <ServicesClient data={data} />
}