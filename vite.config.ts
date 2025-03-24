import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['core-js/modules/es.object.to-string.js']
  },
  build: {
    commonjsOptions: {
      include: [/core-js/]
    }
  }
});
