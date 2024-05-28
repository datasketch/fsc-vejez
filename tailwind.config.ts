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
        'anti-flash-white': '#EFEFEF',
        'seasalt': '#FAFAFA',
        'davys-gray': '#505050'
      },
      backgroundImage: {
        'banner-services': "url('/images/servicios/banner-services.svg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-animate"),
  ],
};
export default config;
