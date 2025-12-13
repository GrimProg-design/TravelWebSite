import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    include: [
      'base64-js',
      'buffer', 
      'worldwindjs',
    ],
  },

  resolve: {
    alias: {
      // Requires: npm install --save-dev buffer
      // (Но часто optimizeDeps достаточно)
      // 'buffer': 'buffer/' 
    }
  }
})