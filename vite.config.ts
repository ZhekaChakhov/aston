import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          // svgr options
        },
      }),
    ],
    define: {
      "process.env": env,
    },
    resolve: {
      alias: {
        src: "/src",
      },
    },
  };
});
