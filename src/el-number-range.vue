<template>
  <div class="el-number-range">
    <el-input :style="{width}" type="number" v-model.number="minValue"/>
    <span class="separator">{{ separator }}</span>
    <el-input :style="{width}" type="number" v-model.number="maxValue"/>
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
        if (this.isNum(val)) {
          val = this.clamp(val)
          if (this.isNum(this.maxValue)) val = Math.min(val, this.maxValue)
        } else {
          val = undefined
        }
        this.$emit('input', [val, this.maxValue])
      }
    },
    maxValue: {
      get() {
        return this.value[1]
      },
      set(val) {
        if (this.isNum(val)) {
          val = this.clamp(val)
          if (this.isNum(this.minValue)) val = Math.max(val, this.minValue)
        } else {
          val = undefined
        }
        /**
         * 配合v-model使用
         */
        this.$emit('input', [this.minValue, val])
      }
    }
  },
  methods: {
    clamp(val) {
      return Math.max(this.min, Math.min(this.max, val))
    },
    isNum: n => typeof n === 'number'
  }
}
</script>
<style lang="stylus">
.el-number-range
  .separator
    color #888
    padding 0 8px
</style>
