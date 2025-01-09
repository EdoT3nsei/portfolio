// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [
    react(),
    markdown()
  ],
  resolve: {
    alias: {
      '@': '/src',
      buffer: 'buffer'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  }
});