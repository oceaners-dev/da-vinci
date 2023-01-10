import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    'react',
    'oceaners-hooks',
    'chroma-js',
    'next/image',
    'prism-react-renderer',
    'prism-react-renderer/themes/nightOwl',
    'next/link',
    'react-uuid',
    'react-dom/client',
    'react-dom',
    'classnames',
    'react/jsx-runtime',
  ],
  plugins: [typescript(), commonjs()],
}
