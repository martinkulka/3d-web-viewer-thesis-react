import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import copy from 'rollup-plugin-copy';

const itkConfig = path.resolve(__dirname, 'src', 'itkConfig.js');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'node_modules/itk-wasm/dist/web-workers', dest: 'dist/itk' },
        {
          src: 'node_modules/itk-image-io',
          dest: 'dist/itk',
          rename: 'image-io',
        },
        {
          src: 'node_modules/itk-mesh-io',
          dest: 'dist/itk',
          rename: 'mesh-io',
        },
      ],
      hook: 'writeBundle',
    }),
  ],
  resolve: {
    // where itk-wasm code has 'import ../itkConfig.js` point to the path of itkConfig
    alias: {
      '../itkConfig.js': itkConfig,
      '../../itkConfig.js': itkConfig,
    },
  },
});
