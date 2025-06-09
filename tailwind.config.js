/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
            screens: {
                
            },
        },
      extend: {
        keyfreames: {
            "accordian-down": {
                from: {height: "0"},
                to: {height: "var(--radix-accordian-content-height)"},
            },
            "accordian-down": {
                from: {height: "var(--radix-accordian-content-height)"},
                to: {height: "0"}, 
            },
        },
      },
    },
    plugins: [],
  };
  