import {defineComponent,h} from 'vue'

export default defineComponent({
    name: 'Button',
    emits: ['click'],
    props: {
        
    },
    render () {
        const handleClickLink = e=>{
            this.$emit('click',e)
        }
        return (
            <button class={'t-btn'} onClick={handleClickLink}>
            asd
            </button>
        )
    }
})
