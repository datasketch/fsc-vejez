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
        'principal-2': '#37685C',
        'principal-3': '#4D7B62',
        'principal-4': '#628F68',
        'principal-5': '#77A46E',
        'principal-6': '#8CB973',
        'principal-7': '#A1CE78',
        'alabaster': '#EFEFEF',
        'vampire-gray': '#505050'
      }
    },
  },
  plugins: [],
};
export default config;
