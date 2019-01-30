import {storiesOf} from '@storybook/vue'
import Basic from './basic.vue'
import Min from './min.vue'
import Max from './max.vue'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

storiesOf('el-semver-input', module)
  .add('bsasic', () => ({
    components: {Basic},
    template: `<Basic/>`
  }))
  .add('min', () => ({
    components: {Min},
    template: `<Min/>`
  }))
  .add('max', () => ({
    components: {Max},
    template: `<Max/>`
  }))
