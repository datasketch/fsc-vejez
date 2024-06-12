"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-proxima-nova text-eerie-black bg-anti-flash-white leading-tight overflow-x-hidden relative">
        <Header />
        <main>{children}</main>
        <Footer />
        <div
          onClick={() =>
            window.scrollTo({ behavior: "smooth", top: 0, left: 0 })
          }
          className="absolute bottom-8 right-20"
        >
          <button>
            <Image
              width={60}
              height={60}
              src="/images/scroll-up.svg"
              alt="scroll up"
            />
          </button>
        </div>
      </body>
    </html>
  );
}
