import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
  ],
  framework: {
    "name": "@storybook/react-vite",
    "options": {}
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
