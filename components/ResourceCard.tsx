import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface ResourceCardProps {
  data: any;
  image: boolean;
  cardTitle: string;
  isLibrary: boolean;
}

export default function ResourceCard({
  data,
  image = false,
  cardTitle,
  isLibrary = false,
}: ResourceCardProps) {
  return (
    <div
      className={clsx(
        "w-full rounded-xl shadow-lg flex flex-col lg:flex-row gap-7 lg:p-5 mb-5 relative",
        {
          "lg:h-[300px]": !isLibrary,
        }
      )}
    >
      {image && (
        <div className="lg:w-1/4 px-5 pt-5 lg:pt-0 lg:px-0 z-10">
          <Image className="rounded" width={204} height={264} src={data.image} alt={data.title} />
        </div>
      )}
      {image ? (
        <div className="text-blue-dianne lg:w-3/4 z-10 px-5 lg:px-0 mb-20">
          <h3 className="font-semibold">{cardTitle}</h3>
          <h5>{data.author}</h5>
          <p className="text-sm">{data.year}</p>
          <h4 className="text-eerie-black text-xl leading-[22px] font-semibold mt-7">
            {data.title}
          </h4>
        </div>
      ) : (
        <div className="text-blue-dianne z-10 px-5 pt-5 lg:pt-0 lg:px-0 mb-20">
          <h3 className="text-xl font-semibold mt-2">
            {data.law} {data.id}
          </h3>
          <h5>{data.author}</h5>
          <h4 className="text-eerie-black xl:text-xl leading-[22px] font-semibold mt-7">
            {data.title}
          </h4>
        </div>
      )}
      {data.link && (
        <div className="h-20 lg:absolute bg-anti-flash-white w-full bottom-0 left-0 rounded-b-xl flex justify-end items-end">
          <Link
            href={data.link}
            target="_blank"
            className="rounded-3xl bg-asparagus/40 text-dark-slate-gray font-semibold px-5 py-2 bottom-0 mb-5 mr-5 flex gap-2 z-10"
          >
            <p>Ir a la página</p>
            <Image
              src="/images/icons/arrow-link.svg"
              alt="arrow link icon"
              width={11}
              height={11}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
