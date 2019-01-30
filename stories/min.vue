<template>
  <div>
    <p>设置最小值：{{min}}</p>
    <el-number-range v-model="range" :min="min"></el-number-range>
  </div>

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

<style>
</style>
