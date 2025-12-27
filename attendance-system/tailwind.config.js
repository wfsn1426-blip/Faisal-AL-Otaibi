export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        success: "var(--success)",
        danger: "var(--danger)",
        textMain: "var(--text-main)",
        textSub: "var(--text-sub)",
        bgMain: "var(--bg-main)",
      },
    },
  },
  plugins: [],
};
