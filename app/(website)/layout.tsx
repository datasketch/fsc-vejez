import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-proxima-nova text-eerie-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
