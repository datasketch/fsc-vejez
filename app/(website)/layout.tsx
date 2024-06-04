import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-proxima-nova text-eerie-black bg-anti-flash-white leading-tight overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
