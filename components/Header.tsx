import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-10">
      <div className="mx-[30px] xl:mx-20 max-w-[1206px]">
        <nav className="grid grid-cols-4 lg:grid-cols-12 gap-x-2.5 xl:gap-x-5">
          <ul className="col-span-4 lg:col-start-5 lg:col-end-9 flex justify-between gap-x-10">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/">Percepciones</Link>
            </li>
            <li>
              <Link href="/">Servicios</Link>
            </li>
            <li>
              <Link href="/">Recursos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
