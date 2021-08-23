module.exports = {
    mode: "jit",
    purge: ["./resources/**/*.blade.php", "./resources/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                body: ["Kameron", "Noto Sans JP", "sans-serif"],
            },
            grayscale: {
                100: "100%",
                50: "50%",
            },
            maxWidth: {
                320: "320px",
            },
            width: {
                650: "650px",
                inputWidth: "min(400px,80vw)",
            },
            padding: {
                vw10: "10vw",
            },
        },
        screens: {
            surface: "540px",
            sm: "640px",
            md: "768px",
            lg: "1024ppx",
            xl: "1280px",
        },
        colors: {
            black: {
                default: "#333",
                dark: "#3C3C3C",
            },
            green: {
                default: "#6EE7B7",
                dark: "#34D399",
            },
            white: {
                default: "#fff",
            },
            gray: {
                default: "#D1D5DB",
                light: "#ececec",
                dark: "#2D3748",
            },
            yellow: {
                light: "#fafaf0",
            },
            red: {
                default: "#F87171",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
