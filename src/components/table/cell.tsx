import {defineComponent,h} from 'vue'

const prefix = 't-table-cell'
export default defineComponent({
    name: 'TableCell',
    props: {
        value:{
            validator(val){
                return typeof val === 'string' || typeof val === 'number'
            },

        }
    },
    render () {
        return (
            <div class={prefix}>
                <span>{this.value}</span>
            </div>
        )
    }
})
