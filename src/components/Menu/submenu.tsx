import {defineComponent,h} from 'vue'

export default defineComponent({
    name: 'Submenu',
    props: {
        
    },
    methods: {
        handleClickLink (event) {
            this.$emit('click', event);
        }
    },
    render () {
        const title = this.$slots.title && this.$slots.title()
        const slots = this.$slots.default && this.$slots.default()
        return (
            <div>
                {title}
                {slots}
            </div>
        )
    }
})
