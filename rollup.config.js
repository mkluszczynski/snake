import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/bin.js",
    format: "cjs",
    plugins: [terser()],
    banner: "#!/usr/bin/env node",
  },
  plugins: [typescript({ compilerOptions: { module: "esnext" } })],
};
