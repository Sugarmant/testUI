import {defineComponent,h} from 'vue'
import { oneOf } from '../../utils/nurse';


const prefixCls = 't-space';
export default defineComponent({
    name: 'Space',
    props: {
        size:{
            validator(value:String | Number){
                if(typeof value === 'string'){
                    return oneOf(value,['default','small','large']) || /^[0-9]/.test(value)
                }else if(typeof value === 'number'){
                    return true
                }else{
                    return false
                }
            },
            default:'default'
        },
        wrap:{
            type:Boolean,
            default:true
        },
        direction:{
            validator(value:string){
                return oneOf(value,['row','col'])
            },
            default:'row'
        },
        align:{
            validator(value:string){
                return oneOf(value,['left','right','center'])
            },
            default:'left'
        },
        width:{
            type:Number || String,
            default:100
        },
        split:Boolean,
        splitColor:{
            type:String,
            default:"#e8eaec"
        }
    },
    render () {
        const slots = this.$slots.default && this.$slots.default()

        const spaceSize = {
            small:8,
            default:16,
            large:24
        }
        const size = spaceSize[this.size] || this.size

        const spaceAlign = {
            left:'flex-start',
            right:'flex-end',
            center:'center'
        }
        const align = spaceAlign[this.align] || ''

        const symbol =  this.$slots.split && this.$slots.split()[0]
        return (
            <div class={[
                    prefixCls,
                    this.wrap?`${prefixCls}-wrap`:'',
                    this.direction && this.direction!='row'?`${prefixCls}-col`:''
                ]}
                style={{
                    gap:`16px ${typeof size==='number'?size+'px':size}`,
                    justifyContent:align,
                    width:typeof this.width==='number'?(this.width+'%'):this.width
                }}
            >
                {slots.map((v,k)=>{
                    return <>
                        <div class={`${prefixCls}-item`}>{v}</div>
                        {this.split && k!=slots.length-1?<div style={{color:this.splitColor}}>
                            {symbol?symbol:null}
                            {!symbol?<div style={{backgroundColor:this.splitColor}} class={`${prefixCls}-divider`}></div>:null}
                        </div>:null}
                        
                    </>
                })}
            </div>
        )
    }
})
