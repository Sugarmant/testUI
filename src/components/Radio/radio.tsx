import {computed, defineComponent,h, watch} from 'vue'

const prefix = 't-radio'
export default defineComponent({
    name:'Radio',
    props:{
        value:String,
        modelValue:Boolean,
        disabled:Boolean
    },
    emits:['update:modelValue'],
    inject: {
        RadioGroup: {
            default: null
        }
    },
    
    render(){
        const currentValue = computed({
            get:()=>{
                if(this.RadioGroup) return this.RadioGroup.currentValue === this.value
                return this.modelValue
            },
            set:val=>{
                if(this.RadioGroup){
                    this.RadioGroup.currentValue = val
                }else{
                    this.$emit('update:modelValue',true)
                }
            }
        })
        
        const onChangeModelValue = ()=>{
            currentValue.value = this.value
        }
        const slots = this.$slots.default && this.$slots.default()

        return (
            <label class={{
                [prefix]:true,
                [`${prefix}-checked`]:currentValue.value,
                [`${prefix}-disabled`]:this.disabled
            }}>
                <span class={[`${prefix}-inner`]}>
                    <span class={[`${prefix}-wrapper`]}></span>
                    <input disabled={this.disabled} checked={currentValue.value} onClick={onChangeModelValue} type="radio" value={this.value} />
                </span>
                {slots?slots:this.value}
            </label>
        )
    }
})