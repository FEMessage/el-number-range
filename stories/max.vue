<template>
  <div>
    <p>设置最大值：{{max}}</p>
    <el-number-range v-model="range" :max="max"></el-number-range>
  </div>

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

<style>
</style>
