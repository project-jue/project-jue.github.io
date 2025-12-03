tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#942a2a",
        "background-light": "#f5f0e9",
        "background-dark": "#201212",
        "text-light": "#212121",
        "text-dark": "#f8f6f6",
        "text-muted-light": "#666666",
        "text-muted-dark": "#a0a0a0",
        "card-light": "#f2e9e9",
        "card-dark": "#2a1b1b",
        "border-light": "#e0d7d7",
        "border-dark": "#3a2a2a",
      },
      fontFamily: {
        display: ["Source Serif Pro", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
    },
  },
};
