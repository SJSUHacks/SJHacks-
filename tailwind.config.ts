import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-4deg)',},
          '25%': { transform: 'rotate(0deg)',},
          '50%': { transform: 'rotate(4deg)',},
          '75%': { transform: 'rotate(1deg)', transitionTimingFunction: 'cubic-bezier(0,.63,.96,.48)'},
          '90%': { transform: 'rotate(-1deg)', transitionTimingFunction: 'cubic-bezier(.21,.52,.9,.55)'},
          '100%': { transform: 'rotate(0deg)', transitionTimingFunction: 'cubic-bezier(.69,.05,.43,1.15)'},
        },
        smbounce: {
          '0%, 100%': {
            transform: 'translatey(-8%)',
            transitionTimingFunction: "cubic-bezier(.2,-0.05,.55,.97)"
          },
        '50%': {
          transform: "none",
          transitionTimingFunction: "cubic-bezier(0,0,.5,.96)"
        }
}
      },
      animation: {
         "wiggle": "wiggle 0.5s cubic-bezier(.06,.68,.66,1.05) alternate",
         "bounce-sm": "smbounce 1.0s infinite"
      }
    },
  },
  plugins: [],
} satisfies Config;
