import BannerEight from "@/components/Banners/BannerEight";
import BannerFive from "@/components/Banners/BannerFive";
import BannerFour from "@/components/Banners/BannerFour";
import BannerOne from "@/components/Banners/BannerOne";
import BannerSeven from "@/components/Banners/BannerSeven";
import BannerSix from "@/components/Banners/BannerSix";
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
      <div className="relative">
        <BannerOne />
        <BannerTwo />
        <BannerThree />
        <BannerFour />
        <BannerFive />
        <BannerSix />
        <BannerSeven />
        <BannerEight />
      </div>
    </>
  );
}
