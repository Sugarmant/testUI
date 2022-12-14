import {defineComponent,h} from 'vue'

const prefix = 't-layout-sider'
export default defineComponent({
    name: 'Sider',
    props: {
        class:String,
        rightSider:{
            type:Boolean,
            default:false
        },
        transparent:Boolean
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={{
                [prefix]:true,
                [this.class]:this.class,
                [`${prefix}-right`]:this.rightSider,
                [`${prefix}-transparent`]:this.transparent
            }}>{slots}</div>
        )
    }
})
