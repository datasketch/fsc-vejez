import BannerOne from "@/components/Banners/BannerOne";
import BannerThree from "@/components/Banners/BannerThree";
import BannerTwo from "@/components/Banners/BannerTwo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Lorem ipsum",
};

export default function Page() {
  return (
    <>
      <div>
        <BannerOne />
        <BannerTwo />
        <BannerThree />
      </div>
    </>
  )

}
