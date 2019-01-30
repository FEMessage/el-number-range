(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('babel-runtime/helpers/slicedToArray')) :
  typeof define === 'function' && define.amd ? define(['exports', 'babel-runtime/helpers/slicedToArray'], factory) :
  (factory((global.ElNumberRange = {}),global._slicedToArray));
}(this, (function (exports,_slicedToArray) { 'use strict';

  _slicedToArray = _slicedToArray && _slicedToArray.hasOwnProperty('default') ? _slicedToArray['default'] : _slicedToArray;

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = ".el-number-range .separator { color: #888; padding: 0 8px; } ";style.type = 'text/css';if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }head.appendChild(style);
    }
  })();

  var Component = { render: function render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "el-number-range" }, [_c('el-input', { style: { width: _vm.width }, attrs: { "type": "number", "value": _vm.minValue }, on: { "input": function input($event) {
            _vm.onInput($event, _vm.maxValue);
          }, "blur": _vm.onMinBlur } }), _vm._v(" "), _c('span', { staticClass: "separator" }, [_vm._v(_vm._s(_vm.separator))]), _vm._v(" "), _c('el-input', { style: { width: _vm.width }, attrs: { "type": "number", "value": _vm.maxValue }, on: { "input": function input($event) {
            _vm.onInput(_vm.minValue, $event);
          }, "blur": _vm.onMaxBlur } })], 1);
    }, staticRenderFns: [],
    name: 'ElNumberRange',
    props: {
      /**
       * 最大值
       */
      max: {
        type: Number,
        default: Infinity
      },
      /**
       * 最小值
       */
      min: {
        type: Number,
        default: -Infinity
      },
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
       * 输入框默认值
       */
      value: {
        type: Array,
        validator: function validator(range) {
          return range.every(function (v) {
            return !v || !isNaN(v) ? true : false;
          });
        },

        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      var _value = _slicedToArray(this.value, 2),
          minValue = _value[0],
          maxValue = _value[1];

      return {
        minValue: minValue,
        maxValue: maxValue
      };
    },

    watch: {
      // 同步max,min为传进来的value
      value: function value(data) {
        var _data = _slicedToArray(data, 2),
            minValue = _data[0],
            maxValue = _data[1];

        this.minValue = minValue;
        this.maxValue = maxValue;
      }
    },
    methods: {
      onInput: function onInput(min, max) {
        this.$emit('input', [min, max]);
      },

      // min框失去焦点时若min>max,将min调小为
      onMinBlur: function onMinBlur(e) {
        // 输入是字符串
        var value = e.target.value;
        var max = this.maxValue ? Number(this.maxValue) : undefined;

        // 空字符串
        if (!value) {
          this.emitInputNextTick([undefined, max]);

          return;
        }

        value = Math.max(Number(value), this.min);

        // undefined 不能比较
        if (max) {
          value = Math.min(value, max);
        }

        this.emitInputNextTick([value, max]);
      },

      // max框失去焦点时若max<min, 则将max调大
      onMaxBlur: function onMaxBlur(e) {
        var value = e.target.value;
        var min = this.minValue ? Number(this.minValue) : undefined;

        // 空字符串
        if (!value) {
          this.emitInputNextTick([min, undefined]);

          return;
        }

        value = Math.min(Number(value), this.max);

        // undefined 不能比较
        if (min) {
          value = Math.max(value, min);
        }
        this.emitInputNextTick([min, value]);
      },
      emitInputNextTick: function emitInputNextTick() {
        var _this = this;

        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [undefined, undefined];

        this.$nextTick(function () {
          _this.$emit('input', value);
        });
      }
    }
  };

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('ElNumberRange', Component);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install

    // To auto-install when vue is found
  };var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = Component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
