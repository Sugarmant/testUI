import {defineComponent,h} from 'vue'

const prefix = 't-typography'
export default defineComponent({
    name: 'Typo',
    emits: ['click'],
    props: {
        
    },
    methods: {
        handleClickLink (event) {
            this.$emit('click', event);
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div class={{
                [prefix]:true
            }}>{slots}</div>
        )
    }
})
