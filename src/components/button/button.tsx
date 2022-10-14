import {defineComponent,h} from 'vue'

const prefix = 't-btn';
const ani_loop = 't-ani-loop'

import Icon from '../icon/index'
import {oneOf} from '../../utils/nurse'

export default defineComponent({
    name: 'Button',
    emits: ['click'],
    props: {
        type:{
            validator (value:string) {
                return oneOf(value, ['default', 'primary', 'dashed', 'info', 'success', 'warning', 'error']);
            },
            default:'default'
        },
        size:{
            validator(value:string){
                return oneOf(value,['default','large','small'])
            },
            default:'default'
        },
        transparent:{
            validator(value:string){
                return oneOf(value,['default','full','half'])
            },
            default:'default'
        },
        shape:{
            validator(value:string){
                return oneOf(value,['default','circle','square'])
            },
            default:'default'
        },
        disabled:{
            validator(value:boolean | string){
                return oneOf(value,[true,false,''])
            },
            default:false
        },
        nativeType:String,
        focus:Boolean,
        long:Boolean,
        icon:String,
        loading:Boolean
    },
    render () {
        const handleClickLink = e=>{
            if(this.loading) return
            this.$emit('click',e)
        }
        const slots = this.$slots.default && this.$slots.default()
        const icc = !this.disabled && this.loading?<Icon class={{[ani_loop]:!this.disabled && this.loading}} icon="&#xe797" />:(this.icon?<Icon icon={this.icon} />:'')
        return (
            <button 
                class={
                    {
                        [prefix]:true,
                        [`${prefix}-${this.type}`]:this.type!='default',
                        [`${prefix}-${this.size}`]:this.size!='default',
                        [`${prefix}-${this.type}-${this.transparent}`]:this.transparent!='default',
                        [`${prefix}-${this.shape}`]:this.shape!='default',
                        [`${prefix}-focus-disabled`]:!this.focus,
                        [`${prefix}-long`]:this.long,
                        [`${prefix}-icon-only`]:icc && !slots,
                        [`${prefix}-loading`]:!this.disabled && this.loading
                    }} 
                disabled={this.disabled || this.disabled === ''} 
                type={this.nativeType?this.nativeType:''}
                onClick={handleClickLink}
            >
                {icc?icc:null}
                {slots && slots.length?<span>{slots}</span>:null}
            </button>
        )
    }
})
