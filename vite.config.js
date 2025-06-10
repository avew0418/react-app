import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-app/', // 這裡要和你的 repo 名稱一樣
});