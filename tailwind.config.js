/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(30%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.2)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        scaleDownSkilCard: {
          "0%": { transform: "scale(1.1)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideIn: "slideIn 1.5s ease-out",
        scaleDown: "scaleDown  1.2s ease-out",
        fadeIn: "fadeIn 1.2s ease-out",
        scaleDownSkilCard: "scaleDownSkilCard 1.2s ease-out",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(ellipse at center, rgba(29, 52, 82, 0.9) 0%, rgba(21, 22, 89, 1) 100%)",
      },
      colors: {
        "custom-bg-via-color": "#1E3453",
        "custom-bg-to-color": "#141539",
        Scissors: "#CA8A04",
        Paper: "#4865F4",
        Rock: "#DC2E4E",
        // Diğer özel renklerinizi buraya ekleyebilirsiniz
      },
      borderWidth: {
        15: "15px",
      },
      boxShadow: {
        "butto-in": "inset 0 5px 2px rgba(0, 0, 0, 0.2)",
        "Sh-Rock": " 0 8px 0px #a11b34",
        "Sh-Scissors": " 0 8px 0px #a46e0a",
        "Sh-Paper": " 0 8px 0px #0d31e3",
        // Diğer özel gölgelerinizi buraya ekleyebilirsiniz
      },
    },
  },
  plugins: [],
};
