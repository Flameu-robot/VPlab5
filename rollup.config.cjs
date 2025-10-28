// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    input: 'src/index.ts',
    output: [
        { file: 'dist/index.js', format: 'cjs', sourcemap: true },
        { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: false,
            jsx: 'react-jsx',
            rootDir: '.',
            include: ['src/**/*', 'app/**/*'],
            exclude: ['node_modules', 'dist', '.next', '**/*.test.tsx', '**/*.stories.tsx'],
            compilerOptions: {
                baseUrl: '.',
                paths: { '@/*': ['*'] },
                allowSyntheticDefaultImports: true,
                esModuleInterop: true,
                skipLibCheck: true,
                noEmit: true,
                module: 'ESNext',
                target: 'ES2017',
            },
        }),
        postcss({
            modules: true,
            extract: 'index.css',
            minimize: true,
            sourceMap: true,
        }),
        terser(),
    ],
};