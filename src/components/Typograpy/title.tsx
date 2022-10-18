import {defineComponent,h} from 'vue'

const prefix = 't-typography'
export default defineComponent({
    name: 'Title',
    emits: ['click'],
    props: {
        h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean
    },
    methods: {
        handleClickLink (event) {
            this.$emit('click', event);
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        let level = '1'
        for(const prop in this.$props){
            if(/^h[1-6]$/.test(prop) && this.$props[prop]){
                console.log(prop)
                level = prop.slice(-1)
            }
        }
        return h(`h${level}`,{class:`${prefix}-h${level}`},slots)
    }
})
