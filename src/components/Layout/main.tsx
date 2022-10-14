import {defineComponent,h} from 'vue'

const prefix = 't-layout-main'
export default defineComponent({
    name: 'Main',
    props: {
        class:String
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <main class={[
                prefix,
                this.class
            ]}>{slots}</main>
        )
    }
})
