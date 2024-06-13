import Image from "next/image";
import Link from "next/link";

interface ServicesCardProps {
  type: string;
  country: string;
  title: string;
  description: string;
  externalLink?: string;
}

export const typeImages: any = {
  "Salud y bienestar": "/images/servicios/bienestar.svg",
  Educación: "/images/servicios/educacion.svg",
  "Ingresos y finanzas": "/images/servicios/finanzas.svg",
  "Tecnología y digitalización": "/images/servicios/tecnologia.svg",
};

export default function ServicesCard({
  type,
  country,
  title,
  description,
  externalLink,
}: ServicesCardProps) {
  return (
    <div className="bg-seasalt rounded-[10px] p-5 u-shadow-1">
      <div className="flex gap-x-5">
        <div className="flex-shrink-0">
          <Image src={typeImages[type]} alt="" width={60} height={60} />
        </div>
        <div className="w-full">
          <p className="text-lg lg:text-xl italic">{type}</p>
          <p>{country}</p>
          <h3 className="mt-2.5 text-lg lg:text-xl font-semibold">{title}</h3>
          <p>{description}</p>
          {externalLink && (
            <Link
              className="mt-6 inline-flex py-2 px-5 gap-x-2 text-dark-slate-gray font-semibold bg-asparagus/40 rounded-[20px]"
              href={externalLink}
              target="_blank"
            >
              <p className="text-nowrap">Ir a la página</p>
              <Image
                src="/images/icons/arrow-link.svg"
                alt="arrow link icon"
                width={11}
                height={11}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
