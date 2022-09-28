import {defineComponent,h} from 'vue'
import {oneOf} from '../../utils/nurse'

const prefixCls = 't-icon';
export default defineComponent({
    name: 'Icon',
    props: {
        size:{
            validator(value){
                return oneOf(value,['default','large','small'])
            },
            default:"default"
        },
        icon:{
            validator(value){
                return typeof value === 'string'
            }
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={`${prefixCls}-box`}>
                <i class={[
                    `${prefixCls}`,
                    this.size!='default'?`${prefixCls}-${this.size}`:'',
                ]}>{this.icon}</i>
                {slots?slots:''}
            </div>
            
        )
    }
})
