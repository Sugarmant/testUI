import {defineComponent,h} from 'vue'
import { oneOf } from "../../utils/nurse";

const prefixCls = 't-steps'
function debounce (fn) {
    let waiting;
    return function() {
        if(waiting) return;
        waiting = true;
        const context = this, args = arguments;
        const later = function () {
            waiting = false;
            fn.apply(context, args)
        }
        this.$nextTick(later)
    }
}
export default defineComponent({
    name: 'Steps',
    emits: ['click'],
    props: {
        current: {
            type: Number,
            default: 0
        },
        status: {
            validator (value) {
                return oneOf(value, ['wait', 'process', 'finish', 'error']);
            },
            default: 'process'
        },
        size: {
            validator (value) {
                return oneOf(value, ['small']);
            }
        },
        direction: {
            validator (value) {
                return oneOf(value, ['horizontal', 'vertical']);
            },
            default: 'horizontal'
        }
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.direction}`,
                {
                    [`${prefixCls}-${this.size}`]: !!this.size
                }
            ]
        }
    },
    methods: {
        handleClickLink (event) {
            this.$emit('click', event);
        },
        updateChildProps (isInit) {
            const total = this.$children.length;
            this.$children.forEach((child, index) => {
                child.stepNumber = index + 1;
                if(this.direction === 'horizontal') {
                    child.total = total
                }

                // 如果已存在status,且在初始化时,则略过
                // todo 如果当前是error,在current改变时需要处理
                if(!(isInit && child.currentStatus)) {
                    if(index === this.current) {
                        if(this.current != 'error') {
                            child.currentStatus = 'process'
                        }
                    } else if (index < this.current) {
                        child.currentStatus = 'finish'
                    } else {
                        child.currentStatus = 'wait'
                    }
                }

                if(child.currentStatus != 'error' && index != 0) {
                    this.$children[index - 1].nextError = true
                }
            })
        },
        setNextError() {
            this.$children.forEach((child, index) => {
                this.$children[index - 1].nextError = true
            })
        },
        updateCurrent() {
            if (this.current < 0 || this.current >= this.$children.length) {
                return
            }
        },
        debouncedAppendRemove() {
            return debounce(function () {
                // this.updateChildProps()
            })
        }
    },
    mounted () {
        this.updateSteps();
        this.$on('append', this.debouncedAppendRemove());
        this.$on('remove', this.debouncedAppendRemove());
    },
    watch: {
        current () {
            this.updateChildProps();
        },
        status () {
            this.updateCurrent();
        }
    },
    render () {
        const stepNumber = this.stepNumber;
        const title = this.title;
        const content = this.content;
        return (
            <div>
                <div class="wrapClasses" style="styles">
                    <div class="[prefixCls + '-tail']"><i></i></div>
                    <div class="[prefixCls + '-head']">
                        <div class="[prefixCls + '-head-inner']">
                            <slot name="status">
                                <span v-if="!this.icon && this.currentStatus != 'finish' && this.currentStatus != 'error'">{{ stepNumber }}</span>
                                <span v-else class="iconClasses"></span>
                            </slot>
                        </div>
                    </div>
                    <div class="[prefixCls + '-main']">
                        <div class="[prefixCls + '-title']">{{ title }}</div>
                        <slot>
                            <div v-if="this.content" class="[prefixCls + '-content']">{{ content }}</div>
                        </slot>
                    </div>
                </div>
            </div>
        )
    }
})
