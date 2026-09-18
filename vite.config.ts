import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, type LibraryFormats } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isStandalone = mode === 'standalone';

  return {
    base: './',
    root: resolve(import.meta.dirname, 'src'),
    publicDir: resolve(import.meta.dirname, 'public'),
    build: {
      emptyOutDir: !isStandalone,
      outDir: '../lib',
      lib: {
        entry: resolve(import.meta.dirname, isStandalone ? 'src/standalone.tsx' : 'src/index.tsx'),
        name: isStandalone ? 'standalone' : 'index',
        fileName: isStandalone ? 'standalone' : 'index',
        formats: ['es', 'cjs'] as LibraryFormats[],
      },
      rollupOptions: {
        external: isStandalone ? [] : ['react', 'react-dom', 'react/jsx-runtime'],
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          math: 'always',
          globalVars: {
            mainColor: 'red',
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      },
    },
    assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
    plugins: [
      react(),
      cssInjectedByJsPlugin(),
      dtsPlugin({ insertTypesEntry: true }),
    ],
    server: {
      open: true,
      port: 5173,
    },
  };
});
