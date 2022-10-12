import {defineComponent,h} from 'vue'

const prefix = 't-layout-header'
export default defineComponent({
    name: 'Header',
    props: {
        class:String
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <header class={[
                prefix,
                this.class
            ]}>{slots}</header>
        )
    }
})
