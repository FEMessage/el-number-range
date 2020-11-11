## 在 TypeScript 中指定组件的类型

```html
<script lang="ts">
// 需要引入这个
// import { ElNumberRangeType } from '@femessage/el-number-range'
export default {
  mounted() {
    (this.$refs.numberRange as ElNumberRangeType).width = '120px'
  },
}
</script>
```
