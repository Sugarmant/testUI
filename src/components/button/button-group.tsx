import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse';

const prefixCls = 't-btn-group';

export default defineComponent({
    name: 'ButtonGroup',
    props: {
        shape:{
            validator(value:string){
                return oneOf(value,['default','circle','square'])
            },
            default:'default'
        }
    },
    render () {

        const slots = this.$slots.default && this.$slots.default()

        return (
            <div class={[
                prefixCls,
                this.shape && this.shape!='default'?`${prefixCls}-${this.shape}`:''
            ]}>{slots && slots.length?slots:null}</div>
        )
    }
})
