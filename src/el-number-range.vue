<template>
  <div class="el-number-range">
    <el-input
      :style="{width}"
      type="number"
      v-model.number="minValue"
      @blur="clampMin($event)"
      @focus="handleFocus($event, 'min')"
    />
    <span class="separator">{{ separator }}</span>
    <el-input
      :style="{width}"
      type="number"
      v-model.number="maxValue"
      @blur="clampMax($event)"
      @focus="handleFocus($event, 'max')"
    />
  </div>
</template>
<script>
export default {
  name: 'ElNumberRange',
  props: {
    /**
     * 输入框的值上限
     */
    max: {
      type: Number,
      default: Infinity
    },
    /**
     * 输入框的值下限
     */
    min: {
      type: Number,
      default: -Infinity
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: '150px'
    },
    /**
     * 输入框分隔符
     */
    separator: {
      type: String,
      default: '-'
    },
    /**
     * 取数组第一位为最小值输入框的值，第二位为最大值输入框的值
     * @model
     */
    value: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    minValue: {
      get() {
        return this.value[0]
      },
      set(val) {
        if (val === '') val = undefined
        this.$emit('input', [val, this.maxValue])
      }
    },
    maxValue: {
      get() {
        return this.value[1]
      },
      set(val) {
        if (val === '') val = undefined
        this.$emit('input', [this.minValue, val])
      }
    }
  },
  methods: {
    clampMin(event) {
      this.$emit('blur', event, 'min')
      if (this.minValue === undefined) return
      let val = this.clamp(this.minValue)
      if (this.maxValue !== undefined) val = Math.min(val, this.maxValue)
      this.$emit('input', [val, this.maxValue])
    },
    clampMax(event) {
      this.$emit('blur', event, 'max')
      if (this.maxValue === undefined) return
      let val = this.clamp(this.maxValue)
      if (this.minValue !== undefined) val = Math.max(val, this.minValue)
      this.$emit('input', [this.minValue, val])
    },
    handleFocus(event, position) {
      this.$emit('focus', event, position)
    },
    clamp(val) {
      return Math.max(this.min, Math.min(this.max, val))
    }
  }
}
</script>
<style lang="stylus">
.el-number-range
  .separator
    color #888
    padding 0 8px
</style>
