import {defineComponent,h} from 'vue'

const prefixCls = 't-btn';

export default defineComponent({
    name: 'ButtonGroup',
    props: {
    },
    render () {

        const slots = this.$slots.default && this.$slots.default()

        return (
            <div class="t-btn-group">{slots && slots.length?slots:null}</div>
        )
    }
})
