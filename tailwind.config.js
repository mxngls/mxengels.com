/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: "ModernEra"
            },
            animation: {
                shake: "shake linear 1s",
                scale: "scale linear 1s",
            },
            keyframes: {
                shake: {
                    "10%, 90%": { transform: "rotate(0.03turn)" },
                    "20%, 80%": { transform: "rotate(-0.01turn)" },
                    "30%, 50%, 70%": { transform: "rotate(0.03turn)" },
                    "40%, 60%": { transform: "rotate(-0.04turn)" },
                },
                scale: { "20%, 70%": { transform: "scale(115%)" } },
            },
        },
    },
    plugins: [],
};
