export default {
  input: 'index.js',
  output: {
    dir: 'package',
    format: 'cjs',
    sourcemap: true,
    exports: 'named'
  },
  external: ['react', 'lib', ''],
  experimentalCodeSplitting: false,
  plugins: []
};
