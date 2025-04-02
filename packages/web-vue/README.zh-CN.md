<div align="center">
  <a href="https://uxd.lenovo.com/genedesign" target="_blank">
    <img alt="Gene Design Logo" width="200" src="https://uxd.lenovo.com/icon.svg"/>
  </a>
</div>

<div align="center">
  <h1>Gene Design</h1>
</div>

<div align="center">

基于 [gene Design](https://uxd.lenovo.com/genedesign/) 的 Vue UI 组件库。

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

# 特性

## 全面

60多个开箱即用的高质量组件, 可以覆盖绝大部份的业务场景。

## TypeScript 友好

所有组件都是用 TypeScript 编写的，所以天然的类型友好。

# 安装

[npm package](https://www.npmjs.com/package/genedesign)

```bash
// with npm
npm install genedesign

// with yarn
yarn add genedesign
```

# 例子

```typescript
import { createApp } from 'vue'
import geneVue from 'genedesign';
import App from './App.vue';
import 'genedesign/dist/gene.css';

const app = createApp(App);
app.use(geneVue);
app.mount('#app');
```

## 开发

1. 使用 `npm install -g` 安装 `lerna` 和 `yarn` 等基础包

2. 使用 `yarn install` 安装 `workspaces` 中各个包的依赖（如果遇到 `YN0018` 错误，可以使用 `YARN_CHECKSUM_BEHAVIOR=update yarn` 进行安装）

3. 使用 `npm run init` 初始化项目


# 相关链接

* [官网](https://uxd.lenovo.com/genedesign/)



