import {defineComponent,h} from 'vue'

export default defineComponent({
    name: 'Steps',
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
            asdsa
            </button>
        )
    }
})
