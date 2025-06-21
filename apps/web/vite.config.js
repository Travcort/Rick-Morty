import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactNativeWeb from "vite-plugin-react-native-web";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    reactNativeWeb()
  ],
  resolve: {
    extensions: ['.web.jsx', '.jsx', '.js', '.json'],
  },
  base: process.env.VITE_BASE_PATH
})
