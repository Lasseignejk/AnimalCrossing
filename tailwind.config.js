/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    fontFamily: {
      work: ["Work Sans", "sans-serif"],
      enri: ["Enriqueta", "serif"]
    },
		extend: {
      colors: {
        backgroundLight: "#fff9e5",
        textLight: "#017c74",
        green1: "#88c9a1",
        green2: "#a4d4a2",
        green3: "#88c9a1",
        blue1: "#7cc9c3",
        blue2: "#8ecfca",
        brown1: "#f8eebc",
        brown2: "#786951",
        pink1: "#febdc3",
        pink2: "#ef758a",
        pink3: "#ff7c69",
        yellow1: "#f7d359",
        yellow2: "#fcea64",
        yellow3: "#f5c24c"
        
      }
    },
	},
	plugins: [],
};
