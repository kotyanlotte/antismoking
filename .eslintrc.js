// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "simple-import-sort"],
    rules: {
        "import/no-relative-packages": "error",
        "import/no-relative-parent-imports": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/newline-after-import": "error",
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            webpack: {
                config: "node_modules/laravel-mix/setup/webpack.config.js",
            },
        },
    },
};
