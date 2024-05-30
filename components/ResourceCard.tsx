import Link from "next/link";
import Image from "next/image";

export default function ResourceCard({ data }: any) {
    return (
        <div className="w-full rounded-xl shadow-lg flex gap-7 p-5 mb-5 relative">
            <div className="w-1/4 z-10">
                <img src={data.image} className="" />
            </div>
            <div className="w-3/4 z-10">
                <h3>Informe</h3>
                <h5>{data.author}</h5>
                <p className="text-sm">{data.year}</p>
                <h4 className="text-xl leading-[22px] font-semibold mt-7">{data.title}</h4>
            </div>
            {
                data.link &&
                <div className="h-20 absolute bg-anti-flash-white w-full bottom-0 left-0 rounded-b-xl flex justify-end items-end">
                    <Link href={data.link} target="_blank" className="rounded-3xl bg-asparagus/40 text-dark-slate-gray font-semibold px-5 py-2 bottom-0 mb-5 mr-5 flex gap-2 z-10">
                        <p>Ir a la página</p>
                        <Image
                            src="/images/icons/arrow-link.svg"
                            alt="arrow link icon"
                            width={11}
                            height={11}
                        />
                    </Link>
                </div>
            }
        </div>
    )
}