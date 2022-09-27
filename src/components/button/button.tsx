import {defineComponent,h} from 'vue'

const prefixCls = 't-btn';

import {oneOf} from '../../utils/nurse'

export default defineComponent({
    name: 'Button',
    emits: ['click'],
    props: {
        type: {
            validator (value:string) {
                return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
            },
            default:'default'
        }
    },
    render () {
        const handleClickLink = e=>{
            this.$emit('click',e)
        }

        return (
            <button class={[prefixCls,`${prefixCls}-${this.type}`]} onClick={handleClickLink}>
            asd
            </button>
        )
    }
})
