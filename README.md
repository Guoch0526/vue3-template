# vue3-template

## 简介

vue3 项目模板

技术栈： Vue3 + Vite + Typescript + Element-Plus
## 相关路径
- 组件库地址：https://element-plus.gitee.io/#/zh-CN
- Vite官方文档：https://cn.vitejs.dev/


## 开发说明

| 路径引用别名 | 地址/路径      | 说明     |
| ------------ | -------------- | -------- |
| @            | src            | -        |


## 提交规范

| 类型 | 英文     | 描述                                                         |
| ---- | -------- | ------------------------------------------------------------ |
| 特性 | feat     | 新的功能、特性                                               |
| 修复 | fix      | 缺陷修复                                                     |
| 样式 | style    | 不影响功能的样式更新、格式调整                               |
| 重构 | refactor | 功能模块的重构                                               |
| 性能 | perf     | 功能的性能调整                                               |
| 测试 | test     | 添加新的单元测试                                             |
| 工具 | chore    | 构建过程或辅助工具的变动，如 webpack.cofong，package.json 等 |
| 回滚 | revert   | 代码回滚                                                     |

## 代码目录说明

```javascript
├── public
├── src
│   ├── App.vue
│   ├── env.d.ts
│   ├── shim.d.ts
│   ├── api         // 接口请求相关
│   ├── assets      // 项目静态资源目录
│   │   └── styles
│   ├── components  // 通用组件
│   ├── config  
│   │   ├── cgi.ts  // 接口地址配置
│   │   ├── constants.ts  // 常量配置
│   │   └── index.ts    // 项目配置相关
│   ├── main.ts         // 主入口
│   ├── pages           // 项目页面
│   │   └── index.vue
│   ├── plugins
│   │   └── axios       // axios 配置
│   ├── router
│   │   └── index.ts    // 路由配置
│   ├── store           // vuex 配置
│   │   └── index.ts
│   └── utils           // 工具类
│       └── index.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
├── babel.config.js
└── yarn.lock
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cn.vitejs.dev/config/).
