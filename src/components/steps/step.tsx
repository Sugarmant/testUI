import {defineComponent,h} from 'vue'
import {oneOf} from "../../utils/nurse";
import Emitter from "../../utils/mixin"

const prefixCls = 't-steps';
const iconPrefixCls = 't-icon';
export default defineComponent({
    name: 'Step',
    emits: ['click'],
    mixins: [Emitter],
    props: {
        status: {
            validator (value) {
                return oneOf(value, ['wait', 'process', 'finish', 'error']);
            },
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
        },
        currentStatus: {
            type: String
        }
    },
    data () {
        return {
            prefixCls: prefixCls,
            stepNumber: '',
            nextError: false,
            total: 1,
            currentStatus: ''
        };
    },
    computed: {
        wrapClasses () {
            return [
                `${prefixCls}-item`,
                `${prefixCls}-status-${this.currentStatus}`,
                {
                    [`${prefixCls}-custom`]: !!this.icon,
                    [`${prefixCls}-next-error`]: this.nextError
                }
            ];
        },
        iconClasses () {
            let icon = '';
            if (this.icon) {
                icon = this.icon;
            } else {
                if (this.currentStatus == 'finish') {
                    icon = 'ios-checkmark';
                } else if (this.currentStatus == 'error') {
                    icon = 'ios-close';
                }
            }
            return [
                `${prefixCls}-icon`,
                `${iconPrefixCls}`,
                {
                    [`${iconPrefixCls}-${icon}`]: icon != ''
                }
            ];
        },
        styles () {
            return {
                width: `${1/this.total*100}%`
            };
        }
    },
    watch: {
        status (val) {
            console.log(val)
            this.currentStatus = val;
            if (this.currentStatus == 'error') {
                this.$parent.setNextError();
            }
        }
    },
    created () {
        this.currentStatus = this.status;
    },
    mounted () {
        this.currentStatus = this.status;
        // this.dispatch('Steps', 'append');
    },
    beforeDestroy () {
        // this.dispatch('Steps', 'remove');
    },
    render () {
        const title = this.title;
        const content = this.content
        const styles = this.styles;
        const status = this.status;
        const wrapClasses = this.wrapClasses;
        const iconClasses = this.iconClasses
        const stepNumber = this.stepNumber
        const icon = this.icon
        const currentStatus = this.currentStatus
        console.log(this.status)
        return (
            <div>
                <div class={wrapClasses} style={styles}>
                    <div class={[`${prefixCls}-tail`]}><i></i></div>
                    <div class={[prefixCls + '-head']}>
                            <div class={[prefixCls + '-head-inner']}>
                                <slot name={status}>
                                    {!icon && currentStatus != 'finish' && currentStatus != 'error' ?
                                        <span>{{ stepNumber }}</span> :
                                        <span class={iconClasses}></span>
                                    }
                                </slot>
                            </div>
                        </div>
                    <div class={prefixCls + '-main'}>
                        <div class={prefixCls + '-title'}>{ title }</div>
                        <slot>
                            {content ? <div class={prefixCls + '-content'}>{ content }</div> : null}
                        </slot>
                </div>
                </div>
            </div>
        )
    }
})
