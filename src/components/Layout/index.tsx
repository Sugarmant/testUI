import {defineComponent,h} from 'vue'

const prefix = 't-layout'
export default defineComponent({
    name: 'Layout',
    props:{
        withHeader:{
            type:Boolean,
            default:false
        },
        withLeftSider:{
            type:Boolean,
            default:false
        },
        withRightSider:{
            type:Boolean,
            default:false
        }
    },
    render () {

        let layout;
        let withHeader = false
        let withRightSider = false
        let withLeftSider = false
        const slots = this.$slots.default && this.$slots.default()
        for(const item of slots){
            if(item.type.name === 'Layout' && !layout) layout = item
            if(item.type.name === 'Header') withHeader = true
            if(item.type.name === 'Sider'){
                if(layout){
                    withRightSider = true
                    if(!item['props']) item['props'] = {}
                    item['props']['rightSider'] = true
                }else{
                    withLeftSider = true   
                }
            }
        }
        if(layout) layout['props'] = { withHeader, withRightSider, withLeftSider }
        return (
            <div class={{
                [prefix]:true,
                [`${prefix}-with-header`]:this.withHeader,
                [`${prefix}-with-left-sider`]:this.withLeftSider,
                [`${prefix}-with-right-sider`]:this.withRightSider,
            }}>{slots}</div>
        )
    }
})
