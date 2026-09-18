import { defineConfig } from 'tsup';
import packageJson from './package.json';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  clean: true,
  minify: false,
  sourcemap: false,
  define: {
    'process.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)
  }
});
