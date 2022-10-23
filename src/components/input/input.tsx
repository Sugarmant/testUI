import {defineComponent,h} from 'vue'

export default defineComponent({
    name: 'Input',
    emits: ['click'],
    props: {
        
    },
    methods: {
        handleClickLink (event) {
            this.$emit('click', event);
        }
    },
    render () {
        return (
            <button>
            asdsaasdf
            </button>
        )
    }
})
