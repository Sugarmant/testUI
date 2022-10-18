import {defineComponent,h} from 'vue'

const prefix = 't-typography'
export default defineComponent({
    name: 'Blockquote',
    props: {
        
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        
        return <blockquote class={[`${prefix}-blockquote`]}>{slots}</blockquote>
    }
})
