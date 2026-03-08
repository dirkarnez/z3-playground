import { viteStaticCopy } from 'vite-plugin-static-copy';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
import topLevelAwait from 'vite-plugin-top-level-await';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: "/z3-playground/",
  build: {
    rollupOptions: {
      plugins: [
        nodePolyfills()
      ]
    }
  },
  define: { 
    global: 'globalThis',
    'process.env': {},
  },
  plugins: [
    nodePolyfills({
      include: ['util', 'buffer', 'process', 'path', 'stream', 'events', 'assert'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
    topLevelAwait(),
    crossOriginIsolation(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/z3-solver/build/z3-built.js', dest: '.'
        },
        {
          src: 'node_modules/z3-solver/build/z3-built.wasm', dest: '.'
        }
      ]
    }),
  ]
}

export default config
