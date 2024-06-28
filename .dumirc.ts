import { defineConfig } from 'dumi';

const repo = 'happycharts-main'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'charts',
    // logo: process.env.NODE_ENV === 'production' ? `/${repo}/logo.png` : '/logo.png'
  },
  externals: {
    React: 'React',
  },
  headScripts: ['https://unpkg.com/react@18.2.0/umd/react.production.min.js', 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'],
  mfsu: false,
  // runtimePublicPath: {},
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/'
});
