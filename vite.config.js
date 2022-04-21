import { defineConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
  server: {
    port: 8080
  },
  base: process.env.NODE_ENV === 'production'
    ? '/web-component-in-vue/'
    : '/',
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ce.js'),
      name: 'CustomElement',
      fileName: (format) => `custom-elements.${format}.js`
    }
  }
})
