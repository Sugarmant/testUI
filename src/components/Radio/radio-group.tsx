import {defineComponent,h} from 'vue'

const prefix = 't-radio-group'
export default defineComponent({
    name:'RadioGroup',
    props:{
        label:String,
        modelValue:Boolean
    },
    emits:['update:modelValue'],
    
    render(){

        const slots = this.$slots.default && this.$slots.default()
        for(const slot of slots){
            if(slot.type.name === 'Radio'){
                // console.log(slot)
            }
        }
        return (
            <div class={[prefix]}>
                {slots.map(v=>{
                    if(v.type.name === 'Radio'){
                        return <>
                            <div class={[`${prefix}-item`]}>
                                {v}
                            </div>
                        </>
                    }else{
                        return v
                    }
                })}
            </div>
        )
    }
})