import {defineComponent,h} from 'vue'

export default defineComponent({
    name: 'Select',
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
            请选择
            </button>
        )
    }
})
