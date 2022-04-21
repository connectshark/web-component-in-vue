# web-component-in-vue
[![build status](https://github.com/connectshark/web-component-in-vue/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/connectshark/web-component-in-vue/actions/workflows/deploy.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/web-component-in-vue.svg?style=flat)](https://github.com/connectshark/web-component-in-vue)
![GitHub stars](https://img.shields.io/github/stars/connectshark/web-component-in-vue.svg?style=social&label=Stars&style=plastic)


![https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![https://img.shields.io/badge/tailwindcss-35495E?style=for-the-badge&logo=tailwindcss&logoColor=38BCF8](https://img.shields.io/badge/tailwindcss-35495E?style=for-the-badge&logo=tailwindcss&logoColor=38BCF8)


開發vue3使用的快速模板

## 專案已包含內容

### 插件

- vue cli
- vue3
- vue-router
- vuex

### cdn

- [boxicon](https://boxicons.com/)
- Roboto Mono字型
- Noto Sans TC字型

### github

- github action自動部署置`gh-page`

## 使用template首次設定

你可以點選 `use this template` 直接將此模板複製到自己的github上

接者你需要手動修改幾個部分

### 1. 專案更名

- `package.json`中的專案名稱
- `package-lock.json`中的專案名稱
- `vite.config.js`中的`base`
主要是把專案名稱命名為自訂的專案名稱

### 2. 推上github後開啟專案page的功能

`setting` -> `page` -> `source` -> 選擇 `gh-page`