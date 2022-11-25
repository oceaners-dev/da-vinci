import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import tailwind from 'rollup-plugin-tailwind';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        modules: true,
        extract: true,
      }),
      tailwind({
        config: './tailwind.config.js',
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: 'example/components/da-vinci-ui/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
  },
];
