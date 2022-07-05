import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from "rollup-plugin-postcss";
import postCssImport from "postcss-import";

const outputFolder = 'public';
// eslint-disable-next-line no-undef
const watching = process.env.ROLLUP_WATCH === "true";


export default {
  input: 'src/index.js',
  output: {
    file: `${outputFolder}//app.js`,
    format: 'iife',
    sourcemap: true,
  },
  plugins: [commonjs({
    include: 'node_modules/**'
  }) ,
    babel({babelHelpers: 'bundled'}),
    resolve({browser: true}),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' ),
      'preventAssignment': true
    }),
      postcss({
      plugins: [postCssImport]
    })

].concat(
watching? [
  serve({contentBase: outputFolder, port: 10001}),
  livereload()
]:[]
)
};
