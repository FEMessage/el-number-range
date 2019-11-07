# el-number-range

[![Build Status](https://travis-ci.com/FEMessage/el-number-range.svg?branch=master)](https://travis-ci.com/FEMessage/el-number-range)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/el-number-range.svg)](https://www.npmjs.com/package/@femessage/el-number-range)
[![NPM Version](https://img.shields.io/npm/v/@femessage/el-number-range.svg)](https://www.npmjs.com/package/@femessage/el-number-range)
[![NPM License](https://img.shields.io/npm/l/@femessage/el-number-range.svg)](https://github.com/FEMessage/el-number-range/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/el-number-range/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

数字范围输入框组件

![introduce](https://i.screenshot.net/8lw5osg)

## Table of Contents <!-- omit in toc -->

* [Introduction](#introduction)
* [Feature](#feature)
* [Demo](#demo)
* [Install](#install)
* [Example](#example)
  * [设置最大值](#设置最大值)
  * [设置最小值](#设置最小值)
* [License](#license)

## Introduction

数字范围输入框，适用于需要输入范围的场景，比如价格，积分范围。

[⬆ Back to Top](#table-of-contents)

## Feature

* 自动进行范围纠正
* 可自定义输入框范围 min/max

[⬆ Back to Top](#table-of-contents)

## Demo

* [doc and online demo](https://femessage.github.io/el-number-range/)

[⬆ Back to Top](#table-of-contents)

## Install

```sh
# 确保提前安装了element-ui且注册了el-input-number
yarn add element-ui --save

# Step1 安装
yarn add @femessage/el-number-range
```

```vue
// Step2 在需要的.vue 文件中
<template>
  <el-number-range v-model="range" />
</template>

<script>
import ElNumberRange from '@femessage/el-number-range'

export default {
  components: {
    ElNumberRange
  },
  data() {
    return {
      range: [0, 1000]
    }
  }
}
</script>
```

[⬆ Back to Top](#table-of-contents)

## Example

### 设置最大值

![max](https://i.screenshot.net/e3yvzt8)

### 设置最小值

![min](https://i.screenshot.net/4n4pmum)

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/linrunzheng"><img src="https://avatars0.githubusercontent.com/u/20603896?v=4" width="100px;" alt="linrunzheng"/><br /><sub><b>linrunzheng</b></sub></a><br /><a href="https://github.com/FEMessage/el-number-range/commits?author=linrunzheng" title="Code">💻</a> <a href="https://github.com/FEMessage/el-number-range/commits?author=linrunzheng" title="Documentation">📖</a></td><td align="center"><a href="https://evila.me"><img src="https://avatars3.githubusercontent.com/u/19513289?v=4" width="100px;" alt="EVILLT"/><br /><sub><b>EVILLT</b></sub></a><br /><a href="#infra-evillt" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="https://donaldshen.github.io/portfolio"><img src="https://avatars3.githubusercontent.com/u/19591950?v=4" width="100px;" alt="Donald Shen"/><br /><sub><b>Donald Shen</b></sub></a><br /><a href="https://github.com/FEMessage/el-number-range/issues?q=author%3Adonaldshen" title="Bug reports">🐛</a> <a href="https://github.com/FEMessage/el-number-range/commits?author=donaldshen" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/levy9527/blog"><img src="https://avatars3.githubusercontent.com/u/9384365?v=4" width="100px;" alt="levy"/><br /><sub><b>levy</b></sub></a><br /><a href="#infra-levy9527" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#review-levy9527" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
