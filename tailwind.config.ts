import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': ['var(--font-proxima-nova-a)', 'san-serif']
      },
      colors: {
        'eerie-black': '#1A1A1A',
        'atomic-tangerine': '#FAAA8D',
        'russian-violet': '#4B034F',
        'amaranth-purple': '#B6174B',
        'moonstone': '#41A5B4',
        'dark-slate-gray': '#1D5556',
        'asparagus': '#698F3F',
        'alabaster': '#EFEFEF',
        'vampire-gray': '#505050',
        'anti-flash-white': '#EFEFEF',
        'davys-gray': '#505050',
        'seasalt': '#FAFAFA',
        'davys-gray': '#505050',
        'blue-dianne': '#1C5253',
      },
      backgroundImage: {
        'banner-services': "url('/images/servicios/banner-services.svg')",
        'banner-home': "url('/images/home/banner.svg')",
        'banner-home-mobile': "url('/images/home/banner-mobile.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-animate"),
  ],
};
export default config;
