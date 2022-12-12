import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Elevate Digital Blog Template',
  description: 'A feature-rich blog with markdown',
  site: 'https://elevate-astro.netlify.app/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});