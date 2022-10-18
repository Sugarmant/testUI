import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse'

const prefix = 't-typography'
export default defineComponent({
    name: 'Text',
    props: {
        type:{
            validator(val){
                return oneOf(val, ['default', 'primary','info', 'success', 'warning', 'error'])
            },
            default:'default'
        },
        mark:Boolean,
        code:Boolean,
        keybord:Boolean,
        underline:Boolean,
        linethrough:Boolean,
        strong:Boolean,
        italic:Boolean
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        
        return <span class={{
            [`${prefix}-text`]:true,
            [`${prefix}-${this.type}`]:this.type!=='default',
            [`${prefix}-mark`]:this.mark,
            [`${prefix}-code`]:this.code,
            [`${prefix}-keybord`]:this.keybord,
            [`${prefix}-underline`]:this.underline,
            [`${prefix}-linethrough`]:this.linethrough,
            [`${prefix}-strong`]:this.strong,
            [`${prefix}-italic`]:this.italic
        }}>{slots}</span>
    }
})
