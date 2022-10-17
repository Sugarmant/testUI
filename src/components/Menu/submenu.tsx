import {defineComponent,h} from 'vue'

const prefix = 't-submenu'
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
            <div class={[prefix]}>
                {title?
                    <div class={{
                        [`${prefix}-title`]:true
                    }}>{title}</div>
                :null}
                
                {slots}
            </div>
        )
    }
})
