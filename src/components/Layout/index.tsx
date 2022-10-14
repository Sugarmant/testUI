import {defineComponent,h} from 'vue'

const prefix = 't-layout'
export default defineComponent({
    name: 'Layout',
    provide(){
        let withHeader = false
        let withSider = false
        const slots = this.$slots.default && this.$slots.default()
        for(const item of slots){
            if(item.type.name === 'Header') withHeader = true
            if(item.type.name === 'Sider') withSider = true
        }
        return {
            withHeader,
            withSider
        }
    },
    inject:{
        withHeader:{
            default:false
        },
        withSider:{
            default:false
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={{
                [prefix]:true,
                [`${prefix}-with-header`]:this.withHeader,
                [`${prefix}-with-sider`]:this.withSider,
            }}>{slots}</div>
        )
    }
})
