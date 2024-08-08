import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: { Buffer: true, global: true, process: true }
    })
  ],
})
// 1 scatter
// 2 chat
// 3 obvious
// 4 high
// 5 royal
// 6 custom
// 7 retreat
// 8 embark
// 9 achieve
// 10 dream
// 11 slow
// 12 water
// 13 tackle
// 14 noise
// 15 noise
// 16 tool
// 17 tray
// 18 net
// 19 chest
// 20 visa
// 21 kite
// 22 combine
// 23 inhale
// 24 salmon
