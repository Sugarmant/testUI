import {defineComponent,h} from 'vue'

const prefix = 't-typography'
export default defineComponent({
    name: 'Paragraph',
    props: {
        
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        
        return <p class={[`${prefix}-paragraph`]}>{slots}</p>
    }
})
