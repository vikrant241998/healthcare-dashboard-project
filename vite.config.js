import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    darkMode: 'class', // Make sure it's 'class' NOT 'media'


  plugins: [
      tailwindcss(),
    react()
    
  ],
})
