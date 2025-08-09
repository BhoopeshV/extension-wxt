import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  vite: () => ({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  }),
  manifest: {
    permissions: ['sidePanel'],
    action: {
      default_title: 'Open JIRA Extension'
    }
  }
});