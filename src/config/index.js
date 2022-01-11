import defaultConfig from './default.json';
import productionConfig from './production.json';

const config =
  process.env.NODE_ENV !== 'production' ? defaultConfig : productionConfig;

export const { env, theme, contact, content } = config;
