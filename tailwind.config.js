module.exports = {
    mode: "jit",
    purge: ["./resources/**/*.blade.php", "./resources/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                body: ["Kameron", "Noto Sans JP", "sans-serif"],
            },
        },
        screens: {
            surface: "540px",
            sm: "640px",
            md: "768px",
            lg: "1024ppx",
            xl: "1280px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
