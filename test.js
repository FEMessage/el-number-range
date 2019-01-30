import {shallowMount} from '@vue/test-utils'
import ElNumberRange from './src/el-number-range'

import Vue from 'vue'
import elementUI from 'element-ui'

Vue.use(elementUI)

describe('Component.ElNumberRange', () => {
  const wrapper = shallowMount(ElNumberRange, {
    propsData: {
      separation: 'Hello'
    }
  })
})
