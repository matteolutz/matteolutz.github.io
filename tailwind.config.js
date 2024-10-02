/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navbar: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      fontSize: {
        base: "20px",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.645,0.045,0.355,1)",
      },
    },
    fontFamily: {
      sans: [
        "Calibre",
        "Inter",
        "San Francisco",
        "SF Pro Text",
        "-apple-system",
        "system-ui",
        "sans-serif",
      ],
      mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
    },
    colors: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
      tertiary: "#64ffda",
      "background-primary": "#0a192f",
      "background-secondary": "#233044",
    },
  },
  plugins: [],
};
