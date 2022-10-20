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
            },
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
    data() {
        return {
            slots: this.$slots.default && this.$slots.default()
        }
    },
    methods: {
        handleClickLink (event) {
            this.$emit('click', event);
        },
        updateChildProps (isInit) {
            const slots = this.$slots.default && this.$slots.default()
            const total = slots?.length
            slots && slots.forEach((child, index) => {
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
                    slots[index - 1].nextError = true
                }
            })
            this.slots = slots
        },
        setNextError() {
            this.slots && this.slots.forEach((child, index) => {
                if(child.currentStatus != 'error' && index != 0) {
                    this.slots[index - 1].nextError = true
                }
                this.slots[index].props['currentStatus'] = child.currentStatus
            })
        },
        updateCurrent() {
            const len = this.slots ? this.slots.length : 0;
            if (this.current < 0 || this.current >= len) {
                return
            }
        },
        debouncedAppendRemove() {
            return debounce(function () {
                this.updateSteps()
            })
        },
        updateSteps () {
            this.updateChildProps(true)
            this.setNextError()
            this.updateCurrent(true)
        }
    },
    mounted () {
        this.updateSteps();
        this.debouncedAppendRemove()
        this.setNextError()
        // this.$on('append', this.debouncedAppendRemove());
        // this.$on('remove', this.debouncedAppendRemove());
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
        const slots = this.slots
        const classes = this.classes
        console.log(this.slots)
        return (
            <div class={classes}>
                <slot>
                    {slots ? slots : null}
                </slot>
            </div>
        )
    }
})
