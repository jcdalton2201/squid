import { globbySync } from 'globby';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import postCSSPlugin from 'rollup-plugin-postcss';
import postCSS from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import { terser } from 'rollup-plugin-terser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import gzipPlugin from 'rollup-plugin-gzip';
// const postCSS = postCSSPlugin({
//     inject: false,
//     minimize: {
//         discardComments: true,
//     },
// });
const ignore = ['src/build.js', 'src/**/*stories.js'];
const files = globbySync('src/**/*.js', { ignore });
console.log(files);
const external = files.map(file => path.resolve(__dirname, file));

const individualFiles = files.map(input => ({
    input,
    output: [
        {
            file: input.replace('src', 'dist'),
            format: 'esm',
        },
    ],
    external,
    plugins: [postCSS({
        inject: false,
        minimize: {
            discardComments: true,
        },
    }),postcssLit()],
}));

const bundelFiles = {
    input: 'src/build.js',
    output: [
        {
            file: 'dist/squid-core-ui.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [resolve(), commonjs(), postCSS({
        inject: false,
        minimize: {
            discardComments: true,
        }}), postcssLit()],
};
const minFiles = {
    input: 'src/build.js',
    output: [
        {
            file: 'dist/squid-core-ui.min.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [resolve(), commonjs(), postCSS({
        inject: false,
        minimize: {
            discardComments: true,
        }}), postcssLit(), terser(), gzipPlugin({fileName: '.js'})],
};
export default [...individualFiles, bundelFiles,minFiles];
