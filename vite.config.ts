import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: fix alias section
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
});
