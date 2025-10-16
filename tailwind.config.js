module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "balasana-sage": "#5D7F71",
        "balasana-cream": "#FDFBF7",
        "balasana-teal": "#2A9D8F",
        "balasana-dark": "#1A2332",
        "balasana-gray": "#5A6C7D",
        "balasana-charcoal": "#2C3E50",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#2C3E50",
            lineHeight: "1.8",
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            h2: {
              color: "#1A2332",
              fontWeight: "600",
              marginTop: "2em",
              marginBottom: "1em",
            },
            h3: {
              color: "#1A2332",
              fontWeight: "600",
              marginTop: "1.6em",
              marginBottom: "0.8em",
            },
            blockquote: {
              borderLeftColor: "#2A9D8F",
              backgroundColor: "#E8F5F3",
              padding: "1em 1.5em",
              borderRadius: "0.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
