import {computed, defineComponent,h, watch} from 'vue'
import { oneOf } from '../../utils/nurse'

const prefix = 't-radio-group'
export default defineComponent({
    name:'RadioGroup',
    props:{
        modelValue:Boolean,
        type:{
            validator(val){
                return oneOf(val,['default','button'])
            },
            default:'default'
        }
    },
    emits:['update:modelValue'],
    provide(){
        return {
            RadioGroup:this
        }
    },
    data(){
        return {
            currentValue:computed({
                get:()=>this.modelValue,
                set:val=>{
                    this.$emit('update:modelValue',val)
                    return val
                }
            })
        }
    },
    render(){
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={[
                prefix,
                this.type!=='default'?`${prefix}-${this.type}`:''
            ]}>
                {slots}
            </div>
        )
    }
})