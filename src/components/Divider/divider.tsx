import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse'

const prefix = "t-divider"
export default defineComponent({
    name: 'Divider',
    props: {
        vertical:Boolean,
        dashed:Boolean,
        hide:Boolean,
        align:{
            validtor(val){
                return oneOf(val,['left','center','right'])
            },
            default:'left'
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={{
                [prefix]:true,
                [`${prefix}-vertical`]:this.vertical,
                [`${prefix}-dashed`]:this.dashed,
                [`${prefix}-${this.align}`]:this.align && slots,
                [`${prefix}-hide`]:this.hide
            }}>
                {slots?<span class={[`${prefix}-inner`]}>{slots}</span>:null}
            </div>
        )
    }
})
