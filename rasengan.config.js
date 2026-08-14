import { defineConfig } from 'rasengan';
import { rasengan } from 'rasengan/plugin';

export default defineConfig({
  ssr: false,
  vite: {
    plugins: [rasengan()],
  },
});
