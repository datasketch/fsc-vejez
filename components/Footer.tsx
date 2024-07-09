/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-[60px] pb-10 relative">
        <div className="u-container">
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-5 gap-x-2.5 xl:gap-x-5">
            <div className="col-span-4 lg:col-span-6">
              <Image
                className="mx-auto lg:mx-0"
                src="/images/logo.svg"
                width={184}
                height={54.315}
                alt="logo FSC"
              />
              <p className="mt-5 lg:mt-[30px] mb-5">
                +60 Datos plateados es una plataforma de visualización de
                información de la población de 60 años o más en distintas
                temáticas. Los datos provienen de diferentes fuentes, con las
                cuales se busca incentivar el desarrollo de programas y
                servicios dirigidos a las personas mayores.
              </p>
            </div>
            <div className="col-span-4 lg:col-start-10 lg:col-end-13">
              <div className="flex justify-center lg:justify-end">
                <Link
                  className="inline-flex py-2 px-5 gap-x-2 text-dark-slate-gray font-semibold bg-asparagus/40 rounded-[20px] z-10"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSevQlu80LNKeJCXzqYpi34sNwadxscwti-yz4z2ViDlY-kOTQ/viewform"
                >
                  <p className="text-nowrap">Formulario de contacto</p>
                  <Image
                    src="/images/icons/arrow-link.svg"
                    alt="arrow link icon"
                    width={11}
                    height={11}
                  />
                </Link>
              </div>
              <div className="mt-10">
                <p><Link className="mt-5 underline text-dark-slate-gray relative z-10" href="/documents/Preguntas%20frecuentes%20%2B60%20Datos%20Plateados.pdf">Preguntas frecuentes</Link></p>
                <p><Link className="mt-5 underline text-dark-slate-gray relative z-10" href="/documents/Anexo%20t%C3%A9cnico%20%2B60%20Datos%20Plateados.pdf">Anexo técnico sobre las fuentes de información y el uso de datos</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-48 lg:-mt-32 xl:-mt-60">
        <div className="relative">
          <img
            className="hidden lg:block w-full"
            src="/images/banner-footer.svg"
            alt="banner footer"
          />
          <img
            className="lg:hidden w-full h-[500px]"
            src="/images/banner-footer-mobile.svg"
            alt="banner footer"
          />
          <div className="absolute bottom-6 lg:bottom-10 w-full">
            <div className="flex flex-col gap-y-2.5 lg:flex-row justify-center text-white items-center gap-x-4">
              <p className="text-nowrap">Elaborado por</p>
              <Image
                src="/images/logo-white.svg"
                alt="Logotipo de la Fundación Saldarriaga Concha"
                width={101.63}
                height={30}
              />
              <p className="text-nowrap">y desarrollo tecnológico por</p>
              <Image
                src="/images/logo-datasketch.svg"
                alt="Logotipo de Datasketch"
                width={128.42}
                height={20}
              />
            </div>
          </div>
          <div className="absolute bottom-40 lg:bottom-0 left-0">
            <img src="/images/plants-1.svg" alt="plants 1" />
          </div>
          <div className="absolute bottom-40 lg:bottom-0 right-0">
            <img src="/images/plants-2.svg" alt="plants 2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
