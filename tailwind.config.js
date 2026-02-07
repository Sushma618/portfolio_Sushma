export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f19",
        panel: "#111827",
        accentPurple: "#a855f7",
        accentCyan: "#06b6d4",
        accentBlue: "#38bdf8"
      },
      boxShadow: {
        glow: "0 0 30px rgba(168, 85, 247, 0.25)",
        cyan: "0 0 30px rgba(6, 182, 212, 0.25)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top, rgba(56, 189, 248, 0.15), transparent 55%)",
        "hero-glow": "radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.2), transparent 45%)"
      }
    }
  },
  plugins: []
};
