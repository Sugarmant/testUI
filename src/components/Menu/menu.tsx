import {defineComponent,h} from 'vue'
const prefix = 't-menu'
export default defineComponent({
    name: 'Menu',
    props: {
        name:String
    },
    inject:{
        menuGroup:{
            default:null
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()

        const onChangeMenu = ()=>{
            if(this.menuGroup){
                this.menuGroup.$emit('update:modelValue',this.name)
                this.menuGroup.$emit('select',this.name)
            }
            
        }
        return (
            <li class={{
                [prefix]:true,
                [`${prefix}-active`]:this.menuGroup && this.menuGroup.modelValue === this.name
            }} onClick={onChangeMenu}>{slots}</li>
        )
    }
})
