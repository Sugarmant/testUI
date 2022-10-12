import {defineComponent,h} from 'vue'

const prefix = 't-layout'
export default defineComponent({
    name: 'Layout',
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={[prefix]}>{slots}</div>
        )
    }
})
