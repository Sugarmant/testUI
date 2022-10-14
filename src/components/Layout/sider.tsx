import {defineComponent,h} from 'vue'

const prefix = 't-layout-sider'
export default defineComponent({
    name: 'Sider',
    props: {
        class:String
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={[
                prefix,
                this.class
            ]}>{slots}</div>
        )
    }
})
