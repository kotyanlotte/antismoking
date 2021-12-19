const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/src/components/router/Routing.tsx", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .version()
    .webpackConfig({
        resolve: {
            extensions: [".ts", ".tsx"],
            alias: {
                "@": path.resolve(__dirname, "resources/src/"),
            },
        },
        output: {
            publicPath: "/",
            chunkFilename: "js/chunks/[name].chunk.js",
        },
    })
    .browserSync({
        files: [
            "resources/src/**/*.tsx",
            "resources/src/**/*.ts",
            "public/**/*.*",
        ],
        proxy: "http://127.0.0.1:8000",
    });
