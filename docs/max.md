设置最大值

```vue
<template>
  <el-number-range v-model="range" :max="max"></el-number-range>
</template>

<script>
export default {
  data() {
    return {
      range: [],
      max: 3333
    }
  }
}
</script>
```
