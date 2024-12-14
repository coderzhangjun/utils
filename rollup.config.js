import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "utils",
    },
    {
      file: "dist/utils.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json", // 使用独立的 TS 配置文件
    }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
