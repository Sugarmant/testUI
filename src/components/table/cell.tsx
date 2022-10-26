import {defineComponent,h,nextTick,ref} from 'vue'

const prefix = 't-table-cell'
export default defineComponent({
    name: 'TableCell',
    props: {
        value:{
            validator(val){
                return typeof val === 'string' || typeof val === 'number'
            },
        },
        html:{
            validator(val){
                return typeof val === 'string' || typeof val === 'number'
            },
        }
    },
    render () {
        const $htmlRef = ref()
        nextTick(()=>{
            if($htmlRef.value){
                $htmlRef.value.innerHTML = this.html
            }
        })
        return (
            <div class={prefix}>
                {this.html?<span ref={$htmlRef}></span>:null}
                {this.value?<span>{this.value}</span>:null}
            </div>
        )
    }
})
