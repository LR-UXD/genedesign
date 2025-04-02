<div align="center">
  <a href="https://uxd.lenovo.com/genedesign" target="_blank">
    <img alt="Gene Design Logo" width="200" src="https://uxd.lenovo.com/icon.svg"/>
  </a>
</div>
<div align="center">
  <h1>Gene Design</h1>
</div>

<div align="center">

A comprehensive Vue UI components library based on the [Gene Design](https://uxd.lenovo.com/genedesign/) system.

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Features

## Comprehensive

With more than 60 crafted components that you can use out of the box.


## TypeScript friendly

All components are written in TypeScript so it's type friendly.

# Installation

Available as an [npm package](https://www.npmjs.com/package/genedesign)

```bash
// with npm
npm install genedesign

// with yarn
yarn add genedesign
```

# Examples

```typescript
import { createApp } from 'vue'
import GeneVue from 'genedesign';
import App from './App.vue';
import 'genedesign/dist/gene.css';

const app = createApp(App);
app.use(GeneVue);
app.mount('#app');
```

## Development

1. Use `npm install` to install basic packages such as `lerna` and `yarn`

2. Use `yarn install` to install the dependencies of each package in `workspaces` (If you encounter a `YN0018` error, you can use `YARN_CHECKSUM_BEHAVIOR=update yarn` to install)

3. Use `npm run init` to initialize the project

# Useful Links

* [Documentation website](https://uxd.lenovo.com/genedesign/)
