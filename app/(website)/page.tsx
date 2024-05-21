import BannerOne from "@/components/Banners/BannerOne";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Lorem ipsum",
};

export default function Page() {
  return (
    <div className="mx-20">
      <BannerOne />
    </div>
  )
}
