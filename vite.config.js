// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: '/',
//   plugins: [react()],
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // outDir: 'build',
    outDir: 'dist',
    chunkSizeWarningLimit: 100000000,
  },
});