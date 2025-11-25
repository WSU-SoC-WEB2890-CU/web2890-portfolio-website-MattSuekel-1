import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),

        work: resolve(__dirname, "work/index.html"),
        photo: resolve(__dirname, "work/photo.html"),
        accessibility: resolve(__dirname, "work/accessibility.html"),
        westie: resolve(__dirname, "work/westie.html"),
        cardeal: resolve(__dirname, "work/cardeal.html"),
        weddingform: resolve(__dirname, "work/weddingform.html"),
        bookshelf: resolve(__dirname, "work/bookshelf.html"),
      },
    },
  },
})