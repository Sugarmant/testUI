import {defineComponent,h} from 'vue'

const prefix = "t-menu-group"
export default defineComponent({
    name: 'MenuGroup',
    props: {
        modelValue:String
    },
    emits:['update:modelValue','select'],
    provide(){
        return {
            menuGroup:this
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        
        return (
            <ul class={{
                [prefix]:true
            }}>
                {slots}
            </ul>
        )
    }
})
