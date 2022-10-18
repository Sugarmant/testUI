import {defineComponent,h} from 'vue'
const prefix = 't-menu'
export default defineComponent({
    name: 'Menu',
    props: {
        name:String,
        to:String
    },
    inject:{
        menuGroup:{
            default:null
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()

        const onChangeMenu = e=>{
            if(this.menuGroup){
                this.menuGroup.$emit('update:modelValue',this.name)
                this.menuGroup.$emit('select',this.name)
            }
            if(this.$router) {
                e.preventDefault()
                if(this.to) this.$router.push(this.to)
                
                console.log(this.$router)
            }
        }

        return (
            <li class={{
                [prefix]:true,
                [`${prefix}-active`]:this.menuGroup && this.menuGroup.modelValue === this.name
            }}><a onClick={onChangeMenu} href={this.to}>{slots}</a></li>
        )
    }
})
