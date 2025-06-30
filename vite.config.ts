import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Restaurante-30-06/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
