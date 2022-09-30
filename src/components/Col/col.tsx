import {defineComponent,h} from 'vue'

const prefixCls = 't-col';
export default defineComponent({
    name: 'Col',
    props: {
        span:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=0 && val<=24?true:false
            },
            default:1
        }
    },
    render () {
        
        const multi = 100/24
        return (
            <div 
                class={[
                    prefixCls
                ]}
                style={[
                    this.span==0?'display:none':'width:'+this.span*multi+'%',
                ]}
            
            >coll</div>
        )
    }
})