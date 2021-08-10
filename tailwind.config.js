module.exports = {
  purge: [
    "./resources/**/*.blade.php",
    "./resources/**/*.tsx",
  ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                body: ["Kameron", "Noto Sans JP", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
