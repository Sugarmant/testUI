import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse'

const prefix = 't-typography'
export default defineComponent({
    name: 'Link',
    props: {
        href:String,
        target:{
            validator(val){
                return oneOf(val,['_self','_blank','_parent','_top'])
            }
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()
        
        return <a href={this.href?this.href:''} target={this.target} class={{
            [`${prefix}-link`]:true,
        }}>{slots}</a>
    }
})
