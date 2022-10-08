import {defineComponent,h} from 'vue'

const prefixCls = 't-col';
export default defineComponent({
    name: 'Col',
    props: {
        span:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=-1 && val<=24?true:false
            },
            default:-1
        },
        space:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=0 && val<=24?true:false
            },
            default:0
        },
        order:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return !isNaN(val)
            }
        },
        offset:{
            validator(value:number | string){
                let val = typeof value === 'string'?Number(value):value
                return val>=-1 && val<=24?true:false
            },
            default:0
        }
    },
    render(){
        console.log(this.space)
        const slots = this.$slots.default()
        return (
            <div 
                class={[
                    prefixCls,
                    `${prefixCls}-span-${this.span}`,
                    `${prefixCls}-offset-${this.offset}`
                ]}
                style={[
                    this.span==0?'display:none':'',
                    this.space>0?`padding-left:${this.space/2}px;padding-right:${this.space/2}px`:'',
                    !isNaN(this.order)?`order:${this.order}`:''
                ]}
            
            >{slots}</div>
        )
    }
})