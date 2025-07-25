import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {TanStackRouterVite} from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [ TanStackRouterVite() , react({
    babel :{
      // plugins :[
      //   "babel-plugin-react-compiler",{
      //     target : "19",
      //   }
      // ]
    }
  })],
});
