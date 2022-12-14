import {defineComponent,h} from 'vue'

const prefix = "t-menu-group"
export default defineComponent({
    name: 'MenuGroup',
    props: {
        modelValue:String,
        vertical:Boolean
    },
    emits:['update:modelValue','select'],
    inject:['menuGroup'],
    provide(){
        return {
            menuGroup:this.menuGroup?this.menuGroup:this,
            vertical:this.vertical
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        
        return (
            <ul class={{
                [prefix]:true,
                [`${prefix}-vertical`]:this.vertical
            }}>
                {slots}
            </ul>
        )
    }
})
