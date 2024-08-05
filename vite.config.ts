import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@shared": "/src/shared",
      "@widgets": "/src/widgets",
      "@pages": "/src/pages",
    },
  },
  server: {
    proxy: {
      '/proxy_cors': {
        target: 'https://21ce-212-45-6-6.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy_cors/, ''),
      },
    },
  },
});
