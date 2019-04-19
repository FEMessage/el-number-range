设置最小值

```vue
<template>
  <el-number-range v-model="range" :min="min"></el-number-range>
</template>

<script>
export default {
  data() {
    return {
      range: [],
      min: 20
    }
  }
}
</script>
```
