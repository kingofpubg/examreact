import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/examreact/',   // 👈 cực kỳ quan trọng
  plugins: [react()],
})