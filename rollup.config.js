/*
 * rollup 配置文件
 */

export default {
  input: 'index.js',
  output: {
    dir: 'package',
    format: 'cjs',
    sourcemap: true,
    exports: 'named'
  },
  //告诉rollup不要将此打包，而作为外部依赖
  external: ['react', 'lib', ''],
  // 是否开启代码分割
  experimentalCodeSplitting: false,
  plugins: []
};
