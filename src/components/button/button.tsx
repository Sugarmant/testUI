import {defineComponent,h} from 'vue'

export default defineComponent({
    name: 'TButton',
    emits: ['click'],
    props: {
        
    },
    methods: {
        handleClickLink (event) {
            console.log('click')
            this.$emit('click', event);
            
        }
    },
    render () {
        return (
            <button>
            asd
            </button>
        )
    }
})
