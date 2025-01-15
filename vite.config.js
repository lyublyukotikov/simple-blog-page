import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/simple-blog-page/', // Убедитесь, что указано имя вашего репозитория
});
