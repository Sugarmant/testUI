import {defineComponent,h} from 'vue'

const prefix = 't-radio'
export default defineComponent({
    name:'Radio',
    props:{
        label:String,
        modelValue:Boolean
    },
    emits:['update:modelValue'],
    
    render(){
        
        const onChangeModelValue = ()=>{
            this.$emit('update:modelValue',true);
        }

        return (
            <label class={[
                prefix,
                this.modelValue?`${prefix}-checked`:''
            ]}>
                <span class={[`${prefix}-inner`]}>
                    <span class={[`${prefix}-wrapper`]}></span>
                    <input checked={this.modelValue} onClick={onChangeModelValue} type="radio" />
                </span>
                {this.label}
            </label>
        )
    }
})