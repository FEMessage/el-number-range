# el-number-range

[![NPM Download](https://img.shields.io/npm/dm/@femessage/el-number-range.svg)](https://www.npmjs.com/package/@femessage/el-number-range)
[![NPM Version](https://img.shields.io/npm/v/@femessage/el-number-range.svg)](https://www.npmjs.com/package/@femessage/el-number-range)
[![NPM License](https://img.shields.io/npm/l/@femessage/el-number-range.svg)](https://github.com/FEMessage/el-number-range/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/el-number-range/pulls)

数字范围输入框组件

![](http://thyrsi.com/t6/664/1548755405x2890174656.gif)

## Table of Contents

- [el-number-range](#el-number-range)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Feature](#feature)
  - [Documentation](#documentation)
  - [Install](#install)
  - [Example](#example)
      - [设置最大值](#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E5%80%BC)
      - [设置最小值](#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%B0%8F%E5%80%BC)
  - [Props](#props)
  - [License](#license)

## Introduction

数字范围输入框，适用于需要输入范围的场景，比如价格，积分范围。通过对外暴露 input 事件，使用者可以通过 v-model 进行范围绑定，上手简单。

[⬆ Back to Top](#table-of-contents)

## Feature

* 自动进行范围纠正;
* 可自定义输入框范围 min - max;

[⬆ Back to Top](#table-of-contents)

## Documentation

- [online demo](https://femessage.github.io/el-number-range/storybook/)
- [full api doc](https://femessage.github.io/el-number-range/)

[⬆ Back to Top](#table-of-contents)

## Install

```sh
# 确保提前安装了element-ui且注册了el-input-number
yarn add element-ui --save
```

```vue
// Step1 安装
yarn add el-number-range 

// Step2 在需要的.vue 文件中
<template>
    <el-number-range v-model="range"></el-number-range>
</template>

<script>
import ElNumberRange from '@femessage/el-number-range'

export default {
  components: {
    ElNumberRange
  },
  data() {
    return {
      version: [0, 1000]
    }
  }
}
</script>
```

[⬆ Back to Top](#table-of-contents)

## Example

#### 设置最大值

![max](http://thyrsi.com/t6/664/1548754376x2728306210.gif)

#### 设置最小值

![min](http://thyrsi.com/t6/664/1548754367x2728306210.gif)

[⬆ Back to Top](#table-of-contents)

## Props

| 参数                   | 说明                       | 类型    | 默认值 |
| ---------------------- | -------------------------- | ------- | ------ |
| value                  | 范围输入框默认值（支持v-model）| Array | []   |
| max                    | 输入框最大值                | Number  | Infinity   |
| min                    | 输入框最小值                | Number  | -Infinity   |
| separator              | 输入框分隔符                | String  |  -   |
| width                  | 输入框宽度                  | String  | 150px |



## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
