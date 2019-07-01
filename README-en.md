# El-number-range

[![](https://cdn.nlark.com/yuque/0/2019/svg/224563/1561960751889-d4d8cf71-81dd-4316-b470-96ec2f671707.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&size=0&status=done&width=90)](https://travis-ci.com/FEMessage/el-number-range)
[![](https://img.shields.io/npm/dm/@femessage/el-number-range.svg#align=left&display=inline&height=20&originHeight=20&originWidth=134&status=done&width=134)](https://www.npmjs.com/package/@femessage/el-number-range)
[![](https://img.shields.io/npm/v/@femessage/el-number-range.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80)](https://www.npmjs.com/package/@femessage/el-number-range)
[![](https://img.shields.io/npm/l/@femessage/el-number-range.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/el-number-range/blob/master/LICENSE)
[![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90)](https://github.com/FEMessage/el-number-range/pulls)
![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)

Digital range input box component<br />![](https://cdn.nlark.com/yuque/0/2019/png/224563/1561960749041-53b1cf53-f39d-4353-a450-5ed0e59fb061.png#align=left&display=inline&height=298&originHeight=298&originWidth=1034&size=0&status=done&width=1034)

<a name="65f5152b"></a>
## Table of Contents

- [Introduction](#introduction)
- [Feature](#feature)
- [Demo](#demo)
- [Install](#install)
- [Example](#example)
  - [Set maximum](#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E5%80%BC)
  - [Set minimum](#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%B0%8F%E5%80%BC)
- [License](#license)

<a name="Introduction"></a>
## Introduction

The digital range input box is suitable for scenarios where you need to enter a range, such as price and integral range. By exposing the input event to the outside world, the user can bind the scope through v-model, which is easy to use.<br />[⬆Back to Top](#table-of-contents)

<a name="Feature"></a>
## Feature

- Automatic range correction;
- Can customize the input box range min-max;<br />[⬆Back to Top](#table-of-contents)

<a name="Demo"></a>
## Demo

- [Doc and online demo](https://femessage.github.io/el-number-range/)<br />[⬆Back to Top](#table-of-contents)

<a name="Install"></a>
## Install

```html
# ensure installed element-ui and registered el-input-number
yarn add element-ui --save

# Step1 install
yarn add @femessage/el-number-range
```

```html
// Step2 In the required .vue file
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
      version: [0, 1000]
    }
  }
}
</script>
```

[⬆Back to Top](#table-of-contents)

<a name="Example"></a>
## Example

<a name="d00f99fd"></a>
### Set maximum

![](https://cdn.nlark.com/yuque/0/2019/png/224563/1561960748788-c67bb853-ea3e-43b6-b7e7-839ca6c23868.png#align=left&display=inline&height=904&originHeight=904&originWidth=1758&size=0&status=done&width=1758)

<a name="e993ecfb"></a>
### Set minimum

![](https://cdn.nlark.com/yuque/0/2019/png/224563/1561960749222-35cf5922-a17b-422f-ad79-b60d459ded9f.png#align=left&display=inline&height=904&originHeight=904&originWidth=1758&size=0&status=done&width=1758)<br />[⬆Back to Top](#table-of-contents)

<a name="Contributors"></a>
## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

| [![](https://avatars0.githubusercontent.com/u/20603896?v=4#alt=linrunzheng&width=100)<br />**linrunzheng**](https://github.com/linrunzheng)<br />[💻](https://github.com/FEMessage/el-number-range/commits?author=linrunzheng) [📖](https://github.com/FEMessage/el-number-range/commits?author=linrunzheng) | [![](https://avatars3.githubusercontent.com/u/19513289?v=4#alt=EVILLT&width=100)<br />**EVILLT**](https://evila.me)<br />[🚇](#infra-evillt) | [![](https://avatars3.githubusercontent.com/u/19591950?v=4#alt=Donald%20Shen&width=100)<br />**Donald Shen**](https://donaldshen.github.io/portfolio)<br />[🐛](https://github.com/FEMessage/el-number-range/issues?q=author%3Adonaldshen) [📖](https://github.com/FEMessage/el-number-range/commits?author=donaldshen) | [![](https://avatars3.githubusercontent.com/u/9384365?v=4#alt=levy&width=100)<br />**levy**](https://github.com/levy9527/blog)<br />[🚇](#infra-levy9527) [👀](#review-levy9527) |
| --- | --- | --- | --- |


