import {defineComponent,h} from 'vue'
import {oneOf} from "../../utils/nurse";

const prefixCls = 'ivu-steps';
const iconPrefixCls = 'ivu-icon';
export default defineComponent({
    name: 'Step',
    emits: ['click'],
    props: {
        status: {
            validator (value) {
                return oneOf(value, ['wait', 'process', 'finish', 'error']);
            }
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String
        },
        icon: {
            type: String
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
            ];
        }
    },
    methods: {
        updateChildProps (isInit) {
            const total = this.$children.length;
            this.$children.forEach((child, index) => {
                child.stepNumber = index + 1;
                if (this.direction === 'horizontal') {
                    child.total = total;
                }
                // 如果已存在status,且在初始化时,则略过
                // todo 如果当前是error,在current改变时需要处理
                if (!(isInit && child.currentStatus)) {
                    if (index == this.current) {
                        if (this.status != 'error') {
                            child.currentStatus = 'process';
                        }
                    } else if (index < this.current) {
                        child.currentStatus = 'finish';
                    } else {
                        child.currentStatus = 'wait';
                    }
                }
                if (child.currentStatus != 'error' && index != 0) {
                    this.$children[index - 1].nextError = false;
                }
            });
        },
        setNextError () {
            this.$children.forEach((child, index) => {
                if (child.currentStatus == 'error' && index != 0) {
                    this.$children[index - 1].nextError = true;
                }
            });
        },
        updateCurrent (isInit) {
            // 防止溢出边界
            if (this.current < 0 || this.current >= this.$children.length ) {
                return;
            }
            if (isInit) {
                const current_status = this.$children[this.current].currentStatus;
                if (!current_status) {
                    this.$children[this.current].currentStatus = this.status;
                }
            } else {
                this.$children[this.current].currentStatus = this.status;
            }
        },
        debouncedAppendRemove () {
            return debounce(function () {
                this.updateSteps();
            });
        },
        updateSteps () {
            this.updateChildProps(true);
            this.setNextError();
            this.updateCurrent(true);
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
                                <v-slot name="status">
                                    <span v-if="!this.icon && this.currentStatus != 'finish' && this.currentStatus != 'error'">{{ stepNumber }}</span>
                                    <span v-else class="iconClasses"></span>
                                </v-slot>
                            </div>
                        </div>
                    <div class="[prefixCls + '-main']">
                        <div class="[prefixCls + '-title']">{{ title }}</div>
                        <v-slot>
                            <div v-if="content" class="[prefixCls + '-content']">{{ content }}</div>
                        </v-slot>
                </div>
                </div>
            </div>
        )
    }
})
