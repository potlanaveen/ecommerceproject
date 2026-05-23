import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/',
  plugins: [react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    })
  ],
  resolve: {
    alias: {
      // Prevent apminsight from loading on client side
      'apminsight': false,
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      // Handle node built-ins
      supported: {
        bigint: true,
      }
    },
    exclude: ['apminsight']
  }
})
