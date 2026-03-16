import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://smosquera-m.github.io',
  base: '/portfolio-astro',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
    routing: {
        prefixDefaultLocale: false
    }
  }
});
