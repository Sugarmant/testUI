import { defineComponent, h } from 'vue'

const prefixCls = 't-progress';

import Icon from '../icon';
import { oneOf } from '../../utils/nurse';

export default defineComponent({
  name: 'Progress',
  emits: ['click'],
  props: {
    percent: {//百分比
      type: Number,
      default: 0
    },
    status: {//status
      validator(value: string) {
        return oneOf(value, ["normal", "active", "wrong", "success"])
      },
      default: "normal"
    },
    strokeWidth: {//进度条的线宽，单位 px
      type: Number,
      default: 10
    },
    strokeColor: {//进度条的颜色，支持传入数组，显示为渐变色
      type: [String, Array]
    },
    hideInfo: {//隐藏数值或状态图标
      type: Boolean,
      default: false
    },
    vertical: {//是否在垂直方向显示
      type: Boolean,
      default: false
    },
    textInside: {//已完成的分段百分比
      type: Boolean,
      default: false
    },
    successPercent: {//百分比是否置于进度条内
      type: Number,
      default: 0
    }

  },
  methods: {
    handleClickLink(event) {
      this.$emit('click', event);
    }
  },
  render() {
    return (
      <button>
        asdsa
      </button >
    )
  }
})
