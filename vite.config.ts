import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://arc-menace.github.io/WordleDupe/",
  plugins: [vue()],
})
