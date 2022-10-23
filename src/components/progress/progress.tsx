import { defineComponent, h } from 'vue'

const prefix = 't-progress';

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
    status: {//状态，可选值为normal、active、wrong、success
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
    hideInfo: Boolean, //隐藏数值或状态图标
    // { type: Boolean,
    //   default: false
    // },
    vertical: Boolean,
    // {//是否在垂直方向显示
    //   type:Boolean ,
    //   default: false
    // },
    textInside: Boolean,
    //  {//百分比是否置于进度条内
    //   type: Boolean,
    //   default: false
    // },
    successPercent: {//已完成的分段百分比
      type: Number,
      default: 0
    }

  },
  render() {
    return (
      <progress
        class={
          {
            [prefix]: true,
            [`${prefix}-${this.percent}`]: this.percent != 'default',
            [`${prefix}-${this.status}`]: this.status != 'default',
            [`${prefix}-${this.strokeWidth}`]: this.strokeWidth != 'default',
            [`${prefix}-${this.strokeColor}`]: this.strokeColor != 'default',
            [`${prefix}-${this.hideInfo}`]: this.hideInfo,
            [`${prefix}-${this.vertical}`]: this.vertical,
            [`${prefix}-${this.textInside}`]: this.textInside,
            [`${prefix}-${this.successPercent}`]: this.successPercent != 'default',
          }
        }>
      </progress>
    )
  }
})
