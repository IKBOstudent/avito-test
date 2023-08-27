import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr(), eslint(), react()],
    resolve: {
        alias: {
            '@app': path.resolve('src/app'),
            '@entities': path.resolve('src/entities'),
            '@features': path.resolve('src/features'),
            '@pages': path.resolve('src/pages'),
            '@shared': path.resolve('src/shared'),
            '@widgets': path.resolve('src/widgets'),
        },
    },
});
