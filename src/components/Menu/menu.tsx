import {defineComponent,h} from 'vue'
const prefix = 't-menu'
export default defineComponent({
    name: 'Menu',
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
            <li class={{
                [prefix]:true
            }}>{slots}</li>
        )
    }
})
