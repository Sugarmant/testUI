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
        // this.dispatch('Steps', 'append');
    },
    beforeDestroy () {
        // this.dispatch('Steps', 'remove');
    },
    render () {
        const title = this.title;
        const styles = this.styles;
        const status = this.status;
        const wrapClasses = this.wrapClasses;
        const slots = this.$slots.default && this.$slots.default();
        return (
            <div>
                <div class={wrapClasses} style={styles}>
                    <div class={{[`${prefixCls}-tail`]: true}}><i></i></div>
                        <div class={[prefixCls + '-head']}>
                            <div class={[prefixCls + '-head-inner']}>
                                {slots}
                            </div>
                        </div>
                    <div class={prefixCls + '-main'}>
                        <div class={prefixCls + '-title'}>{ title }</div>
                        {slots}
                </div>
                </div>
            </div>
        )
    }
})
