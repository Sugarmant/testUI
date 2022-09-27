import {defineComponent,h} from 'vue'

const prefixCls = 't-btn';

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
            <button class={prefixCls} onClick={handleClickLink}>
            asd
            </button>
        )
    }
})
